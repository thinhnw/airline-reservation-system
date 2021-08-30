<template>
	<b-container class="checkout-success">
		<b-row>
			<b-col class="py-5 text-center">
				<p><em class="text-primary">Your transaction has been made successfully!</em></p>
				<p>Please check your email about for your ticket!</p>
				<p>Return home (<span>{{timer}}</span>)</p>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			timer: 5,
			timerInterval: null
		}
	}	,
	mounted() {
		this.timerInterval = setInterval(() => {
			this.timer--
			if (this.timer === 0) this.$router.push({ name: 'home' })
		}, 1000)
	},
	destroyed() {
		clearInterval(this.timerInterval)
	}
}
</script>

<style scoped>
.checkout-success {
	padding-top: 120px;
}
</style>