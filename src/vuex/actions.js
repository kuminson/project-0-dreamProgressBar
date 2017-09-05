const actions = {
	tryaction ({ commit }){
		// 返回promise函数
		return new Promise((resolve,reject) => {
			setTimeout(()=>{
				commit('trymotation')
				resolve()
			}, 2000)
		})
	}
}

export default actions