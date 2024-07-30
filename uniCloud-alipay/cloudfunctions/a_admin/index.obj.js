const {
	get_xiaocxu,
	get_wangzhang
} = require('./xiaochengxu')
const {
	cs
} = require('./cs')

const db = uniCloud.database();
let dbJQL;
const dbCmd = db.command;
let res
const uniID = require('uni-id-common')
let clientInfo
let uniIDIns

module.exports = {
	_before: async function() { // 通用预处理器
		this.startTime = Date.now();

		clientInfo = this.getClientInfo()
		uniIDIns = uniID.createInstance({ // 创建uni-id实例，其上方法同uniID
			clientInfo
		})

		// getClientInfo中uniIdToken对应的用户
		dbJQL = uniCloud.databaseForJQL({
			clientInfo
		})
		this.dbJQL = dbJQL
		// console.log('dbJQL: ', dbJQL);

		// 自己指定用户身份
		// dbJQL.setUser({
		// 	uid: '660fe9d1d2c92d73db57b71c', // 建议此处使用真实uid
		// 	role: ['admin']
		// })
	},
	cs,
	get_wangzhang,
	get_xiaocxu,

	getall_nengliang: async function() {
		dbJQL.setUser({
			uid: '老鱼放行',
			role: ['admin']
		})
		let temp = await dbJQL.collection("a_nengliang").where(`chongdianjine > 0`).orderBy(
			'chongdianjine desc').getTemp();
		let temp2 = await dbJQL.collection('uni-id-users').field('username, _id,register_date').getTemp()
		let temp3 = await dbJQL.collection('opendb-app-list').field('name as appname, appid').getTemp()

		const res = await dbJQL.collection(temp, temp2, temp3).get()
		let res99 = {
			errCode: 0
		}
		if (res.data) {
			console.log('res.data: ', res.data);
			res99.data = res.data
		} else {
			res99.errCode = 1
			res99.data = {}
		}

		return res99
	},
	get1_nengliang: async function(id) {
		// let id = "66496471f8bac47781058c16";
		let res = await dbJQL.collection("a_nengliang").where(`user_id == "${id}"`)
			.get({
				getOne: true
			});

		let res99 = {
			errCode: 0,
		}
		// let chongdian = false;
		// let 剩余 = 0;
		if (res.data) {
			// console.log('res.data: ',res.data);
			res99.data=res.data
			if (res.data.daoqi_date) {
				let 剩余 = res.data.daoqi_date - Date.now()
				res99.data.剩余=剩余
			}
			// if (res.data.chongdian) {
			// 	res99.data.chongdian=res.data.chongdian
			// }
		} else {
			res99.errCode = 1
		}
		return res99
	},

	update1_nengliang: async function(req) {
		let user_id = req.user_id;
		// 毫秒数

		// 原子操作,不能用jql语法
		let res = await db.collection("a_nengliang").where({
				'user_id': req.user_id,
				'appid_id': req.appId
			})
			.update({
				chongdian: true
			});

		return {
			errCode: 0,
			data: res,
		}
	},

	update1_nengliang_按天数: async function(req) {
		let user_id = req.user_id;
		// 毫秒数
		console.log('req.天数: ', req.天数);
		let timestamp = req.天数 * 24 * 60 * 60 * 1000;
		// let timestamp = Date.now();

		// 原子操作,不能用jql语法
		let res = await db.collection("a_nengliang").where({
				'user_id': req.user_id,
				'appid_id': req.appId
			})
			.update({
				daoqi_date: dbCmd.inc(timestamp)
			});

		return {
			errCode: 0,
			data: res,
		}
	},

	// 注册送30天
	add1_nengliang_zhuce: async function() {
		// 毫秒数
		let timestamp = 30 * 24 * 60 * 60 * 1000;
		timestamp += Date.now();

		const token = this.getUniIdToken()
		res = await uniIDIns.checkToken(token)
		// console.log('res: ', res);
		const uid = res.uid

		// 原子操作,不能用jql语法
		res = await db.collection("a_nengliang").add({
			'user_id': uid,
			'appid_id': clientInfo.appId,
			'daoqi_date': timestamp,
		})

		return {
			errCode: 0,
			data: res,
		}
	},

	// 推送充电消息给管理员
	async push(event, context) {
		console.log('event: ', event);
		console.log('context: ', context);

		// let msg = "uni-push2.0发来消息:"
		// msg += event.msg

		let now = Date.now();
		event.time = now
		event.appId = clientInfo.appId
		event.appName = clientInfo.appName

		// 需要管理员权限查表
		dbJQL.setUser({
			uid: '老鱼放行',
			role: ['admin']
		})
		// 通过app名称，找负责充电的管理员的appid
		res = await dbJQL.collection("opendb-app-list").where(
				`name == "老鱼客栈-w3-uni"`).field("appid")
			.get({
				getOne: true
			});
		const appId = res.data.appid
		console.log('appId: ', appId);

		// 找到amtf的push_clientid
		const user = await dbJQL.collection("uni-id-users").where(
				`username == "amtf"`).field("_id")
			.getTemp();
		res = await dbJQL.collection("uni-id-device").where(
			`user_id in ${user}`).get();
		console.log('查uni-id-device res: ', res);
		console.log('查uni-id-device res.data.length: ', res.data.length);

		if (res.data.length) {
			let uniPush = uniCloud.getPushManager({
				appId
			})
			let arr9 = res.data.map(async item => {
				const push_clientid = item.push_clientid
				try {
					let res = await uniPush.sendMessage({
						push_clientid,
						"title": "ws消息",
						"content": event.title,
						"payload": {
							"text": event
						}
					})
					console.log('uniPush.sendMessage res: ', res);
					return res
				} catch (e) {
					console.log('uniPush.sendMessage e: ', e);
				}
			})
			return res = await Promise.all(arr9)
		}
		// 没有在异地登录
		return {
			errCode: 1,
			data: "没有找到管理员pushid",
		}

	},

	// 推送充电完成信息给用户
	async push_chondianwancheng(event, context) {
		console.log('event: ', event);
		console.log('context: ', context);

		// 需要管理员权限查表
		dbJQL.setUser({
			uid: '老鱼放行',
			role: ['admin']
		})

		const appId = event.appId
		const user_id = event.user_id

		// 找到用户的push_clientid
		res = await dbJQL.collection("uni-id-device").where(
			`user_id == "${user_id}"`).get();
		console.log('查uni-id-device res: ', res);
		console.log('查uni-id-device res.data.length: ', res.data.length);

		if (res.data.length) {
			let uniPush = uniCloud.getPushManager({
				appId
			})
			let arr9 = res.data.map(async item => {
				const push_clientid = item.push_clientid
				try {
					let res = await uniPush.sendMessage({
						push_clientid,
						"title": "充电后台处理完成",
						"content": event.title,
						"payload": {
							"text": event
						}
					})
					console.log('uniPush.sendMessage res: ', res);
					return res
				} catch (e) {
					console.log('uniPush.sendMessage e: ', e);
				}
			})
			return res = await Promise.all(arr9)
		}
		// 没有在异地登录
		return {
			errCode: 1,
			data: "没有找到用户pushid",
		}

	},

	// 要求退出
	async push_tuichu(event, context) {
		console.log('event: ', event);
		console.log('context: ', context);
		let pushClientId = event

		const token = this.getUniIdToken()
		res = await uniIDIns.checkToken(token)
		console.log('res: ', res);
		const uid = res.uid

		// 查当前用户其他登录点的push_clientid
		// 需要管理员权限查表
		dbJQL.setUser({
			uid: '老鱼放行',
			role: ['admin']
		})
		// 查其他用户的cid，推送退出命令
		res = await dbJQL.collection("uni-id-device").where(
				`user_id == "${uid}" && push_clientid != "${pushClientId}"`)
			.get();

		console.log('查用户其他登录点 push_clientid res: ', res);

		if (res.data.length) {
			let uniPush = uniCloud.getPushManager({
				appId: clientInfo.appId
			})

			let arr9 = res.data.map(async item => {
				let pushClientId22 = item.push_clientid
				try {
					let res = await uniPush.sendMessage({
						"push_clientid": pushClientId22,
						"title": "已在他方登录",
						"content": "0",
						"payload": {
							"他方id": "0"
						}
					})
					console.log('uniPush.sendMessage res: ', res);
					return res
				} catch (e) {
					console.log('uniPush.sendMessage e: ', e);
				}
			})
			return res = await Promise.all(arr9)
		}
		// 没有在异地登录
		return {
			errCode: 0,
			data: "没有在异地登录",
		}
	},

	_after: function(error, result) {
		if (error) {
			throw error // 如果方法抛出错误，也直接抛出不处理
		}
		try {
			result.timeCost = Date.now() - this.startTime
		} catch (e) {
			//result可能为undefined
		}
		return result
	}
}