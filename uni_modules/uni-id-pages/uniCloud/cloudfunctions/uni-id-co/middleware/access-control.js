const {
	userCollection,
	dbCmd,
} = require('../common/constants')

const methodPermission = require('../config/permission')
const {
	ERROR
} = require('../common/error')

function isAccessAllowed(user, setting) {
	const {
		role: userRole = [],
		permission: userPermission = []
	} = user
	const {
		role: settingRole = [],
		permission: settingPermission = []
	} = setting
	if (userRole.includes('admin')) {
		return
	}
	if (
		settingRole.length > 0 &&
		settingRole.every(item => !userRole.includes(item))
	) {
		throw {
			errCode: ERROR.PERMISSION_ERROR
		}
	}
	if (
		settingPermission.length > 0 &&
		settingPermission.every(item => !userPermission.includes(item))
	) {
		throw {
			errCode: ERROR.PERMISSION_ERROR
		}
	}
}

module.exports = async function() {
	const methodName = this.getMethodName()
	if (!(methodName in methodPermission)) {
		return
	}
	const {
		auth,
		role,
		permission
	} = methodPermission[methodName]

	// 不应该放在前面呀
	// if (auth || role || permission) {
	//   await this.middleware.auth()
	// }
	if (role && role.length === 0) {
		throw new Error('[AccessControl]Empty role array is not supported')
	}
	if (permission && permission.length === 0) {
		throw new Error('[AccessControl]Empty permission array is not supported')
	}

	// 不停的查数据库？不好吧……改成push
	// console.log("验证token合法性之前，先查一下数据token，限制多点登录");
	// const token = this.getUniversalUniIdToken()
	// let res = await userCollection.where({
	// 	token: dbCmd.eq(token)
	// }).get()
	// console.log('token res: ', res);
	// console.log('token res.data[0]: ', res.data[0]);
	// if (res.data) {
	// 	console.log('有匹配token记录');
	// }else{
	// 	console.log('没有匹配token记录');
	// }

	if (auth || role || permission) {
		await this.middleware.auth()
	}

	return isAccessAllowed(this.authInfo, {
		role,
		permission
	})
}