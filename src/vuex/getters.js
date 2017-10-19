const getters = {
	trygetter: state => {
		return state.trynum + 100;
	},
	nowDreamData: state => {
		// 返回当前梦想对应的数据
		return state.mainData[state.nowDreamId];
	},
	allSmallGoal: state => {
		// 获取整体梦想数据
		let allData = state.mainData;
		// 所有小目标数组
		let sgdata = [];
		// 遍历所有数据获取小目标
		for(let dream in allData){
			if(allData[dream].finish){
				continue;
			}
			for(let smallGoal in allData[dream].smallGoal){
				// 判断未完成
				if(allData[dream].smallGoal[smallGoal].finish){
					continue;
				}
				// 缓存小目标
				sgdata.push(allData[dream].smallGoal[smallGoal])
			}
		}
		// 返回小目标数组
		return sgdata;
	}
}

export default getters