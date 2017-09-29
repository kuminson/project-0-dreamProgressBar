const getters = {
	trygetter: state => {
		return state.trynum + 100;
	},
	nowDreamData: state => {
		// 返回当前梦想对应的数据
		return state.mainData[state.nowDreamId];
	}
}

export default getters