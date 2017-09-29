<template>
	<div class="dream">
		<!-- 梦想标题 -->
		<h4 class="dreamTitle">编程大师</h4>
		<!-- 奖励 -->
		<p class="dreamAward">奖励：iPhoneX</p>
		<!-- 进度条 -->
		<div class="progress pgs">
		  <div class="progress-bar progress-bar-primary progress-bar-striped active-o" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;min-width:2em">
		  40%
		  </div>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.dream{
		border: 1px solid #46b8da;
		background-color: #5bc0de;
		border-radius: 4px;
		padding: 5px;
		color: #FFF;
	}
	.dream:hover{
		background-color: #31b0d5;
		border-color: #269abc;
	}
	.dream:active{
		background-color: #269abc;
		border-color: #1b6d85;
	}
	.dreamTitle{
		font-weight: bold;
		letter-spacing: 2px;
	}
	.pgs{
		margin-bottom: 10px;
	}
	.dreamAward{
		margin-bottom: 4px;
	}
</style>