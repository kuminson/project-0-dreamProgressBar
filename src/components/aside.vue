<template>
	<!-- <transition name="aisdeBar"> -->
		<div class="aside" :class="asideSty">
			<div class="asidecnt">
				<div class="dreambox">
					<!-- 增加梦想按钮 -->
					<button type="button" class="btn btn-info newDm" @click="newDream"><span class="glyphicon glyphicon-plus-sign addIcon"></span>新梦想</button>
					<!-- 梦想列表 -->
					<ul class="dreamList">
						<li v-for="dream in mainData" class="dream" :key="dream.id">
							<a :href="'/#/dream/'+dream.id" class="dreamLink">
								<router-view name="dream" :dreamId="dream.id"></router-view>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- 显示按钮 -->
			<button type="button" class="btn-primary showBtn" @click="showAside" v-if="shbtn">梦想列表<span class="glyphicon glyphicon-circle-arrow-right"></span></button>
			<!-- 隐藏按钮 -->
			<button type="button" class="btn-primary showBtn" @click="hideAside" v-if="!shbtn">收起列表<span class="glyphicon glyphicon-circle-arrow-left"></span></button>
		</div>
	<!-- </transition> -->
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default{
	data(){
		return {
			// 侧边栏距左侧距离
			asideSty: '',
			// 显示隐藏按钮是否存在
			shbtn: true
		}
	},
	computed:{
		// 梦想整体数据
		mainData(){
			return this.$store.getters.allDream;
		}
	},
	methods:{
		...mapMutations([
			// 新建梦想
			'createDream'
		]),
		showAside(){
			// 显示侧边栏
			this.asideSty = 'showAside';
			// 换成隐藏按钮
			this.shbtn = false;
		},
		hideAside(){
			// 隐藏侧边栏
			this.asideSty = '';
			// 换成显示按钮
			this.shbtn = true;
		},
		newDream(){
			let nowDate = new Date;
			let stamp = nowDate.getTime();
			// 新建梦想数据
			this.createDream({
				dreamId: stamp,
				dreamData: {
					id: stamp,
					finish: false,
					title: "",
					award: "",
					smallGoal: {}
				}
			})
			// 跳转梦想编辑页面
			this.$router.push('/edit/'+ stamp);
		}
	}
}
	
</script>

<style scoped>
	.aside{
		position: fixed;
		top: 0;
		left: -200px;
		bottom: 0;
		width: 200px;
		background-color: #337ab7;
		z-index: 1000;
		transition: all 0.5s;
	}
	.asidecnt{
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
	.dreambox{
		height: 100%;
		width: 217px;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.showAside{
		left: 0;
		box-shadow: 2px 0 15px 5px;
	}
	.showBtn{
		position: absolute;
		left: 200px;
		top: 100px;
		border-radius: 0 10px 10px 0;
		border-width: 1px 1px 1px 0;
		border-style: solid;
		border-color: #2e6da4;
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
		width: 40px;
		box-shadow: 6px 1px 5px 0px #444;
	}
	.newDm{
		width: 180px;
		padding-top: 10px;
		padding-bottom: 10px;
		font-size: 20px;
		font-weight: bold;
		letter-spacing: 5px;
		margin: 10px;
	}
	.addIcon{
		vertical-align: middle;
		margin-top: -4px;
	}
	.dreamList{
		padding-left: 0;
		margin: 0;
		overflow-y: auto;
		overflow-x: hidden;
	}
	.dream{
		list-style: none;
		width: 180px;
		/*margin-left: auto;*/
		/*margin-right: auto;*/
		border-radius: 4px;
		margin-bottom: 10px;
	}
	.dreamLink{
		margin-left: 10px;
		text-decoration: none;
		display: block;
	}
</style>