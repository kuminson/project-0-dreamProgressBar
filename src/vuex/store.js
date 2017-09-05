// 引入vue模块
import Vue from 'vue'
// 引入状态管理模块
import Vuex from 'vuex'

// 引入state数据模块
import state from './state.js'
// 引入getter模块
import getters from './getters.js'
// 引入mutation事件模块
import mutations from './mutations.js'
// 引入action异步事件模块
import actions from './actions.js'

// 注册vuex
Vue.use(Vuex);


// 输出Vuex的实例
export default  new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});