<template>
	<div class="main" >
		<div class="content" :style="mainsy">
			<router-view name="mainSmallGoals"></router-view>
			<router-view name="mainDreams"></router-view>
			<router-view name="mainEdit"></router-view>
			<router-view name="mainWelcome"></router-view>
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
				return {
					'minHeight':  mainh + 'px'
				}
			}
		},
		methods:{
			
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
</style>