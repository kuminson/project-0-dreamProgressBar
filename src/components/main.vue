<template>
	<div class="main" >
		<div class="content" :style="mainsy">
			<h2 class="title">小目标<span class="subtitle">small goal</span></h2>
			<ul class="goals container">
				<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal"><router-view name="smallGoal"></router-view></li>
				<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal"><router-view name="smallGoal"></router-view></li>
				<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal"><router-view name="smallGoal"></router-view></li>
				<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal"><router-view name="smallGoal"></router-view></li>
				<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal"><router-view name="smallGoal"></router-view></li>
				<li class="col-xs-12 col-sm-12 col-md-6 col-lg-6 goal"><router-view name="smallGoal"></router-view></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'main',
		data () {
			return {

			}
		},
		computed:{
			mainsy(){
				let mainh = this.$store.state.bodyHeight - this.$store.state.headHeight - this.$store.state.footHeight;
				console.log('main',this.$store.state.bodyHeight,this.$store.state.headHeight,this.$store.state.footHeight,mainh);
				return {
					'minHeight':  mainh + 'px'
				}
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 100%;
	}
	.content{
		width: 80%;
		background-color: #bce8f1;
		margin-left: auto;
		margin-right: auto;
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
	}
</style>