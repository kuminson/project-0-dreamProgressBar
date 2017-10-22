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
	},
	allDream(state){
		// 缓存整体梦想数据
		let allData = state.mainData;
		// 初始化梦想列表
		let allDream = [];
		// 遍历梦想
		for(let dream in allData){
			// 缓存梦想
			allDream.push(allData[dream])
		}
		return allDream;
		// 返回梦想
	},
	smallGoalRate(state){
		return (dreamId,sgId) =>{
			// 缓存小目标数据
			let sgData = state.mainData[dreamId].smallGoal[sgId];
			// 排除已完成小目标
			if(sgData.finish){
				return 100;
			}
			// 计算小目标百分数
			let sgRate = Math.floor(parseInt(sgData.accomplish) / parseInt(sgData.amount) * 100);
			// 返回百分数
			return sgRate;
		}
	},
	dreamRate(state, getters){
		return (dreamId) =>{
			let sgAllRate = 0;
			let sgNum = 0;
			// 循环获取小目标id
			let dreamData = state.mainData[dreamId];
			// 排除已完成梦想
			if(dreamData.finish){
				return 100;
			}
			for(let sgId in dreamData.smallGoal){
				// 累加百分数
				sgAllRate += getters.smallGoalRate(dreamId, sgId);
				sgNum++;
			}
			// 排除没有小目标
			let dRate = Math.floor(sgAllRate / sgNum);
			if(isNaN(dRate)){
				return 0;
			}
			// 返回计算平均百分数
			return dRate;
		}
	},
	dreamAllsg(state){
		return (dreamId) => {
			// 初始化小目标
			let smallGoal = [];
			if(state.mainData[dreamId] == undefined){
				return smallGoal;
			}
			let sgData = state.mainData[dreamId].smallGoal;
			// 循环小目标
			for(let sgId in sgData){
				// 缓存小目标
				smallGoal.push(sgData[sgId]);
			}
			// 返回小目标
			return smallGoal;
		}
	}
}

export default getters