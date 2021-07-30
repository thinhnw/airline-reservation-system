<template>
	<div class="w-100">
		<div class="container">
			<div class="row">
				<div class="col d-flex justify-content-end">
					<div v-if="!isLogged">
						<router-link to="login" class="mr-2">
							<small>Login</small>
						</router-link>
						<router-link to="register">
							<small>
								Register
							</small>
						</router-link>
					</div>
					<div v-else>
						<small>Hello, {{ userInfo.first_name + ' ' + userInfo.last_name }}</small>
						<small class="mx-2">|</small>
						<a class="link-primary pointer" @click="logout">
							<small>
								Logout
							</small>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo',
			isLogged: 'auth/isLogged'
		})
	},
	methods: {
		...mapActions({
			logout: 'auth/logout'
		})
	}
}
</script>

<style>

</style>