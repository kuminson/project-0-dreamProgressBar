<template>
	<div>
		<router-view name="header"></router-view>
	    <router-view name="main"></router-view>
	    <router-view name="footer"></router-view>
	    <router-view name="aside"></router-view>
	</div>
</template>

<script>
export default {
	name: 'index',
	data () {
		return {

		}
	}
}
</script>

<style></style>