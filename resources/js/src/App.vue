<template>
	<b-overlay :show="isSpinning" class="h-100" spinner-variant="primary" bg-color="#18191a">
		<div class="h-100" v-if="canBeRendered">
			<router-view />
		</div>
	</b-overlay>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
export default {
	computed: {
		...mapGetters({
			isSpinning: 'app/isSpinning',
			isLogged: 'auth/isLogged',
			isMeFetched: 'auth/isMeFetched',
		}),
		canBeRendered() {
			if (this.isLogged && this.isMeFetched) return true
			return !this.isLogged
		}
	},
	methods: {
		async fetchMe() {
			try {
				store.commit('app/SET_SPINNER', true)
				await store.dispatch('auth/me')
			} catch (err) {
				console.error(err)
			} finally {
				store.commit('app/SET_SPINNER', false)
			}
		}
	},
	created() {
		if (this.isLogged)
			this.fetchMe()
	}
}
</script>

<style lang="scss" scoped>
</style>