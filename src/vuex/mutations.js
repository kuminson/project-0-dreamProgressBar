const motations = {
	// main模块高度 变更操作
	changeHeight(state,newObj){
		state[newObj.key] = newObj.val;
	},
	// 小目标累加器 累加操作
	addSmallGoalZI(state){
		state.smallGoalZIndex += 2;
	}
}

export default motations;