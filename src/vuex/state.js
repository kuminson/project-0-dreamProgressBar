// 定义需要通信的数据
const state = {
	// 控制main模块高度自适应
	bodyHeight: 0,
	headHeight: 0,
	footHeight: 0,
	// 小目标z轴累加器
	smallGoalZIndex: 10,
	// 总体数据
	mainData: {},
	// 当前梦想ID
	nowDreamId: 0,
	// 自定义提示框
	myAlert: {
		state: false,
		mode: 'success',
		title: '提交成功',
		content: ''
	},
	// leancloud
	$AV:null,
	// 今天日期
	nowDate: ''

}

export default state