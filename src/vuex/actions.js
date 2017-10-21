const actions = {
	tryaction ({ commit }){
		// 返回promise函数
		return new Promise((resolve,reject) => {
			setTimeout(()=>{
				commit('trymotation');
				resolve();
			}, 2000)
		})
	},
	// 更新梦想数据
	postDreamData({ state, commit }, newObj){
		// 返回promise函数
		return new Promise((resolve,reject) => {
			// 缓存数据ID
			let dataId = state.$AV.User.current().get('dataId');
			// 声明数据表和数据ID
			let dreamData = state.$AV.Object.createWithoutData('dreamData', dataId);
			// 修改属性
			dreamData.set('dream',state.mainData);
			// 保存到云端
			dreamData.save().then((data)=>{
				// 成功回调
				resolve();
			}).catch((error)=>{
				console.log(error);
				// 失败回调
				reject();
			})
		})
	},
	// 修改自定义提示框数据
	changeMyAlert({ state }, newObj){
		// 返回promise函数
		return new Promise((resolve, reject) => {
			// 修改自定义提示框数据
			state.myAlert = newObj;
			// 延时2秒后关闭提示框
			setTimeout(() => {
				// 初始化自定义提示框数据
				state.myAlert = {
					state: false,
					mode: 'success',
					title: '提交成功',
					content: ''
				}
				// 返回成功
				resolve();
			},2000);
		})
	},
	// 获取用户对应的数据
	getDreamData({ state, commit }, newObj){
		// 返回promise函数
		return new Promise((resolve, reject) => {
			// 声明数据表
			let query = new state.$AV.Query('dreamData');
			// 获取数据
			query.get(state.$AV.User.current().get('dataId')).then((data)=>{
				// 缓存数据
				commit('changeMainData',{
					data: data.get('dream')
				});
				// 成功回调
				resolve();
			}).catch((error)=>{
				console.log(error);
				// 失败回调
				reject();
			})
		});
	}
}

export default actions