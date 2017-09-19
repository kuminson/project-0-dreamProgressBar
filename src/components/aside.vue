<template>
	<!-- <transition name="aisdeBar"> -->
		<div class="aside" :class="asideSty">
			<div class="asidecnt">
				<div class="dreambox">
					<!-- 增加梦想按钮 -->
					<button type="button" class="btn btn-info newDm"><span class="glyphicon glyphicon-plus-sign addIcon"></span>新梦想</button>
					<!-- 梦想列表 -->
					<ul class="dreamList">
						<li v-for="dream in dreams" class="dream" key="dream">
							<a href="#" class="dreamLink">
								<!-- 梦想标题 -->
								<h4 class="dreamTitle">编程大师</h4>
								<!-- 奖励 -->
								<p class="dreamAward">奖励：iPhoneX</p>
								<!-- 进度条 -->
								<div class="progress pgs">
								  <div class="progress-bar progress-bar-primary progress-bar-striped active-o" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;min-width:2em">
								  40%
								  </div>
								</div>
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
export default{
	data(){
		return {
			dreams:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			// 侧边栏距左侧距离
			asideSty: '',
			// 显示隐藏按钮是否存在
			shbtn: true
		}
	},
	methods:{
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
		margin-left: auto;
		margin-right: auto;
		border-radius: 4px;
		margin-bottom: 10px;
	}
	.dreamLink{
		border: 1px solid #46b8da;
		background-color: #5bc0de;
		border-radius: 4px;
		display: block;
		padding: 5px;
		color: #FFF;
		text-decoration: none;
	}
	.dreamLink:hover{
		background-color: #31b0d5;
		border-color: #269abc;
	}
	.dreamLink:active{
		background-color: #269abc;
		border-color: #1b6d85;
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