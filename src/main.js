// 引入vue框架
import Vue from 'vue'
// 引入主模块
import App from './App.vue'
// 引入状态管理
import store from './vuex/store.js'
// 引入路由管理
import router from './vue-router/router.js'
// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入bootstrap自定义样式
import './assets/css/bootstrapDefined.css'
// 引入leancloud 远程存储系统
import AV from './components/leancloud.js';
// 注册leancloud
Vue.use(AV);

new Vue({
	store,
	router,
  el: '#app',
  render: h => h(App)
})
