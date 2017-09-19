<template>
	<div>
		<router-view name="header"></router-view>
	    <router-view name="main"></router-view>
	    <router-view name="aside"></router-view>
	    <router-view name="footer"></router-view>
	</div>
</template>

<script>
export default {
	name: 'index',
	data () {
		return {

		}
	},
	methods:{
	},
	mounted(){
		// 获取窗口高度
		this.$store.commit('changeHeight',{key: 'bodyHeight', val:(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)});
		let that = this;
		let resizeTime = '';
		// 把窗口resize事件和数据绑定
		window.addEventListener('resize',function(){
			// 清除之前的计时器
			if(resizeTime){
				clearTimeout(resizeTime);
			}
			// 设定计时器
			resizeTime = setTimeout(function(){
				that.$store.commit('changeHeight',{key: 'bodyHeight', val:(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)});
			},200)
		});

	}
}
</script>

<style></style>