<template>
	<div class="dream">
		<!-- 梦想标题 -->
		<p class="dreamAward">
			<div class="input-group">
			  <span class="input-group-addon" id="title">梦想</span>
			  <input type="text" class="form-control" placeholder="输入梦想名称" aria-describedby="title" v-model="nowDreamTitle">
			</div>
		</p>
		<!-- 奖励 -->
		<p class="dreamAward">
			<div class="input-group">
			  <span class="input-group-addon" id="award">奖励</span>
			  <input type="text" class="form-control" placeholder="输入完成后的奖励" aria-describedby="award" v-model="nowDreamAward">
			</div>
		</p>
		<!-- 进度条 -->
		<div class="progress pgs">
		  <div class="progress-bar progress-bar-primary progress-bar-striped active-o" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;min-width:2em">
		  40%
		  </div>
		</div>
	</div>
</template>

<script>
export default{
	name: "dreamEdit",
	data(){
		return{
		}
	},
	props:['dreamId'],
	computed:{
		nowDreamData(){
			return this.$store.state.mainData[this.dreamId];	
		},
		nowDreamTitle:{
			get(){
				return this.$store.state.mainData[this.dreamId].title;
			},
			set( val ){
				this.$store.commit('changeDreamData',{
					dreamId: this.dreamId,
					key: 'title',
					val: val
				});
			}
		},
		nowDreamAward:{
			get(){
				return this.$store.state.mainData[this.dreamId].award;
			},
			set( val ){
				this.$store.commit('changeDreamData',{
					dreamId: this.dreamId,
					key: 'award',
					val: val
				});
			}
		}
	},
	mounted(){
	}
}
</script>

<style scoped>
	.dream{
		border: 1px solid #46b8da;
		background-color: #5bc0de;
		border-radius: 4px;
		padding: 5px;
		color: #FFF;
	}
	.dreamTitle{
		font-weight: bold;
		letter-spacing: 2px;
	}
	.pgs{
		margin-bottom: 10px;
	}
	.dreamAward{
		margin-bottom: 4px;
	}
</style>