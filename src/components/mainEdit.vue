<template>
	<div class="mainEdit">
		<h2 class="title">调整梦想<span class="subtitle">big dream</span></h2>
		<button class="edit btn btn-default btn-info" @click="finishEdit">完成调整</button>
		<div class="bgDream">
			<router-view name="dreamEdit"></router-view>
		</div>
		<transition-group name="smallGoalList" tag="ul" class="goals container">
			<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal" key="addsg">
				<div class="addsg">
					<button class="btn btn-info addsgBtn" @click="changeShowNewsg"><span class="glyphicon glyphicon-plus-sign addIcon"></span>增加新的小目标</button>
				</div>
			</li>
			<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal" key="newsg" v-if="showNewsg">
				<router-view name="smallGoalNew"></router-view>
			</li>
			<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal" v-for="sg in smallGoals" v-bind:key="sg">
				<router-view name="smallGoalEdit"></router-view>
			</li>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: 'mainEdit',
		data () {
			return {
				smallGoals:[1,2,3,4,5],
				showNewsg: false
			}
		},
		computed:{
			
		},
		methods:{
			finishEdit(){
			},
			changeShowNewsg(){
				this.showNewsg = !this.showNewsg;
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
	.mainEdit{
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
	.addsg{
		width: 100%;
		padding: 10px;		
	}
	.addsgBtn{
		width: 100%;
		height: 160px;
		font-size: 26px;
		font-weight: bold;
		letter-spacing: 5px;
		border-radius: 10px;
	}
	.addIcon{
		vertical-align: middle;
		margin-top: -4px;
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
	.smallGoalList-leave-active{
		position: absolute;
	}
	.smallGoalList-enter, .smallGoalList-leave-to{
		opacity: 0;
	}
	.smallGoalList-move{
		transition: transform 1s;
	}
</style>