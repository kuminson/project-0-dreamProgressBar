<template>
	<div class="head">
		<div class="content">
			<div class="logo">
				<span class="title"><span class="firstletter">D</span>ream<span class="firstletter">P</span>rogress<span class="firstletter">B</span>ar
				</span>
				<div class="progress logo_pro">
				  <div class="progress-bar progress-bar-striped active-o" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
				  </div>
				</div>
			</div>
			<div class="user">
				<button type="button" class="user_btn btn btn-default btn-info">登录</button>
				<button type="button" class="user_btn btn btn-default btn-info">注册</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {

			}
		},
		mounted(){
			// 获取模块高度
			this.$store.commit('changeHeight',{key: 'headHeight', val:this.$el.offsetHeight});
		}
	}
</script>

<style scoped>
	.head{
		width: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
		background-color: #d9edf7;
	}
	.content{
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
	}
	.logo{
		float: left;
	}
	.title{
		font-size: 30px;
		font-weight: bold;
		color: #518EC2;
	}
	.firstletter{
		font-size: 40px;
		font-weight: bold;
		color: #337AB7;
	}
	.logo_pro{
		height: 10px;
		margin-bottom: 20px;
		margin-top: -5px;
	}
	.user{
		float: right;
		height: 80px;
		line-height: 80px;
	}
	.user_btn{
		margin-left: 10px;
	}
</style>