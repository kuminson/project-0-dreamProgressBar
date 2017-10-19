const motations = {
	// main模块高度 变更操作
	changeHeight(state,newObj){
		state[newObj.key] = newObj.val;
	},
	// 小目标累加器 累加操作
	addSmallGoalZI(state){
		state.smallGoalZIndex += 2;
	},
	// 刷新主体数据
	changeMainData(state,newObj){
		state.mainData = newObj.data;
	},
	// 刷新当前梦想ID
	changeNowDreamId(state,newObj){
		state.nowDreamId = newObj.data;
	},
	// 当前日期
	nowDate(state, newObj){
		// 实例化日期
		let nowDate = new Date;
		// 获取时间
		let nyear = nowDate.getFullYear();
		let nmonth = nowDate.getMonth() + 1;
		if(nmonth < 10){
			nmonth = '0'+ nmonth;
		}
		let ndate = nowDate.getDate();
		if(ndate < 10){
			ndate = '0' + ndate;
		}
		// 返回时间
		state.nowDate = nyear + newObj.data + nmonth + newObj.data + ndate;
	},
	// 修改主体数据
	addOneStep(state, newObj){
		// 缓存小目标数据
		let sgData = state.mainData[newObj.dreamId].smallGoal[newObj.sgId];
		// 增加已完成数据
		sgData.accomplish += sgData.step;
		// 写入历史记录
		sgData.log.push(newObj.log);
		// 判断是否完成
		if(sgData.accomplish >= sgData.amount){
			sgData.finish = true;
		}
	},
	// 注入leancloud到vuex里
	initLeancloud(state, newObj){
		state.$AV = newObj;
	}
}

export default motations;