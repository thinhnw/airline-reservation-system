<template>
	<div class="container-fluid px-0">
		<TopNav />
		<router-view></router-view>
		<TheFooter />
	</div>
</template>

<script>
import TopNav from '@/components/partials/TopNav.vue'
import TheFooter from '@/components/partials/TheFooter.vue'
export default {
	components: {
		TopNav, TheFooter
	},

}
</script>

<style>

</style>