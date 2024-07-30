const {
	postRegister,
	preRegisterWithPassword
} = require('../../lib/utils/register')
const {
	verifyCaptcha
} = require('../../lib/utils/captcha')
const {
	CAPTCHA_SCENE
} = require('../../common/constants')

/**
 * 注册普通用户
 * @tutorial https://uniapp.dcloud.net.cn/uniCloud/uni-id-pages.html#register-user
 * @param {Object} params
 * @param {String} params.username    用户名
 * @param {String} params.password    密码
 * @param {String} params.captcha     图形验证码
 * @param {String} params.nickname    昵称
 * @param {String} params.inviteCode  邀请码
 * @returns
 */
module.exports = async function(params = {}) {
	console.log("注册普通用户👇");
	const schema = {
		username: 'username',
		mobile: 'mobile',
		password: 'password',
		captcha: 'string',
		nickname: {
			required: false,
			type: 'nickname'
		},
		inviteCode: {
			required: false,
			type: 'string'
		}
	}
	this.middleware.validate(params, schema)
	const {
		username,
		mobile,
		password,
		nickname,
		captcha,
		inviteCode
	} = params

	await verifyCaptcha.call(this, {
		captcha,
		scene: CAPTCHA_SCENE.REGISTER
	})

	console.log("验证用户名是否已经注册👇");
	const {
		user,
		extraData
	} = await preRegisterWithPassword.call(this, {
		user: {
			username
		},
		password
	})

	console.log("验证手机号是否已经注册👇");
	await preRegisterWithPassword.call(this, {
		user: {
			mobile
		},
		password
	})

	// console.log("注册成功，写入数据库");
	return postRegister.call(this, {
		user,
		extraData: {
			mobile,
			...extraData,
			nickname
		},
		inviteCode
	})
}