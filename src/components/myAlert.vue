<template>
	<transition name="myAlert">
		<div :class="modeCls" v-if="myAlertData.state">
			<!-- success -->
			<span class="icon glyphicon glyphicon-ok-sign" v-if="myAlertData.mode=='success'"></span>
			<!-- danger -->
			<span class="icon glyphicon glyphicon-remove-sign" v-if="myAlertData.mode=='danger'"></span>
			<!-- warning -->
			<span class="icon glyphicon glyphicon-question-sign" v-if="myAlertData.mode=='warning'"></span>
			<!-- info -->
			<span class="icon glyphicon glyphicon-info-sign" v-if="myAlertData.mode=='info'"></span>
			<span class="title">{{ myAlertData.title }}</span>
			<p class="content">{{ myAlertData.content }}</p>
		</div>
	</transition>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
export default {
	name:'myAlert',
	data(){
		return{

		}
	},
	computed:{
		// 自定义提示框数据
		myAlertData(){
			return this.$store.state.myAlert;
		},
		// 自定义提示框模式
		modeCls(){
			return ['myAlert', this.myAlertData.mode];
		}
	},
	methods:{
		...mapActions([
			// 初始化提示框数据
			'initMyAlert'
		])
	}
}
	
</script>

<style scoped>
	.myAlert{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate( -50%, -50%);
		padding: 10px;
		text-align: center;
		border-radius: 10px;
		z-index: 2000;
		max-width: 40%;
		border-width: 2px;
		border-style: solid;
	}
	.success{
		background-color: #dff0d8;
		border-color: #d6e9c6;
		color: #3c763d;
	}
	.info{
		background-color: #d9edf7;
		border-color: #d9edf7;
		color: #31708f;
	}
	.warning{
		background-color: #fcf8e3;
		border-color: #faebcc;
		color: #8a6d3b;
	}
	.danger{
		background-color: #f2dede;
		border-color: #ebccd1;
		color: #a94442;
	}
	.icon{
		font-size: 24px;
		margin-top: -2px;
		vertical-align: middle;
	}
	.title{
		font-size: 20px;
		font-weight: bold;
		vertical-align: middle;
	}
	.content{
		margin-bottom: 0;
		margin-top: 10px;
		font-size: 16px;
	}
	.myAlert-enter-active, .myAlert-leave-active{
		transition: opacity 0.5s;
	}
	.myAlert-enter, .myAlert-leave-to{
		opacity: 0;
	}
</style>