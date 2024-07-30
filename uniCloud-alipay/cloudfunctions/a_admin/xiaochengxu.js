module.exports = {
	get_xiaocxu: async function() {
		// 自己指定用户身份
		// this.dbJQL.setUser({
		// 	uid: '6659538dd1bcb7d2d7477b57', // 建议此处使用真实uid
		// 	role: ['admin']
		// })
		// asc(升序)、desc(降序)。默认是升序

		/* 因为序号是中文而出错，报错信息也看不懂…………因为是阿里云？ */
		// let res = await this.dbJQL.collection("a_xiaocxu").orderBy('序号')

		let res = await this.dbJQL.collection("a_xiaocxu")
			.get();

		// let res = await this.dbJQL.collection("a_xiaocxu")
		// 	.get();

		return {
			errCode: 0,
			data: res.data,
		}
	},
	/* 找网址 */
	get_wangzhang: async function() {
		let res = await this.dbJQL.collection("a_xiaocxu").where(`${new RegExp('老鱼客栈', 'i')}.test(biaoti)`).field("link")
			.get({
				getOne: true
			});

		return {
			errCode: 0,
			data: res.data,
		}
	}

}