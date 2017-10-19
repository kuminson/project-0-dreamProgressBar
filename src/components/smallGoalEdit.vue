<template>
	<div>
		<!-- 内容 -->
		<div class="smallGoalEdit" :style="sgZindex">
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
			<button style="button" class="btn btn-warning sbm" title="删除当前小目标"><span class="sbm_top">删&nbsp;&nbsp;除</span><br/>小&nbsp;目&nbsp;标</button>
		</div>
	</div>
</template>

<script>
	// 引入vuex辅助函数
	export default {
		name: 'smallGoalEdit',
		data(){
			return {
			}
		},
		computed:{
			
		},
		methods:{
		}
	} 
	
</script>

<style scoped>
	.smallGoalEdit{
		margin: 10px;
		padding: 10px;
		height: 160px;
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
		height: 80px;
		width: 100px;
		font-size: 16px;
	}
	.sbm_top{
		font-size: 20px;
		font-weight: bold;
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
</style>s