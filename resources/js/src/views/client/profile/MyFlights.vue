<template>
	<div class="p-4">
		<b-table-simple borderless hover>
			<b-thead>
				<b-tr>
					<b-th>Reference</b-th>
					<b-th>Status</b-th>
					<b-th>Price</b-th>
					<b-th>Updated</b-th>
					<b-th class="text-center">Summary</b-th>
					<b-th></b-th>
				</b-tr>
			</b-thead>
			<b-tbody>
				<b-tr v-for="(reservation, index) in reservations" :key="index" @click="goToPayment(reservation)">
					<b-td>{{ reservation.pnr }}</b-td>
					<b-td :class="{ 'text-warning': reservation.status === 'PENDING', 'text-success': reservation.status === 'CONFIRMED', 'text-danger': reservation.status === 'CANCELED'}">{{ reservation.status }}</b-td>
					<b-td>{{ formatMoney(reservation.price, 0) }} VND</b-td>
					<b-td>{{ new Date(reservation.updated_at).toLocaleDateString() }}</b-td>
					<b-td class="text-center">
						<i class="fas fa-arrow-to-bottom btn-icon font-size-large text-primary" @click="download(index)"></i>		
					</b-td>
					<b-td>
						<b-button variant="outline-danger" size="sm" @click="cancelStepOne(reservation)">Cancel</b-button>
					</b-td>
				</b-tr>
			</b-tbody>
		</b-table-simple>
		<b-modal id="cancel" title="Reservation Cancellation" ok-only ok-title="Confirm" @ok="cancelConfirm">
			The cancellation cannot be undone. Do you want to proceed?
		</b-modal>
	</div>
</template>

<script>
import axios from '@/axios'
import { mapGetters } from 'vuex'
import { formatMoney } from '@/helper'
export default {
	data() {
		return {
			reservations: [],
			toBeCancelledReservation: null,
		}
	},
	methods: {
		formatMoney,
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
		},
		goToPayment(reservation) {
			if (reservation.status === 'PENDING')
				this.$router.push(`/checkout?reservation_id=${reservation.id}`)
		},
		cancelStepOne(reservation) {
			this.toBeCancelledReservation = reservation
			this.$bvModal.show('cancel')
		},
		async cancelConfirm() {
			try {
				let res = await axios.post('/api/reservations/cancel', {
					id: this.toBeCancelledReservation.id
				})
				this.toBeCancelledReservation.status = 'CANCELED'
				this.$bvModal.hide("cancel")
				this.$bvToast.toast('You have cancelled reservation ' + this.toBeCancelledReservation.pnr, {
					title: 'Cancellation succeeed',
					autoHideDelay: 1000,
					appendToast: false,
					solid: true,
					toaster: 'b-toaster-top-right',
					variant: 'success'
				})
			} catch (error) {
				this.$bvToast.toast(error.message, {
					title: 'Cancellation failed',
					autoHideDelay: 1000,
					appendToast: false,
					solid: true,
					toaster: 'b-toaster-top-right',
					variant: 'danger'
				})
			}
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