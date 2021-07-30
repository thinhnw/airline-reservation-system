<template>
	<b-overlay :show="isSpinning" class="h-100" spinner-variant="primary" bg-color="#18191a">
		<router-view />
	</b-overlay>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			isSpinning: 'app/isSpinning'
		})
	}
}
</script>

<style lang="scss" scoped>
</style>