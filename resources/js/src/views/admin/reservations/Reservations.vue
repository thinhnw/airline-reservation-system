<template>
	<div class="h-100">
		<div class="d-flex justify-content-between mb-3">
			<h2>RESERVATIONS</h2>
		</div>
		<div>
			<b-table
				:fields="reservationFields"
				:items="items"
				bordered
				hover
			>
				<template #cell(actions)="row"> 
					<div class="text-center w-100">
						<i class="fas fa-caret-down btn-icon" @click="row.toggleDetails"></i>
					</div>
				</template>
				<template #row-details="row">
					<section class="passengers">
						<h5>Passenger Details</h5>
						<b-table :fields="passengerFields" :items="JSON.parse(row.item.passengers)">
						</b-table>
					</section>
					<section class="payment mt-5" v-if="row.item.payment">
						<h5>Payment {{ JSON.parse(row.item.payment).charges.data[0].id }}</h5>
						<div class="mt-3">
							<p>Card: 
								<span>{{  JSON.parse(row.item.payment).charges.data[0].payment_method_details.card.brand }}</span>
								<span>xxxxxxxxxxxx{{  JSON.parse(row.item.payment).charges.data[0].payment_method_details.card.last4 }}</span>
							</p>	
						</div>
					</section>
				</template>
			</b-table>
		</div>
	
	</div>	
</template>

<script>
import reservationFields from './reservationFields'
import passengerFields from './passengerFields'
import axios from '@/axios'
import { formatMoney } from '@/helper'

export default {
	data() {
		return {
			reservationFields,
			passengerFields,
			reservations: [],
			fetchingState: 'FETCHING',
			showSidebar: false,
			method: 'Add', // EDIT
		}
	},
	computed: {
		items() {
			return this.reservations.map(reservation => {
				return {
					...reservation,
					user: reservation.user_email,
					price: formatMoney(reservation.price, 0) + ' VND'
				}
			})
		},
	},
	methods: {
		async fetchReservations() {
			try {
				let res = await axios.get('/api/reservations')
				this.reservations = res.data.reservations
			} catch (error) {
				console.error(error)	
			}
		},
	},
	async mounted() {
		try {
			this.fetchingState = 'FETCHING'
			await Promise.all([
				this.fetchReservations(),
			])
			this.fetchingState = 'FETCHED'
		} catch (error) {
			console.error(error)	
			this.fetchingState = 'FAILED'
		}
	}
}
</script>

<style>

</style>