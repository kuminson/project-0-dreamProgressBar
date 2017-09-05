// 引入vue主框架
import Vue from 'vue'
// 引入vue-router路由框架
import VueRouter from 'vue-router'


// 引入主页模块
import index from '../components/index.vue'
// 引入头部模块
import header from '../components/header.vue'
// 引入脚步模块
import footer from '../components/footer.vue'

// 注册vue-router路由框架
Vue.use(VueRouter);


const main = { template: '<div>main</div>'}
const aside = { template: '<div>aside</div>'}

const routes = [
	{
		path: '/',
		components: {
			index: index
		},
		children:[
			{
				path: '',
				components: {
					header: header,
					main: main,
					footer: footer,
					aside: aside
				}
			}
		]
	}
]

// 实例化路由
const router = new VueRouter({
	routes
});

export default router;