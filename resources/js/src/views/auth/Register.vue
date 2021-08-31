<template>
	<b-container fluid class="auth-background h-100 text-light">
		<b-row align-h="center" class="h-100">
			<b-col cols="8" lg="4" class="h-100 text-center d-flex align-items-center">
				<div class="form-wrapper">
					<h1 class="text-warning pointer" @click="$router.push({ name: 'home'})">
						Welcome to Avia Airways!
					</h1>
					<p >Please register to your account.</p>
					<b-form class="mt-5" @submit.prevent="register">
						<b-form-row>
							<b-col>
								<b-form-group class="text-left">
									<label>First Name</label>
									<b-form-input 
										v-model="firstName" 
										type="text" 
										placeholder="Enter your first name" 
										required 
									/>
								</b-form-group>
							</b-col>
							<b-col>
								<b-form-group class="text-left">
									<label>Last Name</label>
									<b-form-input 
										v-model="lastName" 
										type="text" 
										placeholder="Enter your last name" 
										required 
									/>
								</b-form-group>
							</b-col>
						</b-form-row>
						<b-form-group label="Gender" v-slot="{ ariaDescribedby }" class="text-left">
							<b-form-radio-group
								v-model="gender"
								:aria-describedby="ariaDescribedby"
								name="radio-sub-component"
							>
								<b-form-radio value="male">Male</b-form-radio>
								<b-form-radio value="female">Female</b-form-radio>
							</b-form-radio-group>
						</b-form-group>
						<b-form-group class="text-left">
							<label>Email</label>
							<b-form-input 
								v-model="email" 
								type="email" 
								placeholder="Enter your email" 
								required 
								:state="state.email" 
								@change="handleEmailChange" 
							/>
							<b-form-invalid-feedback class="text-center">
								Invalid email format
							</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group class="text-left">
							<label>Password</label>
							<b-form-input 
								v-model="password" 
								type="password" 
								placeholder="Enter your password" 
								:state="state.password" 
								required
								@change="handlePasswordChange"
							/>
							<b-form-invalid-feedback class="text-center">
								Password must have more than 6 characters
							</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group class="text-left">
							<label>Confirm Password</label>
							<b-form-input 
								v-model="confirmPassword" 
								type="password" 
								placeholder="Enter your password" 
								:state="state.confirmPassword" 
								required
								@change="handleConfirmPasswordChange"
							/>
							<b-form-invalid-feedback class="text-center">
								Confirm password and password do not match
							</b-form-invalid-feedback>
						</b-form-group>
						<b-form-group class="mt-5">
							<b-button variant="primary" class="w-100" type="submit">Register</b-button>
						</b-form-group>
					</b-form>
					<div class="text-white">
						<small>Already have an account?
							<router-link to="login">Sign In</router-link>
						</small>
					</div>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import store from '@/store'
export default {
	data() {
		return {
			firstName: '',
			lastName: '',
			gender: 'male',
			email: '',
			password: '',
			confirmPassword: '',
			state: {
				email: null,
				password: null,
				confirmPassword: null
			}
		}
	},
	methods: {
		handleEmailChange(value) {
	 		this.state.email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
		},
		handlePasswordChange(value) {
			this.state.password = value.length >= 6
			this.state.confirmPassword = (this.confirmPassword === this.password)
		},
		handleConfirmPasswordChange(value) {
			this.state.confirmPassword = (value === this.password)
		},
		validateForm() {
			if (this.confirmPassword != this.password) this.state.confirmPassword = false
			return this.state.email && this.state.password && this.state.confirmPassword
		},
		async register() {
      // If form is not validated or user is already login return
      if (!this.validateForm()) return

			try {
				const payload = {
					userDetails: {
						firstName: this.firstName,
						lastName: this.lastName,
						gender: this.gender,
						email: this.email,
						password: this.password,
					},
				}
				await store.dispatch('auth/registerUserJWT', payload)
			} catch (error) {
				console.error(error)	
				this.$bvToast.toast(error.message, {
					title: 'Register failed',
					autoHideDelay: 1000,
					appendToast: false,
					solid: true,
					toaster: 'b-toaster-top-right',
					variant: 'danger'
				})
			}
    }
	},
}
</script>

<style scoped>
.form-wrapper {
	transform: translateY(-60px);
	width: 100%;
	padding: 0 30px;
}
</style>