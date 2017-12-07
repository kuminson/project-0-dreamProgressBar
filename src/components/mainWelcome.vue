<template>
	<div class="mainWelcome">
		<h2 class="title">欢迎来到梦想进度条系统</h2>
		<p class="content">请先登录，以便享受梦想一点点实现的喜悦</p>
		<!-- <p class="log">如果没有账号，可以使用测试账号体验下功能</p> -->
		<!-- <p class="log">用户名：admin，密码：1</p> -->
	</div>
</template>

<script>
export default{
	name:'mainWelcome',
	data(){
		return{

		}
	},
	mounted(){
		// 判断是登录状态
		if(this.$AV.User.current()){
			// 跳转页面
			this.$router.push('/home');
		}
	}
}
</script>

<style scoped>
	.mainWelcome{
		width: 100%;
		height: 100%;
	}
	.title{
		margin-top: 0;
		padding-top: 50px;
		text-align: center;
		font-size: 2em;
		font-weight: bold;
		color: #337AB7;
	}
	.content{
		margin-top: 100px;
		text-align: center;
		font-size: 2em;
		font-weight: bold;
		color: #518EC2;
	}
	.log{
		margin-top: 50px;
		text-align: center;
		font-size: 2em;
		color: #518EC2;
	}
</style>