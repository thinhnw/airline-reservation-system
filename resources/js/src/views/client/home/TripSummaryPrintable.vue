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
									{{ details.class }} / 35kg
								</div>
							</b-td>
							<b-td>
								<small>
									Earn
									{{ 2732 }} Skymiles
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
									{{ details.class }} / 35kg
								</div>
							</b-td>
							<b-td>
								<small>
									Earn
									{{ 2732 }} Skymiles
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
							<b-td>Passenger name</b-td>
							<b-td>Passport</b-td>
							<b-td>Date of birth</b-td>
							<b-td>Frequent flyer number</b-td>
						</b-tr>
						<b-tr v-for="passenger in details.passengers" :key="passenger.name">
							<b-td>
								{{ passenger.title }} {{ passenger.firstName }} {{ passenger.lastName }}
							</b-td>
							<b-td>
								{{ passenger.passportNumber }}
							</b-td>
							<b-td>
								{{ moment(passenger.dateOfBirth).format('DD MMM YYYY') }}
							</b-td>
							<b-td>-</b-td>
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
							<b-td>Passenger name</b-td>
							<b-td>Email</b-td>
						</b-tr>
						<b-tr>
							<b-td>
								{{ details.passengers[0].title }} {{ details.passengers[0].firstName }} {{ details.passengers[0].lastName }}
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
						<b-td>Total Price per passenger</b-td>
						<b-td class="text-right">500.00 USD</b-td>
					</b-tr>
					<b-tr>
						<b-td>Number of passengers</b-td>
						<b-td class="text-right">{{ details.passengers.length }}</b-td>
					</b-tr>
					<b-tr>
						<b-td class="font-size-larger">
							Grand Total
						</b-td>
						<b-td class="text-right font-size-larger">
							1000.00 USD
						</b-td>
					</b-tr>
				</b-table-simple>
				
			</section>
		</div>
</template>

<script>
import moment from 'moment'
// import details from './tripSummaryDetails'
import { getDisplayedDuration } from '@/helper'

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
	},
	computed: {
		flightDeparture() {
			return this.details.selectedFlightDeparture
		},
		flightReturn() {
			return this.details.selectedFlightReturn
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