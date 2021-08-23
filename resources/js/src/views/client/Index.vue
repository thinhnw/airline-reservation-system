<template>
	<div class="client-portal container-fluid px-0 h-100">
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
.client-portal {
	position: relative;
	padding-bottom: 100px;
}
</style>
