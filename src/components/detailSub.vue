<template>
	<ul class="detailSub container-fluid" :style="zIndex">
		<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 detail_row">
			<div class="input-group">
			  <span class="input-group-addon" id="date">时间：</span>
			  <input v-model="date" type="text" class="form-control" id="detail_date" placeholder="输入完成时间...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 detail_row">
			<div class="input-group">
			  <span class="input-group-addon" id="add">地点：</span>
			  <input v-model="place" type="text" class="form-control" id="detail_add" placeholder="输入完成地点...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-12 col-lg-12 detail_row">
			<div class="input-group">
				<span class="input-group-addon" id="content">备注：</span>
				<input v-model="remark" type="text" class="form-control" id="detail_content" placeholder="输入如何完成...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-12 col-lg-12 detail_row">
			<div class="input-group">
			  <span class="input-group-addon" id="reward">奖励：</span>
			  <input v-model="award" type="text" class="form-control" id="detail_reward" placeholder="输入给自己的奖励...">
			</div>
		</li>
		<li class="col-xs-12 col-sm-12 col-md-12 col-lg-12 detail_row">
			<button @click="submit" style="button" class="btn btn-info sub">提&nbsp;交</button>
		</li>
	</ul>
</template>

<script>
// 引入vuex辅助函数
import {  mapActions, mapMutations } from 'vuex'
export default {
	name: 'detailSub',
	props: [ 'sgId', 'dreamId' ],
	data(){
		return {
			date: '',
			place: '',
			remark: '',
			award: ''
		}
	},
	computed:{
		zIndex(){
			return { zIndex: this.$store.state.smallGoalZIndex }
		},
		smallGoalData(){
			// 返回小目标数据
			return this.$store.state.mainData[this.dreamId].smallGoal[this.sgId];
		},
	},
	methods:{
		...mapMutations([
			// 当前日期
			'nowDate',
			// 修改主体数据 前进一小步
			'addOneStep'
		]),
		...mapActions([
			// 提交梦想数据
			'postDreamData',
			// 修改自定义提示框数据
			'changeMyAlert'
		]),
		submit(){
			if(this.$store.state.mainData[this.dreamId].smallGoal[this.sgId].finish){
				return false;
			}
			// 修改主体数据 前进一小步
			this.addOneStep({
				dreamId: this.dreamId,
				sgId: this.sgId,
				log:{
					"date": this.date,
					"place": this.place,
					"remark": this.remark,
					"award": this.award
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
					mode: 'anger',
					title: '提交失败',
					content: '服务器不稳定，请稍后再试'
				})
			});
			// 收起详细列表
			this.$emit('showHide');
		},
		
	},
	mounted(){
		// 格式化当前日期
		this.nowDate({data:'-'});
		// 初始化当前日期
		this.date = this.$store.state.nowDate;
		// 初始化备注
		this.remark = this.smallGoalData.action + this.smallGoalData.step + this.smallGoalData.unit;
		// 初始化奖励
		this.award = this.smallGoalData.award;
	}
}
	
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
		left: 5%;
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