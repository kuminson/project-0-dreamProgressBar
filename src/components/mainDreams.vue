<template>
	<div class="mainDreams">
		<h2 class="title">大梦想<span class="subtitle">big dream</span></h2>
		<button class="edit btn btn-default btn-info" @click="toEdit">调整目标</button>
		<div class="bgDream">
			<router-view name="dream"></router-view>
		</div>
		<transition-group name="smallGoalList" tag="ul" class="goals container">
			<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal" v-for="sg in smallGoals" v-bind:key="sg">
				<router-view name="smallGoal"></router-view>
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
				smallGoals:[1,2,3,4,5]
			}
		},
		computed:{
			
		},
		methods:{
			toEdit(){
				// 获取梦想id值
				let nowDreamId = this.$store.state.nowDreamId;
				// 跳转页面
				this.$router.push("/edit/"+nowDreamId);
			}
		},
		mounted(){
			// 缓存当前梦想ID
			this.$store.commit({
				type: 'changeNowDreamId',
				data: this.$route.params.dreamId
			});
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
		transition: all 1s;
	}
	.smallGoalList-enter, .smallGoalList-leaver-to{
		opacity: 0;
	}
	.smallGoalList-move{
		transition: transform 2s;
	}
</style>