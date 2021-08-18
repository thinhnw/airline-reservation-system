<template>
	<b-container fluid class="auth-background h-100 text-light">
		<b-row align-h="center" class="h-100">
			<b-col cols="8" lg="4" class="h-100 text-center d-flex align-items-center">
				<div class="form-wrapper">
					<h1 class="text-warning">
						Welcome to Avia Airways!
					</h1>
					<p>Please login to your account.</p>
					<b-form class="mt-5" @submit.prevent="login">
						<b-form-group class="mb-3">
							<b-form-input v-model="email" type="email" placeholder="Enter your email"  />
						</b-form-group>
						<b-form-group class="mb-3">
							<b-form-input v-model="password" type="password" placeholder="Enter your password"  />
						</b-form-group>
						<b-form-group class="mb-3">
							<b-button type="submit" variant="primary" class="w-100">Login</b-button>
						</b-form-group>
					</b-form>
					<div v-if="$route.name != 'admin-login'">
						<small>Don't have an account?
							<router-link to="register">Sign up</router-link>
						</small>
					</div>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		async login () {
			this.$store.commit('app/SET_SPINNER', true)
      const payload = {
        userDetails: {
          email: this.email,
          password: this.password
        }
      }
			try {
      	await this.$store.dispatch('auth/loginJWT', payload)
			} catch (err) {
				console.error(err)
				this.$bvToast.toast(err.message, {
					title: 'Unauthorized',
					autoHideDelay: 1000,
					appendToast: false,
					solid: true,
					toaster: 'b-toaster-top-right',
					variant: 'danger'
				})
			} finally {
				this.$store.commit('app/SET_SPINNER', false)
			}
    },
	},
	mounted() {
		console.log(this.$route)
	}
}
</script>

<style scoped>
.form-wrapper {
	transform: translateY(-100px);
	width: 100%;
	padding: 0 30px;
}
</style>