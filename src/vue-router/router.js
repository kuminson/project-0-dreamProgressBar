// 引入vue主框架
import Vue from 'vue'
// 引入vue-router路由框架
import VueRouter from 'vue-router'


// 引入主页模块
import index from '../components/index.vue'
// 引入头部模块
import header from '../components/header.vue'
// 引入主体模块
import main from '../components/main.vue'
// 引入脚步模块
import footer from '../components/footer.vue'
// 引入小目标模块
import smallGoal from '../components/smallGoal.vue'
// 引入详细提交模块
import detailSub from '../components/detailSub.vue'
// 引入侧边栏模块
import aside from '../components/aside.vue' 
// 引入梦想模块
import dream from '../components/dream.vue' 
// 引入小目标主体模块
import mainSmallGoals from '../components/mainSmallGoals.vue' 
// 引入梦想主体模块
import mainDreams from '../components/mainDreams.vue' 
// 引入梦想编辑模块
import mainEdit from '../components/mainEdit.vue'
// 引入梦想可编辑模块
import dreamEdit from '../components/dreamEdit.vue'
// 引入小目标可编辑模块
import smallGoalEdit from '../components/smallGoalEdit.vue'
// 引入小目标创建模块
import smallGoalNew from '../components/smallGoalNew.vue'
// 引入自定义提示框
import myAlert from '../components/myAlert.vue'
// 引入欢迎模块
import mainWelcome from '../components/mainWelcome.vue'

// 注册vue-router路由框架
Vue.use(VueRouter);


const routes = [
	{
		path: '/',
		components: {
			index
		},
		children:[
			{
				path: '/',
				components: {
					header,
					main,
					footer,
					myAlert
				},
				children:[
					{
						path: '/',
						components: {
							mainWelcome
						}
					}
				]
			},{
				path: '/home',
				components: {
					header,
					main,
					footer,
					aside,
					myAlert
				},
				children:[
					{
						path: '/home',
						components: {
							mainSmallGoals,
							dream
						},
						children:[
							{
								path: '/home',
								components:{
									smallGoal
								},
								children:[
									{
										path: '/home',
										components:{
											detailSub
										}
									}
								]
							}
						]
					}
				]
			},{
				path: '/dream/:dreamId',
				components: {
					header,
					main,
					footer,
					aside,
					myAlert
				},
				children:[
					{
						path: '/dream/:dreamId',
						components: {
							mainDreams,
							dream
						},
						props:{
							mainDreams: true,
							dream: false
						},
						children:[
							{
								path: '/dream/:dreamId',
								components:{
									smallGoal,
									dream
								},
								children:[
									{
										path: '/dream/:dreamId',
										components:{
											detailSub
										}
									}
								]
							}
						]
					}
				]
			},{
				path: '/edit/:dreamId',
				components: {
					header,
					main,
					footer,
					aside,
					myAlert
				},
				children:[
					{
						path: '/edit/:dreamId',
						components: {
							mainEdit,
							dream
						},
						props:{
							mainEdit: true,
							dream: false
						},
						children:[
							{
								path: '/edit/:dreamId',
								components:{
									smallGoalEdit,
									dreamEdit,
									smallGoalNew
								},
								children:[
									{
										path: '/edit/:dreamId',
										components:{
											detailSub
										}
									}
								]
							}
						]
					}
				]
			}
		]
	}
]

// 实例化路由
const router = new VueRouter({
	routes
});

export default router;