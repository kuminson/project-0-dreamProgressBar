<template>
	<div class="head">
		<div class="content">
			<div class="logo" @click="goHome">
				<span class="title"><span class="firstletter">D</span>ream<span class="firstletter">P</span>rogress<span class="firstletter">B</span>ar
				</span>
				<div class="progress logo_pro">
				  <div class="progress-bar progress-bar-striped active-o" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
				  </div>
				</div>
			</div>
			<div class="user">
				<div v-if="!logState" class="input-group uinput">
					<input v-model="username" type="text" class="form-control" placeholder="用户名..." aria-describedby="username">
				</div>
				<div v-if="!logState" class="input-group uinput">
					<input v-model="password" type="password" class="form-control" placeholder="密码..." aria-describedby="password">
				</div>
				<span v-if="logState">欢迎您&nbsp;{{$AV.User.current().get('username')}}</span>
				<button v-if="!logState" @click="login" type="button" class="user_btn btn btn-default btn-info">登录</button>
				<button v-if="logState" @click="logout" type="button" class="user_btn btn btn-default btn-info">注销</button>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: 'header',
		data () {
			return {
				username: '',
				password: '',
				logState: !!(this.$AV.User.current())
			}
		},
		beforeRouteEnter(to, from, next){
			next(vm => {
				// 判断登录状态
				if(vm.logState){
					// 登录状态 

				}else{
					// 非登录状态 跳转首页
					vm.$router.push('/');
				}
			});
		},
		computed:{
		},
		methods:{
			...mapActions([
				// 修改自定义提示框数据
				'changeMyAlert',
				'getDreamData'
				
			]),
			...mapMutations([
				// 清除缓存
				'clearMainData'
			]),
			// 登录操作
			login(){
				// 发送登录请求
				this.$AV.User.logIn(this.username, this.password).then((data) => {
					// 改变登录状态
					this.logState = !!(this.$AV.User.current());
					// 跳转home页面
					this.$router.push('/home');
					// 获取数据
					this.getDreamData();
				}).catch((error)=>{
					// 报错
					this.changeMyAlert({
						state: true,
						mode: 'danger',
						title: '登录失败',
						content: '用户名或者密码错误'
					});

				})
			},
			// 登出操作
			logout(){
				this.$AV.User.logOut();
				// 改变登录状态
				this.logState = !!(this.$AV.User.current());
				// 清除缓存
				this.clearMainData();
				// 跳转欢迎页面
				this.$router.push('/');
			},
			// 返回home页
			goHome(){
				this.$router.push('/home');
			}
		},
		mounted(){
			// 获取模块高度
			this.$store.commit('changeHeight',{key: 'headHeight', val:this.$el.offsetHeight});
			// 改变登录状态
			this.logState = !!(this.$AV.User.current());
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
		cursor: pointer;
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
		text-align: right;
		/*height: 80px;*/
		/*line-height: 80px;*/
	}
	.uinput{
		/*float: left;*/
		display: block;
		margin-bottom: 10px;
		vertical-align: middle;
		overflow: hidden;
		margin-left: 10px;
	}
	.user_btn{
		/*float: right;*/
		margin-left: 10px;
	}
	@media screen and (min-width: 625px){
		.user{
			float: right;
			height: 80px;
			line-height: 80px;
		}	
		.uinput{
			display: inline-block;
		}
	}
</style>