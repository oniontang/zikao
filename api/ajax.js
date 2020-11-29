// 封装统一请求接口
export function HTTP(url, data, method = 'post') {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			data: data,
			method: method,
			header: {
				token: token
			},
			success() {
				let data = res.data
				if(res.statusCode !=== 200) {
					return reject(data.errMsg)
				}
				if(data.status === 0) {
					return reject(data.msg)
				}
				if(data.status === -1) {
					uni.hideLoading()
					return uni.showModal({
						title: '温馨提示',
						content: '请登录',
						confirmText: '登录',
						confirmColor: '#02A774',
						success(res) {
							if(res.confirm) {
								uni.navigateTo({
									url: '/pages/index/index'
								})
							} else {
								uni.switchTab({
									url: '/pages/index/index'
								})
							}
						}
					})
				}
			},
			fail() {
				reject('请求失败，请检查网络连接是否正常')
			}
		})
	})
}