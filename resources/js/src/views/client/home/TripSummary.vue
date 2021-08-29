<template>
	<div id="trip-summary" class="py-5">
		<b-container class="px-0">
			<b-row>
				<b-col class="px-0">
					<b-card no-body>
						<b-card-header>
							Trip Summary
						</b-card-header>
						<b-card-body ref="summary">
							<TripSummaryPrintable :details="details" />
						</b-card-body>
						<div class="w-100 text-center">
							<div>
								<b-button class="py-2 px-5 font-size-large" variant="warning" @click="makeReservation" :disabled="isMakingReservation">
									<span v-if="!isMakingReservation">Purchase</span>
									<span v-else>
										<b-spinner small variant="light" class="mr-2"></b-spinner>
										<span class="text-light">
											Making your reservation
										</span>
									</span>
								</b-button>
							</div>
							<div class="py-3 pointer" @click="$emit('back')">&lt;Back</div>
						</div>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
		<b-modal
			title="Authentication required"	
			@ok="$router.push('login')"
			centered
			id="register-modal"
		>
			Your session has expired
		</b-modal>
	</div>
</template>

<script>
import moment from 'moment'
// import details from './tripSummaryDetails'
import { getDisplayedDuration } from '@/helper'
import html2canvas from 'html2canvas'
import TripSummaryPrintable from './TripSummaryPrintable.vue'
import axios from '@/axios'
import { mapGetters } from 'vuex'
export default {
	components: {
		TripSummaryPrintable
	},
	props: {
		details: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			moment,
			// details
			isMakingReservation: false
		}
	},
	methods: {
		getDisplayedDuration,
		async makeReservation() {
			if (!this.isLogged) {
				this.$bvModal.show('register-modal')
				return
			}
			try {
        const el = this.$refs.summary
        let res = await html2canvas(el)
        let output = res.toDataURL()
        let filename = "e-ticket.png"
				let postData = {
					e_ticket: output,
					price: this.grandTotal,
					seat_class: this.details.class,
					passenger_details: this.details.passengerDetails,
					contact_details: this.details.contact,
					skymiles: this.skymiles
				}
				postData.flight_departure_id = this.details.selectedFlightDeparture.id
				if (this.details.selectedFlightReturn) postData.flight_return_id = this.details.selectedFlightReturn.id

				this.isMakingReservation = true
				res = await axios.post('/api/reservations', postData)
				console.log(res.data)
				this.$router.push(`/checkout?reservation_id=${res.data.reservation.id}`)
      } catch (err) {
        console.error(err)
				this.$bvToast.toast(err.message, {
					title: '',
					autoHideDelay: 1000,
					appendToast: false,
					solid: true,
					toaster: 'b-toaster-top-right',
					variant: 'danger'
				})
      } finally {
				this.isMakingReservation = false
			}
    },
	},
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo',
			isLogged: 'auth/isLogged'
		}),
		flightDeparture() {
			return this.details.selectedFlightDeparture
		},
		flightReturn() {
			return this.details.selectedFlightReturn
		},
		skymiles() {
			return this.flightDeparture.skymiles * (parseInt(this.details.passengers.adults) + parseInt(this.details.passengers.children)) * (this.flightReturn ? 2 : 1)
		},
		pricePerAdult() {
			return this.details.class === 'Business' ? 
				(this.flightDeparture.fare_business + (this.flightReturn?.fare_business ?? 0)) : (this.flightDeparture.fare_economy + (this.flightReturn?.fare_economy ?? 0))
		},
		priceForSeats() {
			let passengerCount = parseInt(this.details.passengers.adults) + parseInt(this.details.passengers.children)
			return passengerCount * 150000
		},
		grandTotal() {
			return Math.ceil(this.pricePerAdult * this.details.passengers.adults + Math.ceil(this.pricePerAdult * this.details.passengers.children * 2 / 3) + this.priceForSeats + (this.flightReturn ? this.priceForSeats : 0))
		}
	}
}
</script>

<style scoped lang="scss">
.icon-wrapper {
	position: relative;
	width: 22px;
	height: 22px;
	background: var(--secondary);
	border-radius: 50%;
	.fa-plane {
		position: absolute;
		z-index: 5;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>