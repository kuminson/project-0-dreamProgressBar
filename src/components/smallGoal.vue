<template>
	<div>
		<!-- 内容 -->
		<div class="smallGoal" :style="sgZindex">
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
			<button style="button" class="btn btn-primary sbm" title="快速提交完成的一个步骤" @click="oneStep"><span class="sbm_top">前&nbsp;&nbsp;进</span><br/>一&nbsp;小&nbsp;步</button>
			<!-- 详细提交 -->
			<button style="button" class="btn btn-info misbm" v-if="detailTag" @click="turnDetailSub">详细提交<span class="glyphicon glyphicon-triangle-bottom icon_sub"></span></button>
			<!-- 收起列表 -->
			<button style="button" class="btn btn-info misbm" v-else="detailTag" @click="turnIndex">收起列表<span class="glyphicon glyphicon-triangle-top icon_sub"></span></button>
		</div>
		<!-- 表单 -->
		<transition name="detail">
			<router-view name="detailSub" v-on:showHide="changeSDS" :sgId="sgId" :dreamId="dreamId" v-if="showDetailSub"></router-view>
		</transition>
	</div>
</template>

<script>
	// 引入vuex辅助函数
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: 'smallGoal',
		props: [ 'sgId', 'dreamId' ],
		data(){
			return {
				detailTag: true,
				showDetailSub: false,
				sgZindex: {zIndex: 10},
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
			turnDetailSub(){
				// 增加公用累加器
				this.$store.commit('addSmallGoalZI');
				// 变换按钮
				this.detailTag = false;
				// 改变z-index
				this.sgZindex.zIndex = this.$store.state.smallGoalZIndex + 1;
				// 显示表单
				this.showDetailSub = true;
			},
			turnIndex(){
				// 增加公用累加器
				this.$store.commit('addSmallGoalZI');
				// 变换按钮
				this.detailTag = true;
				// 改变z-index
				this.sgZindex.zIndex = this.$store.state.smallGoalZIndex + 1;
				// 隐藏表单
				this.showDetailSub = false;
			},
			...mapActions([
				// 提交梦想数据
				'postDreamData',
				// 修改自定义提示框数据
				'changeMyAlert'
			]),
			...mapMutations([
				// 修改主体数据 前进一小步
				'addOneStep',
				// 当前日期
				'nowDate'
			]),
			oneStep(){
				if(this.$store.state.mainData[this.dreamId].smallGoal[this.sgId].finish){
					return false;
				}
				// 修改当前日期格式
				this.nowDate({data:'-'});
				// 修改主体数据 前进一小步
				this.addOneStep({
					dreamId: this.dreamId,
					sgId: this.sgId,
					log:{
						"date": this.$store.state.nowDate,
						"place": "无",
						"remark": this.smallGoalData.action + this.smallGoalData.step + this.smallGoalData.unit,
						"award": this.smallGoalData.award
					}
				});
				// 更新梦想数据
				this.postDreamData().then(() => {
					// 显示完成提交
					this.changeMyAlert({
						state: true,
						mode: 'success',
						title: '提交成功',
						content: '成功完成前进一小步'
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
			},
			// 翻转showDetailSub
			changeSDS(){
				this.showDetailSub = !this.showDetailSub;
			}
		}
	} 
	
</script>

<style scoped>
	.smallGoal{
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