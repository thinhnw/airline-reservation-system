<template>
	<div class="top-nav" :class="{ 'bg-primary': isScrolled || isNotHome }">
		<b-container class="px-0">
			<b-row>
				<b-col class="d-flex justify-content-end px-0">
					<b-navbar toggleable="lg" type="dark" variant="transparent" class="w-100">
						<b-navbar-brand href="#" class="d-flex align-items-center mr-5" @click="$router.push('home')">
							<img src="/favicon.ico" alt="" width="20px">
							<div class="ml-2">
								<em style="font-size: 30px" class="font-weight-bold text-white">
									AVIA AIRWAYS
								</em>
							</div>
						</b-navbar-brand>

						<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

						<b-collapse id="nav-collapse" is-nav class="pl-5">
							<b-navbar-nav>
								<b-nav-item>
									<router-link class="text-light" to="/">Home</router-link>
								</b-nav-item>
								<b-nav-item>
									<router-link class="text-light px-3" to="/">About Us</router-link>
								</b-nav-item>
								<b-nav-item>
									<router-link class="text-light" to="/">Contact Us</router-link>
								</b-nav-item>
							</b-navbar-nav>
							<!-- Right aligned nav items -->
							<b-navbar-nav class="ml-auto">
								<b-nav-item>
									<div class="d-flex justify-content-end">
										<div v-if="!isLogged">
											<router-link to="login" class="text-white">
												<small>Login</small>
											</router-link>
											<small class="mx-2">|</small>
											<router-link to="register" class="text-white">
												<small>
													Register
												</small>
											</router-link>
										</div>
										<div v-else>
											<small><em class="text-white" @click="editDetail()">Hello, {{ userInfo.first_name + ' ' + userInfo.last_name }}</em></small>
											<small class="mx-2">|</small>
											<a class="text-white pointer" @click="logout">
												<small>
													Logout
												</small>
											</a>
										</div>
									</div>
								</b-nav-item>
							</b-navbar-nav>
						</b-collapse>
					</b-navbar>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	data() {
		return {
			isScrolled: false
		}
	},
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo',
			isLogged: 'auth/isLogged'
		}),
		isNotHome() {
			return !this.$route.path.includes('home')
		}
	},
	methods: {
		...mapActions({
			logout: 'auth/logout'
		}),
		editDetail(){
			this.$router.push('profile')
		}
	},
	mounted() {
		window.onscroll = () => {
			if (window.pageYOffset >= 100) {
				this.isScrolled = true
			} else this.isScrolled = false
		}
	}
}
</script>

<style lang="scss" scoped>
.top-nav {
	width: 100%;
	background: transparent;
	position: fixed;
	top: 0;
	z-index: 9999;
	color: white;
	border-bottom: 1px solid #4d668f;
	.navbar-collapse {
		font-size: 1.1rem;
	}
}
</style>
