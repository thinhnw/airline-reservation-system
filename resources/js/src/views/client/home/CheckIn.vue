<template>
	<b-form class="p-3 px-5" @submit.prevent="submit">
		<label>
			Check in for your flight at your convenience 
		</label>
		<b-input-group>
			<b-form-input v-model="ticketNumber" placeholder="Ticket number" class="py-4"></b-form-input>
			<b-form-input v-mode="lastName" placeholder="Last Name" class="py-4"></b-form-input>

			<template #append>
				<b-button variant="primary">Check-in</b-button>
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
			lastName: ''
		}
	},
	methods: {
		async submit() {
			try {
				let res = await axios.post(`/api/tickets/${this.ticketNumber}/checkin`);
			} catch (error) {
				console.error(error)	
			}
		}
	}
}
</script>

<style>

</style>