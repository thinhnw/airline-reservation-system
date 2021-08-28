<template>
	<div>
		<div v-for="reservation, index in reservations" :key="index" class="d-flex justify-content-between align-items-center mb-3 border-bottom py-2">
			<div>
				{{ index }}
			</div>
			<div class="ml-3">
				<b-button variant="primary" @click="download(index)">E-Ticket</b-button>
			</div>
			<div class="ml-3">
				{{ new Date(reservation.updated_at) }}
			</div>
		</div>
	</div>
</template>

<script>
import axios from '@/axios'
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			reservations: []
		}
	},
	methods: {
		async fetchReservations() {
			try {
				let res = await axios.get('/api/reservations/get_by_user_id?user_id=' + this.userInfo.id)
				this.reservations = res.data.reservations.sort((a, b) => (a.updated_at < b.updated_at) - (a.updated_at > b.updated_at))
			} catch (error) {
				console.error(error)	
			}
		},
		download(index) {
			let output = this.reservations[index].e_ticket
			let filename = "e-ticket.png"
			let element = document.createElement("a")
			console.log(output)
			element.setAttribute("href", output)
			element.setAttribute("download", filename)

			element.style.display = "none"
			document.body.appendChild(element)

			element.click()

			document.body.removeChild(element)
		}
	},
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo'
		})
	},
	mounted() {
		this.fetchReservations()
	}
}
</script>

<style>

</style>