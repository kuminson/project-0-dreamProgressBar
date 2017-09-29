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
	}
}

export default motations;