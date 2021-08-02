<template>
	<div class="container-fluid px-0">
		<TopNav />
		<router-view></router-view>
	</div>
</template>

<script>
import TopNav from '@/components/partials/TopNav.vue'
export default {
	components: {
		TopNav,
	},

}
</script>

<style>

</style>