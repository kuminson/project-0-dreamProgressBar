<template>
	<ul class="detailSub container-fluid">
		<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 detail_row">
			<div class="input-group">
			  <span class="input-group-addon" id="date">时间：</span>
			  <input type="text" class="form-control" id="detail_date" placeholder="输入完成时间...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 detail_row">
			<div class="input-group">
			  <span class="input-group-addon" id="add">地点：</span>
			  <input type="text" class="form-control" id="detail_add" placeholder="输入完成地点...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-12 col-lg-12 detail_row">
			<div class="input-group">
				<span class="input-group-addon" id="content">备注：</span>
				<input type="text" class="form-control" id="detail_content" placeholder="输入如何完成...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-12 col-lg-12 detail_row">
			<div class="input-group">
			  <span class="input-group-addon" id="reward">奖励：</span>
			  <input type="text" class="form-control" id="detail_reward" placeholder="输入给自己的奖励...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-12 col-lg-12 detail_row">
			<button style="button" class="btn btn-info sub">提&nbsp;交</button>
		</li>
	</ul>
</template>

<script>
	
</script>

<style scoped>
	.detailSub{
		width: 90%;
		/*padding-left: 0;*/
		/*padding-right: 0;*/
		background-color: #bce8f1;
		padding-bottom: 10px;
		margin-top: -12px;
		border: 2px solid #518EC2;
		border-radius: 0 0 10px 10px;
		position: absolute;
		z-index: 15;
		left: 40px;
	}
	.sub{
		width: 100%;
	}
	.detail_row{
		list-style: none;
		margin-top: 5px;
		padding-left: 5px;
		padding-right: 5px;
	}
</style>