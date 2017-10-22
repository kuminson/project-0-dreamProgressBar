<template>
	<div>
		<!-- 内容 -->
		<div class="smallGoalNew" >
			<!-- 详细信息 -->
			<ul class="infos">
				<li class="info">
					<div class="input-group">
						<span class="input-group-addon iptTitle">小目标名：</span>
						<input v-model.trim="title" type="text" class="form-control iptBox" placeholder="小目标的名称...">
					</div>
				</li>
				<li class="info">
					<div class="input-group">
						<span class="input-group-addon">总共次数：</span>
						<input v-model.trim="amount" type="text" class="form-control" placeholder="完成小目标所需次数...">
					</div>
				</li>
				<li class="info">
					<div class="input-group">
						<span class="input-group-addon">每步次数：</span>
						<input v-model.trim="step" type="text" class="form-control" placeholder="每步完成次数...">
					</div>
				</li>
				<li class="info">
					<div class="input-group">
						<span class="input-group-addon">次数单位：</span>
						<input v-model.trim="unit" type="text" class="form-control" placeholder="次数单位...">
					</div>
				</li>
				<li class="info">
					<div class="input-group">
						<span class="input-group-addon">动作名称：</span>
						<input v-model.trim="action" type="text" class="form-control" placeholder="行为描述...">
					</div>
				</li>
				<li class="info">
					<div class="input-group">
						<span class="input-group-addon">完成奖励：</span>
						<input v-model.trim="award" type="text" class="form-control" placeholder="每次完成奖励...">
					</div>
				</li>
			</ul>
			<!-- 快速提交 -->
			<button style="button" class="btn btn-success sbm" title="保存当前小目标" @click="save"><span class="sbm_top">保&nbsp;&nbsp;存</span><br/>小&nbsp;目&nbsp;标</button>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex'
	export default {
		name: 'smallGoalNew',
		props:['dreamId'],
		data(){
			return {
				title: '',
				amount: '',
				step: '',
				unit: '',
				action: '',
				award: '',
			}
		},
		watch:{
			amount(){
				let amounta = [...this.amount];
				let amountay = [];
				// 去除空格和非数字
				for(let val of amounta){
					if(!isNaN(val) && val !== ' '){
						amountay.push(val);
					}
				}
				this.amount = amountay.join('');
			},
			step(){
				let amounta = [...this.step];
				let amountay = [];
				// 去除空格和非数字
				for(let val of amounta){
					if(!isNaN(val) && val !== ' '){
						amountay.push(val);
					}
				}
				this.step = amountay.join('');
			}
		},
		computed:{
		},
		methods:{
			...mapActions([
				// 提交梦想数据
				'postDreamData',
				// 修改自定义提示框数据
				'changeMyAlert'
			]),
			...mapMutations([
				// 新建小目标
				'createSmallGoal'
			]),
			save(){
				// 检查非空
				if(this.title == '' || this.amount == '' || this.step == '' || this.unit == '' || this.action == '' || this.award == ''){
					// 显示提交失败
					this.changeMyAlert({
						state: true,
						mode: 'warning',
						title: '表单不完整',
						content: '表格不能为空'
					});
					return false;
				}
				// 新建数据
				let nowDate = new Date();
				this.createSmallGoal({
					dreamId: this.dreamId,
					sgId: nowDate.getTime(),
					sgData: {
						id: nowDate.getTime(),
						dreamId: this.dreamId,
						finish: false,
						title: this.title,
						amount: this.amount,
						step: this.step,
						accomplish: 0,
						unit: this.unit,
						action: this.action,
						award: this.award,
						log:[]
					}
				});
				// 更新梦想数据
				this.postDreamData().then(() => {
					// 显示完成提交
					this.changeMyAlert({
						state: true,
						mode: 'success',
						title: '提交成功',
						content: '成功新建一个小目标'
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
	.smallGoalNew{
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
		position: absolute;
		padding-left: 0;
		list-style: none;
		font-size: 16px;
		color: #337AB7;
		font-weight: bold;
		left: 20px;
		right: 150px;
		top: 15px;
	}
	.info{
		width: 50%;
		float: left;
		box-sizing: border-box;
		padding: 4px;
	}
	.sbm{
		float: right;
		margin-top: 30px;
		margin-right: 20px;
		height: 80px;
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