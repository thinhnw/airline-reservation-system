<template>
	<b-overlay :show="isSpinning" class="h-100" spinner-variant="primary" bg-color="#18191a">
		<router-view />
	</b-overlay>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
	computed: {
		...mapGetters({
			isSpinning: 'app/isSpinning'
		})
	},
	async mounted() {
		try {
			await store.dispatch('auth/me')
		} catch (err) {
			console.error(err)
		}
	}
}
</script>

<style lang="scss" scoped>
</style>