<template>
	<div class="mainDreams">
		<h2 class="title">大梦想<span class="subtitle">big dream</span></h2>
		<button class="edit btn btn-default btn-info" @click="toEdit">调整目标</button>
		<div class="bgDream">
			<router-view v-if="mainDataExist" name="dream" :dreamId="dreamId"></router-view>
		</div>
		<transition-group name="smallGoalList" tag="ul" class="goals container">
			<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal" v-for="sg in smallGoals" v-bind:key="sg.id">
				<router-view name="smallGoal" :sgId="sg.id" :dreamId="sg.dreamId"></router-view>
			</li>
		</transition-group>
		<div class="addsg">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mainDreams',
		data () {
			return {
			}
		},
		props:['dreamId'],
		computed:{
			// dreamId(){
			// 	return this.$store.state.nowDreamId
			// },
			mainDataExist(){
				return !!(this.$store.state.mainData[this.dreamId])
			},
			smallGoals(){
				return this.$store.getters.dreamAllsg(this.dreamId);
			}
		},
		methods:{
			toEdit(){
				// 获取梦想id值
				let nowDreamId = this.$store.state.nowDreamId;
				// 跳转页面
				this.$router.push("/edit/"+this.dreamId);
			}
		},
		mounted(){
			
		},
		beforeRouteEnter (to, from, next) {
			next(vm => {
				// 如果梦想不存在
				if(!vm.mainDataExist){
					// 跳转回主页
					vm.$router.push('/home');
				}
			})
		}
	}
</script>

<style scoped>
	.mainDreams{
		position: relative;
	}
	.title{
		margin-top: 0;
		padding-top: 20px;
		margin-bottom: 20px;
		text-align: center;
		font-weight: bold;
		color: #337AB7;
		letter-spacing: 2px;
		font-size: 34px;
	}
	.edit{
		position: absolute;
		right: 20px;
		top: 22px;
	}
	.subtitle{
		font-size: 20px;
		letter-spacing: 0;
		margin-left: 4px;
		vertical-align: bottom;
		color: #518EC2;
	}
	.bgDream{
		padding: 10px;
	}
	.goals{
		width: 100%;
		padding-left: 0;
		padding-right: 0;
		list-style: none;
		margin-bottom: 0;
		padding-bottom: 20px;
	}
	.goal{
		padding-left: 0;
		padding-right: 0;
		display: inline-block;
	}
	.smallGoalList-enter-active, .smallGoalList-leave-active{
		transition: all 0.3s;
	}
	.smallGoalList-leave-active{
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.smallGoalList-enter, .smallGoalList-leaver-to{
		opacity: 0;
	}
	.smallGoalList-move{
		transition: transform .5s;
	}
</style>