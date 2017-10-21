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
	// 空载梦想数据
	noloadDreamData:{
		"000000":{
			"id": "000000",
			"finish": false,
			"title": "梦想标题",
			"award": "梦想奖励",
			"smallGoal":{
				"000":{
					"id": "000",
					"dreamId": "000000",
					"finish": false,
					"title": "小目标标题",
					"amount": 1000,
					"step": 10,
					"accomplish": 0,
					"unit": "单位",
					"action": "动作",
					"award": "小目标奖励",
					"log":[]
				}
			}
		}
	},
	// 空载小目标数据
	noloadSGData:{
		"000":{
			"id": "000",
			"dreamId": "000000",
			"finish": false,
			"title": "小目标标题",
			"amount": 1000,
			"step": 10,
			"accomplish": 0,
			"unit": "单位",
			"action": "动作",
			"award": "小目标奖励",
			"log":[]
		}
	},
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