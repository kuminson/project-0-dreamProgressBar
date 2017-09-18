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

// 注册vue-router路由框架
Vue.use(VueRouter);


const aside = { template: '<div style="position:fixed">aside</div>'}

const routes = [
	{
		path: '/',
		components: {
			index: index
		},
		children:[
			{
				path: '/',
				components: {
					header: header,
					main: main,
					footer: footer,
					aside: aside
				},
				children:[
					{
						path: '/',
						components: {
							smallGoal: smallGoal,
						}
					}
				]
			}
		]
	},{
		path: '/index',
		components: {
			index
		},
		children:[
			{
				path: '/index',
				components: {
					header,
					main,
					footer,
					aside
				},
				children:[
					{
						path: '/index',
						components:{
							smallGoal
						},
						children:[
							{
								path: '/index',
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

// 实例化路由
const router = new VueRouter({
	routes
});

export default router;