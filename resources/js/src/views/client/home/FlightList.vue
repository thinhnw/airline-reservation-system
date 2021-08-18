<template>
	<div class="flight-list py-5">
		<b-container class="px-0">
			<b-row>
				<b-col cols="12" class="px-0">
					<div class="w-100 text-center">
						<h3>Select your departure flight from</h3>
						<h3>
							{{ airportFrom.cityname }} to {{ airportTo.cityname }}
						</h3>
					</div>
					<div class="w-100 text-left">
						<div v-if="details.flightsDeparture.length > 0"> 
							<p>Number of Flights: {{ details.flightsDeparture.length }}</p>
						</div>
						<div v-else class="text-center">
							<em>There aren't any flights from
								{{ airportFrom.cityname }} to {{ airportTo.cityname }}
								on your selected date</em>
						</div>
					</div>
					<div class="w-100">
						<b-form-group class="w-100">
							<b-card 
								v-for="flight, index in computedFlightsDeparture"
								:key="index"
								class="flight-item" 
							>
								<b-row class="w-100 mx-0 text-left">
									<b-col cols="3">
										<b-form-radio
											v-model="selectedFlightDeparture"
											:value="flight.id"
											button
											button-variant="outline-primary"
											class="flight-radio-button"
										>
											<div class="text-center">
												<div class="font-size-large mb-3">
													Business
												</div>
												<div class="mb-3">
													1000
													<span class="font-size-larger">USD</span>
												</div>
												<div>
													<small>
														Total price for all passengers
													</small>
												</div>
											</div>
										</b-form-radio>
									</b-col>
									<b-col cols="6">
										<b-row>
											<b-col cols="5">
												<div class="flight-time-text">
													{{ flight.departure_time.split(' ')[1] }} {{ flight.origin.code }}
												</div>
												<div>
													{{ flight.origin.cityname }}
												</div>
												<div class="font-size-small">
													{{ flight.flight_number }} Airbus A350-900
												</div>
											</b-col>
											<b-col cols="2" class="text-center">
												<div>
													<i class="fal fa-clock"></i>
												</div>
												<div>
													{{ getDisplayedDuration(flight.departure_time, flight.arrival_time) }}
												</div>
											</b-col>
											<b-col cols="5" class="text-right">
												<div class="flight-time-text">
													{{ flight.arrival_time.split(' ')[1] }} {{ flight.destination.code }}
												</div>
												<div>
													{{ flight.destination.cityname }}
												</div>
												<div class="font-size-small">
													Operated by: Avia Airways
												</div>
											</b-col>
										</b-row>
									</b-col>
									<b-col cols="3">
										<div class="font-size-small mb-2">
											<i class="fal fa-suitcase-rolling"></i>
											40kg checked baggage 
										</div>
										<div class="font-size-small mb-2">
											<i class="fal fa-briefcase"></i>
											Pieces 2, Total weight 15kg hand baggage
										</div>
										<div class="font-size-small mb-2">
											<i class="fal fa-chair-office"></i>
											Complimentary seat selection
										</div>
										<div class="font-size-small">
											<i class="fal fa-key"></i>
											Lounge access included
										</div>
									</b-col>
								</b-row>
							</b-card>
						</b-form-group>
					</div>
				</b-col>
				<b-col cols="12" class="text-center" v-if="selectedFlightDeparture > -1 && details.flightsDeparture.length > 1">
					<b-button variant="outline-warning" type="button" @click="selectedFlightDeparture = -1">
						View other flights
					</b-button>
				</b-col>
			</b-row>
			<b-row v-if="details.trip_type == 'Return'">
				<b-col cols="12" class="pt-5">
					<div class="w-100 text-center">
						<h3>Select your return flight from</h3>
						<h3>
							{{ airportTo.cityname }} to {{ airportFrom.cityname }}
						</h3>
					</div>
					<div class="w-100 text-left">
						<div v-if="details.flightsReturn.length > 0"> 
							<p>Number of Flights: {{ details.flightsReturn.length }}</p>
						</div>
						<div v-else class="text-center">
							<em>There aren't any flights from
								{{ airportTo.cityname }} to {{ airportFrom.cityname }}
								on your selected date</em>
						</div>
					</div>
					<div class="w-100">
						<b-form-group class="w-100">
							<b-card 
								v-for="flight, index in computedFlightsReturn"
								:key="index"
								class="flight-item" 
							>
								<b-row class="w-100 mx-0 text-left">
									<b-col cols="3">
										<b-form-radio
											v-model="selectedFlightReturn"
											:value="flight.id"
											button
											button-variant="outline-primary"
											class="flight-radio-button"
										>
											<div class="text-center">
												<div class="font-size-large mb-3">
													Business
												</div>
												<div class="mb-3">
													1000
													<span class="font-size-larger">USD</span>
												</div>
												<div>
													<small>
														Total price for all passengers
													</small>
												</div>
											</div>
										</b-form-radio>
									</b-col>
									<b-col cols="6">
										<b-row>
											<b-col cols="5">
												<div class="flight-time-text">
													{{ flight.departure_time.split(' ')[1] }} {{ flight.origin.code }}
												</div>
												<div>
													{{ flight.origin.cityname }}
												</div>
												<div class="font-size-small">
													{{ flight.flight_number }} Airbus A350-900
												</div>
											</b-col>
											<b-col cols="2" class="text-center">
												<div>
													<i class="fal fa-clock"></i>
												</div>
												<div>
													{{ getDisplayedDuration(flight.departure_time, flight.arrival_time) }}
												</div>
											</b-col>
											<b-col cols="5" class="text-right">
												<div class="flight-time-text">
													{{ flight.arrival_time.split(' ')[1] }} {{ flight.destination.code }}
												</div>
												<div>
													{{ flight.destination.cityname }}
												</div>
												<div class="font-size-small">
													Operated by: Avia Airways
												</div>
											</b-col>
										</b-row>
									</b-col>
									<b-col cols="3">
										<div class="font-size-small mb-2">
											<i class="fal fa-suitcase-rolling"></i>
											40kg checked baggage 
										</div>
										<div class="font-size-small mb-2">
											<i class="fal fa-briefcase"></i>
											Pieces 2, Total weight 15kg hand baggage
										</div>
										<div class="font-size-small mb-2">
											<i class="fal fa-chair-office"></i>
											Complimentary seat selection
										</div>
										<div class="font-size-small">
											<i class="fal fa-key"></i>
											Lounge access included
										</div>
									</b-col>
								</b-row>
							</b-card>
						</b-form-group>
					</div>
				</b-col>
				<b-col cols="12" class="text-center" v-if="selectedFlightReturn > -1 && details.flightsReturn.length > 1">
					<b-button variant="outline-warning" type="button" @click="selectedFlightReturn = -1">
						View other flights
					</b-button>
				</b-col>
			</b-row>
			<b-row v-if="isSelected">
				<b-col cols="12">
					<b-button class="w-100 mx-0" variant="primary" @click="handleStepDone">
						CONTINUE
					</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { getDisplayedDuration } from '@/helper'
export default {
	props: {
		details: {
			type: Object,
			default: () => {}
		},
		airports: Array
	},
	data() {
		return {
			selectedFlightDeparture: -1,
			selectedFlightReturn: -1,
			bookingStep: 0, // -1: Not yet, 0. Searched, 1. Selected Flights and clicked continue, 2. Require passengers info
		}
	},
	methods: {
		getDisplayedDuration,
		handleStepDone() {
			let data = JSON.parse(JSON.stringify(this.details))
			if (this.details.trip_type === 'One-way') {
				this.$emit('done', {
					selectedFlightDeparture: data.flightsDeparture.find(flight => flight.id === this.selectedFlightDeparture),
				})
				return
			}
			this.$emit('done', {
				selectedFlightDeparture: data.flightsDeparture.find(flight => flight.id === this.selectedFlightDeparture),
				selectedFlightReturn: data.flightsReturn.find(flight => flight.id === this.selectedFlightReturn)
			})
		}
	},
	computed: {
		airportFrom() {
			return this.airports.find(airport => airport.id == this.details.from_airport_id) || {}
		},
		airportTo() {
			return this.airports.find(airport => airport.id == this.details.to_airport_id) || {}
		},
		computedFlightsDeparture() {
			if (this.selectedFlightDeparture > -1) 
				return this.details.flightsDeparture.filter(flight => flight.id == this.selectedFlightDeparture)
			return this.details.flightsDeparture
		},
		computedFlightsReturn() {
			if (this.selectedFlightReturn > -1) 
				return this.details.flightsReturn.filter(flight => flight.id == this.selectedFlightReturn)
			return this.details.flightsReturn
		},
		isSelected() {
			if (this.details.trip_type === 'One-way') return this.selectedFlightDeparture > -1
			return this.selectedFlightDeparture > -1 && this.selectedFlightReturn > -1
		}
	},
	mounted() {
	}
}
</script>

<style scoped lang="scss">
.flight-list {
	background: #F2F3FA;
}
.flight-item {
	width: 100%;
	margin-bottom: 20px;
	border-radius: 10px;
	border: none;
	.flight-time-text {
		font-size: 1.5rem;
		color: var(--primary);
	}
	.flight-radio-button {
		width: 100%;
		&::v-deep label.btn {
			width: 100%;
			border-radius: 10px;
		}
	}
}
</style>