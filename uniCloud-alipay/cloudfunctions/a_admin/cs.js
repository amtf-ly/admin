let dbJQL = null

module.exports = {
	cs: async function(event, context) {
		// 自己指定用户身份
		dbJQL = this.dbJQL

		dbJQL.setUser({
			uid: '660fe9d1d2c92d73db57b71c', // 建议此处使用真实uid
			role: ['admin']
		})

		res = await dbJQL.collection("opendb-app-list").where(
				`name == "老鱼客栈小程序"`).field("appid")
			.get({
				getOne: true
			});
		const appId = res.data.appid
		console.log('appId: ', appId);

		const user = await dbJQL.collection("uni-id-users").where(
				`username == "amtf"`).field("_id")
			.getTemp();
		res = await dbJQL.collection("uni-id-device").where(
				`user_id in ${user}`).get();

		const push_clientid = res.data[0].push_clientid
		console.log('push_clientid: ', push_clientid);

		console.log('res: ', res);
		return res
	},

	cs2: async function(event, context) {
		// 自己指定用户身份
		dbJQL.setUser({
			uid: '660fe9d1d2c92d73db57b71c', // 建议此处使用真实uid
			role: ['admin']
		})

		res = await dbJQL.collection("opendb-app-list").where(
				`name == "老鱼客栈小程序"`).field("appid")
			.get({
				getOne: true
			});
		const appId = res.data.appid
		console.log('appId: ', appId);

		res = await dbJQL.collection("uni-id-users").where(
				`username == "amtf"`).field("username")
			.get({
				getOne: true
			});
		const uid = res.data._id
		console.log('uid: ', uid);

		res = await dbJQL.collection("uni-id-device").where(
				`user_id == "${uid}"`).field("push_clientid")
			.get();
		const push_clientid = res.data[0].push_clientid
		console.log('push_clientid: ', push_clientid);

		console.log('res: ', res);
		return res
	}


}