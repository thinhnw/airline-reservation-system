<template>
		<div>
			<section class="flight-details mb-5">
				<div class="d-flex align-items-center">
					<div class="icon-wrapper">
						<i class="font-size-small fas fa-plane text-white"></i>
					</div>
					<small class="text-secondary ml-2">
						Outbound flight
					</small>
				</div>
				<div class="mb-3">
					<span class="font-size-2rem text-primary">
						{{ flightDeparture.origin.cityname }}
					</span>
					>
					<span class="font-size-2rem text-primary">
						{{ flightDeparture.destination.cityname }} 
					</span>
					<span>
						{{  moment.utc(flightDeparture.arrival_time).utcOffset(flightDeparture.destination.timezone).format('ddd, DD MMM YYYY') }}
					</span>
				</div>
				<b-table-simple>
					<b-tbody>
						<b-tr>
							<b-td>
								Departure
							</b-td>
							<b-td></b-td>
							<b-td>
								Arrival
							</b-td>
							<b-td>
								Class / Check baggage allowance:
							</b-td>
							<b-td>
								Earn Skymiles
							</b-td>
						</b-tr>
						<b-tr>
							<b-td>
								<div>
									<span class="font-size-larger font-weight-bold">
										{{ moment.utc(flightDeparture.departure_time).utcOffset(flightDeparture.origin.timezone).format('HH:mm') }}
									</span>
									<span class="font-size-larger text-secondary">
										{{ flightDeparture.origin.code.toUpperCase() }}
									</span>
								</div>
								<div>
									<small>{{ flightDeparture.origin.cityname }}, {{ flightDeparture.origin.name }}</small>
								</div>
								<div>
									<small>{{ flightDeparture.origin.countryname }}</small>
								</div>
							</b-td>
							<b-td class="text-center px-5">
								<div>
									<i class="fal fa-clock"></i>
								</div>
								<div>
									{{ getDisplayedDuration(flightDeparture.departure_time, flightDeparture.arrival_time) }}
								</div>
							</b-td>
							<b-td>
								<div>
									<span class="font-size-larger font-weight-bold">
										{{ moment.utc(flightDeparture.arrival_time).utcOffset(flightDeparture.destination.timezone).format('HH:mm') }}
									</span>
									<span class="font-size-larger text-secondary">
										{{ flightDeparture.destination.code.toUpperCase() }}
									</span>
								</div>
								<div>
									<small>{{ flightDeparture.destination.cityname }}, {{ flightDeparture.destination.name }}</small>
								</div>
								<div>
									<small>{{ flightDeparture.destination.countryname }}</small>
								</div>
							</b-td>
							<b-td>
								<div>
									{{ details.class }} / 40kg
								</div>
							</b-td>
							<b-td>
								<small>
									Earn
									{{ skymiles }} Skymiles
								</small>
							</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</section>
			<section class="flight-details mb-5" v-if="flightReturn">
				<div class="d-flex align-items-center">
					<div class="icon-wrapper">
						<i class="font-size-small fas fa-plane text-white" style="transform: translate(-50%, -50%) rotate(180deg)"></i>
					</div>
					<small class="text-secondary ml-2">
						Inbound flight
					</small>
				</div>
				<div class="mb-3">
					<span class="font-size-2rem text-primary">
						{{ flightReturn.origin.cityname }}
					</span>
					>
					<span class="font-size-2rem text-primary">
						{{ flightReturn.destination.cityname }} 
					</span>
					<span>
						{{  moment.utc(flightReturn.arrival_time).utcOffset(flightReturn.destination.timezone).format('ddd, DD MMM YYYY') }}
					</span>
				</div>
				<b-table-simple>
					<b-tbody>
						<b-tr>
							<b-td>
								Departure
							</b-td>
							<b-td></b-td>
							<b-td>
								Arrival
							</b-td>
							<b-td>
								Class / Check baggage allowance:
							</b-td>
							<b-td>
								Earn Skymiles
							</b-td>
						</b-tr>
						<b-tr>
							<b-td>
								<div>
									<span class="font-size-larger font-weight-bold">
										{{ moment.utc(flightReturn.departure_time).utcOffset(flightReturn.origin.timezone).format('HH:mm') }}
									</span>
									<span class="font-size-larger text-secondary">
										{{ flightReturn.origin.code.toUpperCase() }}
									</span>
								</div>
								<div>
									<small>{{ flightReturn.origin.cityname }}, {{ flightReturn.origin.name }}</small>
								</div>
								<div>
									<small>{{ flightReturn.origin.countryname }}</small>
								</div>
							</b-td>
							<b-td class="text-center px-5">
								<div>
									<i class="fal fa-clock"></i>
								</div>
								<div>
									{{ getDisplayedDuration(flightReturn.departure_time, flightReturn.arrival_time) }}
								</div>
							</b-td>
							<b-td>
								<div>
									<span class="font-size-larger font-weight-bold">
										{{ moment.utc(flightReturn.arrival_time).utcOffset(flightReturn.destination.timezone).format('HH:mm') }}
									</span>
									<span class="font-size-larger text-secondary">
										{{ flightReturn.destination.code.toUpperCase() }}
									</span>
								</div>
								<div>
									<small>{{ flightReturn.destination.cityname }}, {{ flightReturn.destination.name }}</small>
								</div>
								<div>
									<small>{{ flightReturn.destination.countryname }}</small>
								</div>
							</b-td>
							<b-td>
								<div>
									{{ details.class }} / 40kg
								</div>
							</b-td>
							<b-td>
								<small>
									Earn
									{{ skymiles }} Skymiles
								</small>
							</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</section>
			<section class="passenger-details">
				<div class="mb-3">
					<span class="font-size-2rem text-primary">Passenger details</span>
				</div>
				<b-table-simple>
					<b-tbody>
						<b-tr>
							<b-td class="font-weight-bold" >Passenger name</b-td>
							<b-td class="font-weight-bold" >Passport</b-td>
							<b-td class="font-weight-bold" >Date of birth</b-td>
							<b-td class="font-weight-bold" >Inbound flight seat</b-td>
							<b-td  class="font-weight-bold" v-if="flightReturn">Outbound flight seat</b-td>
						</b-tr>
						<b-tr v-for="passenger in details.passengerDetails" :key="passenger.name">
							<b-td>
								{{ passenger.title }} {{ passenger.firstName }} {{ passenger.lastName }}
							</b-td>
							<b-td>
								{{ passenger.passportNumber }}
							</b-td>
							<b-td>
								{{ moment(passenger.dateOfBirth).format('DD MMM YYYY') }}
							</b-td>
							<b-td>
								{{ passenger.seatDeparture || '-' }}
							</b-td>
							<b-td v-if="flightReturn">
								{{ passenger.seatReturn || '-' }}
							</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</section>	
			<section class="contact-details">
				<div class="mb-3 font-size-2rem text-primary">
					Contact details
				</div>
				<b-table-simple>
					<b-tbody>
						<b-tr>
							<b-td class="font-weight-bold">Contact name</b-td>
							<b-td class="font-weight-bold">Email</b-td>
						</b-tr>
						<b-tr>
							<b-td>
								{{ details.contact.name }}
							</b-td>
							<b-td>
								{{ details.contact.email }}
							</b-td>
						</b-tr>
					</b-tbody>
				</b-table-simple>
			</section>
			<section class="total-price py-5">
				<div class="mb-3 text-primary font-size-2rem">
					Total price
				</div>
				<b-table-simple>
					<b-tr>
						<b-td>Fare price per adult</b-td>
						<b-td class="text-right">
							{{ formatMoney(pricePerAdult, 0) }} VND
							x {{ details.passengers.adults }}
						</b-td>
					</b-tr>
					<b-tr v-if="details.passengers.children > 0">
						<b-td>Fare price per chilren (2-12 years old)</b-td>
						<b-td class="text-right">
							{{ formatMoney(pricePerChild, 0) }} VND
							x {{ details.passengers.children }}
						</b-td>
					</b-tr>
					<b-tr>
						<b-td>Seat Selection for inbound flight</b-td>
						<b-td class="text-right">
							{{ formatMoney(priceForSeats, 0) }} VND
						</b-td>
					</b-tr>
					<b-tr>
						<b-td>Seat Selection for outbound flight</b-td>
						<b-td class="text-right">
							{{ formatMoney(priceForSeats, 0) }} VND
						</b-td>
					</b-tr>
					<b-tr>
						<b-td class="font-size-larger">
							Grand Total
						</b-td>
						<b-td class="text-right font-size-larger">
							{{ formatMoney(grandTotal, 0) }} VND
						</b-td>
					</b-tr>
				</b-table-simple>
				
			</section>
		</div>
</template>

<script>
import moment from 'moment'
import details from './tripSummaryDetails'
import { getDisplayedDuration, formatMoney } from '@/helper'
import { mapGetters } from 'vuex'

export default {
	props: {
		details: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			moment,
			// details,
		}
	},
	methods: {
		getDisplayedDuration,
		formatMoney
	},
	computed: {
		...mapGetters({
			isLogged: 'auth/isLogged'
		}),
		flightDeparture() {
			return this.details.selectedFlightDeparture
		},
		flightReturn() {
			return this.details.selectedFlightReturn
		},

		skymiles() {
			return this.flightDeparture.skymiles * (parseInt(this.details.passengers.adults) + parseInt(this.details.passengers.children))
		},
		
		pricePerAdult() {
			console.log('details', this.details)
			return Math.ceil(this.details.class === 'Business' ? 
				(this.flightDeparture.fare_business + (this.flightReturn?.fare_business ?? 0)) : (this.flightDeparture.fare_economy + (this.flightReturn?.fare_economy ?? 0)))
		},
		priceForChild() {
			return Math.ceil(this.pricePerAdult * 2 / 3)
		},
		priceForSeats() {
			let passengerCount = parseInt(this.details.passengers.adults) + parseInt(this.details.passengers.children)
			return passengerCount * 150000
		},
		grandTotal() {
			return this.pricePerAdult * this.details.passengers.adults + Math.ceil(this.pricePerAdult * this.details.passengers.children * 2 / 3) + this.priceForSeats + (this.flightReturn ? this.priceForSeats : 0)
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