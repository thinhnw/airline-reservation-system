<template>
	<b-form class="p-3 px-5" @submit.prevent="submit">
		<label>
			Check in for your flight at your convenience 
		</label>
		<b-input-group>
			<b-form-input v-model="ticketNumber" placeholder="Ticket number" class="py-4"></b-form-input>
			<b-form-input v-model="lastName" placeholder="Last Name" class="py-4"></b-form-input>
			<template #append>
				<b-button type="submit" variant="primary" :disabled="isFetching">
					Check-in
					<b-spinner small variant="light" v-if="isFetching"></b-spinner>
				</b-button>
			</template>
		</b-input-group>
	</b-form>
</template>

<script>
import axios from '@/axios'
export default {
	data() {
		return {
			ticketNumber: '',
			lastName: '',
			isFetching: false
		}
	},
	methods: {
		async submit() {
			try {
				this.isFetching = true
				let res = await axios.post(`/api/tickets/checkin`, {
					ticketNumber: this.ticketNumber,
					lastName: this.lastName
				});
				this.$bvToast.toast('Please check your email for the boarding passes!', {
					title: 'Check-in Succeed',
					autoHideDelay: 3500,
					appendToast: false,
					solid: true,
					toaster: 'b-toaster-top-right',
					variant: 'success'
				})
			} catch (error) {
				console.error(error)	
				this.$bvToast.toast(error.message, {
					title: 'Check-in Failed',
					autoHideDelay: 3500,
					appendToast: false,
					solid: true,
					toaster: 'b-toaster-top-right',
					variant: 'danger'
				})
			} finally {
				this.isFetching = false
			}
		}
	}
}
</script>

<style>

</style>