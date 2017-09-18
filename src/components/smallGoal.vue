<template>
	<div>
		<!-- 内容 -->
		<div class="smallGoal" :style="sgZindex">
			<!-- 进度条 -->
			<div class="progress pgs">
			  <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;min-width:2em">
			  40%
			  </div>
			</div>
			<!-- 详细信息 -->
			<ul class="infos">
				<li>小目标：<span>背30篇英文文章</span></li>
				<li>小进度：3/30</li>
				<li>小步骤：<span>1</span><span>篇文章</span></li>
				<li>小奖励：<span>榴莲一个</span></li>
			</ul>
			<!-- 快速提交 -->
			<button style="button" class="btn btn-primary sbm" title="快速提交完成的一个步骤"><span class="sbm_top">前&nbsp;&nbsp;进</span><br/>一&nbsp;小&nbsp;步</button>
			<!-- 详细提交 -->
			<button style="button" class="btn btn-info misbm" v-if="detailTag" @click="turnDetailSub">详细提交<span class="glyphicon glyphicon-triangle-bottom icon_sub"></span></button>
			<!-- 收起列表 -->
			<button style="button" class="btn btn-info misbm" v-else="detailTag" @click="turnIndex">收起列表<span class="glyphicon glyphicon-triangle-top icon_sub"></span></button>
		</div>
		<!-- 表单 -->
		<transition name="detail">
			<router-view name="detailSub" v-if="showDetailSub"></router-view>
		</transition>
	</div>
</template>

<script>
	// 引入vuex辅助函数
	import { mapState } from 'vuex'
	export default {
		name: 'smallGoal',
		data(){
			return {
				detailTag: true,
				showDetailSub: false,
				sgZindex: {zIndex: 10}
			}
		},
		computed:{
			
		},
		methods:{
			turnDetailSub(){
				// 跳转至主页
				this.$router.push('/index');
				// 变换按钮
				this.detailTag = false;
				// 调整z轴
				this.sgZindex.zIndex = 20;
				// 显示表单
				this.showDetailSub = true;
			},
			turnIndex(){
				// 跳转至主页
				this.$router.push('/index');
				// 变换按钮
				this.detailTag = true;
				// 隐藏表单
				this.showDetailSub = false;
				setTimeout(() => {
					// 调整z轴
					this.sgZindex.zIndex = 10;
				},1000);
			}
		}
	} 
	
</script>

<style scoped>
	.smallGoal{
		margin: 10px;
		padding: 10px;
		border: 2px solid #518EC2;
		border-radius: 10px;
		overflow: hidden;
		background-color: #bce8f1;
		position: relative;
		z-index: 10;
	}
	.pgs{
		
	}
	.infos{
		padding-left: 0;
		list-style: none;
		float: left;
		margin-left: 20px;
		font-size: 16px;
		color: #337AB7;
		font-weight: bold;
	}
	.sbm{
		float: right;
		margin-right: 20px;
		height: 60px;
		width: 100px;
		font-size: 16px;
	}
	.sbm_top{
		font-size: 20px;
		font-weight: bold;
	}
	.misbm{
		clear: right;
		float: right;
		margin-right: 20px;
		margin-top: 6px;
		width: 100px;
	}
	.icon_sub{
		vertical-align: middle;
		margin-left: 5px;
	}
	/*detail模块动画*/
	.detail-enter-active{
		transition: all .5s ease; 
	}
	.detail-leave-active{
		transition: all 1s ease;
	}
	.detail-enter, .detail-leave-to{
		transform: translateY(-140px);
		opacity: 0;
	}
</style>