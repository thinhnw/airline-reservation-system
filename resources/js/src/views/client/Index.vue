<template>
	<div class="client-portal container-fluid px-0" :style="{ paddingBottom: isFooterMinimal ? '73px' : '626px'}">
		<TopNav />
		<router-view></router-view>
		<TheFooter :isMinimal="isFooterMinimal" />
	</div>
</template>

<script>
import TopNav from '@/components/partials/TopNav.vue'
import TheFooter from '@/components/partials/TheFooter.vue'
export default {
	components: {
		TopNav, TheFooter
	},
	computed: {
		isFooterMinimal() {
			return !this.$route.name.includes('home')
		}
	}
}
</script>

<style>
.client-portal {
	position: relative;
	height: fit-content;
	min-height: 100%;
}
</style>
