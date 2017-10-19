<template>
	<div>
		<h2 class="title">小目标<span class="subtitle">small goal</span></h2>
		<transition-group name="smallGoalList" tag="ul" class="goals container">
			<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal" v-for="sg in allSmallGoal" v-bind:key="sg.id">
				<router-view name="smallGoal" :sgId="sg.id" :dreamId="sg.dreamId" ></router-view>
			</li>
		</transition-group>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'mainSmallGoals',
		data () {
			return {
			}
		},
		computed:{
			...mapGetters([
				'allSmallGoal'	
			])
		},
		methods:{
		}
	}
</script>

<style scoped>
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
	.subtitle{
		font-size: 20px;
		letter-spacing: 0;
		margin-left: 4px;
		vertical-align: bottom;
		color: #518EC2;
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