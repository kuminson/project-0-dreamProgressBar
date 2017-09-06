<template>
	<div class="smallGoal">
		<!-- 进度条 -->
		<div class="progress pgs">
		  <div class="progress-bar progress-bar-info progress-bar-striped active-o" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;min-width:2em">
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
		<button style="button" class="btn btn-primary sbm"><span class="sbm_top">前&nbsp;&nbsp;进</span><br/>一&nbsp;小&nbsp;步</button>
		<!-- 详细提交 -->
		<button style="button" class="btn btn-info misbm">详细提交</button>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.smallGoal{
		margin: 10px;
		padding: 10px;
		border: 2px solid #518EC2;
		border-radius: 10px;
		overflow: hidden;
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
</style>