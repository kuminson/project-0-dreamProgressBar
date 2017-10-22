<template>
	<div>
		<!-- 内容 -->
		<div class="smallGoalEdit">
			<!-- 进度条 -->
			<div class="progress pgs">
			  <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" :style="barStyle">
			  {{ progressNum }}%
			  </div>
			</div>
			<!-- 详细信息 -->
			<ul class="infos">
				<li>小目标：{{ smallGoalData.title }}</li>
				<li>小进度：{{ smallGoalData.accomplish }}/{{ smallGoalData.amount }}</li>
				<li>小步骤：{{ smallGoalData.action }}{{ smallGoalData.step }}{{ smallGoalData.unit }}</li>
				<li>小奖励：{{ smallGoalData.award }}</li>
			</ul>
			<!-- 快速提交 -->
			<button style="button" class="btn btn-warning sbm" title="删除当前小目标" @click="del"><span class="sbm_top">删&nbsp;&nbsp;除</span><br/>小&nbsp;目&nbsp;标</button>
		</div>
	</div>
</template>

<script>
	// 引入vuex辅助函数
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: 'smallGoalEdit',
		props: [ 'sgId', 'dreamId' ],
		data(){
			return {
			}
		},
		computed:{
			smallGoalData(){
				// 返回小目标数据
				return this.$store.state.mainData[this.dreamId].smallGoal[this.sgId];
			},
			progressNum(){
				// 返回进度百分比
				return this.$store.getters.smallGoalRate(this.dreamId, this.sgId);
			},
			barStyle(){
				// 进度条样式
				return {
					width: this.progressNum + '%',
					minWidth: '2em'
				}
			}
		},
		methods:{
			...mapActions([
				// 提交梦想数据
				'postDreamData',
				// 修改自定义提示框数据
				'changeMyAlert'
			]),
			...mapMutations([
				// 删除小目标
				'deleteSmallGoal'
			]),
			del(){
				if(!confirm("确定要删除小目标？")){
					return false;
				}
				// 删除数据
				this.deleteSmallGoal({
					dreamId: this.dreamId,
					sgId: this.sgId
				})
				// 提交数据
				console.log("数据删除");
				// 更新梦想数据
				this.postDreamData().then(() => {
					// 显示完成提交
					this.changeMyAlert({
						state: true,
						mode: 'success',
						title: '删除成功',
						content: '成功删除了一个小目标'
					})
				}).catch(()=>{
					// 显示提交失败
					this.changeMyAlert({
						state: true,
						mode: 'danger',
						title: '提交失败',
						content: '服务器不稳定，请稍后再试'
					})
				});
			}
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