<template>
	<div class="flight-list">
		<b-container>
			<b-row>
				<b-col class="pt-5">
					<div class="w-100 text-center">
						<h3>Select your departure flight from</h3>
						<h3>
							{{ airportFrom.cityName }} to {{ airportTo.cityName }}
						</h3>
					</div>
					<div class="w-100 text-left">
						<p>Number of Flights: {{ details.flightsDeparture.length }}</p>
					</div>
					<div class="w-100">
						<b-form-group class="w-100">
							<b-card 
								v-for="flight, index in details.flightsDeparture"
								:key="index"
								class="flight-item" 
							>
								<b-row class="w-100 mx-0 text-left">
									<b-col cols="3">
										<div class="flight-time-text">
											{{ flight.departure_time.split(' ')[1] }} {{ flight.origin.code }}
										</div>
										<div>
											{{ flight.origin.cityName }}
										</div>
										<div class="font-small">
											{{ flight.flight_number }} Airbus A350-900
										</div>
									</b-col>
									<b-col cols="3" class="text-center">
										<div>
											<i class="fal fa-clock"></i>
										</div>
										<div>
											{{ getDifferenceBetweenTwoDates(flight.departure_time, flight.arrival_time) }}
										</div>
									</b-col>
									<b-col cols="3" class="text-right">
										<div class="flight-time-text">
											{{ flight.arrival_time.split(' ')[1] }} {{ flight.destination.code }}
										</div>
										<div>
											{{ flight.destination.cityName }}
										</div>
										<div class="font-small">
											Operated by: Avia Airways
										</div>
									</b-col>
									<b-col cols="3">
										<b-form-radio
											v-model="ticketDeparture"
											:value="index"
											button
											button-variant="outline-primary"
											class="flight-radio-button"
										>
											<div class="text-center">
												<div class="font-large mb-3">
													Business
												</div>
												<div class="mb-3">
													1000
													<span class="font-larger">USD</span>
												</div>
												<div>
													<small>
														Total price for all passengers
													</small>
												</div>
											</div>
										</b-form-radio>
									</b-col>
								</b-row>
							</b-card>
						</b-form-group>
					</div>
				</b-col>
			</b-row>
			<b-row v-if="details.trip_type === 'Return'">
				<b-col class="pt-5">
					<div class="w-100 text-center">
						<h3>Select your return flight from</h3>
						<h3>
							{{ airportTo.cityName }} to {{ airportFrom.cityName }}
						</h3>
					</div>
					<div class="w-100 text-left">
						<p>Number of Flights: {{ details.flightsReturn.length }}</p>
					</div>
					<div class="w-100">
						<b-form-group class="w-100">
							<b-card 
								v-for="flight, index in details.flightsReturn"
								:key="index"
								class="flight-item" 
							>
								<b-row class="w-100 mx-0 text-left">
									<b-col cols="3">
										<div class="flight-time-text">
											{{ flight.departure_time.split(' ')[1] }} {{ flight.origin.code }}
										</div>
										<div>
											{{ flight.origin.cityName }}
										</div>
										<div>
											{{ flight.flight_number }} Airbus A350-900
										</div>
									</b-col>
									<b-col cols="3" class="text-center">
										<div>
											<i class="fal fa-clock"></i>
										</div>
										<div>
											{{ getDifferenceBetweenTwoDates(flight.departure_time, flight.arrival_time) }}
										</div>
									</b-col>
									<b-col cols="3" class="text-right">
										<div class="flight-time-text">
											{{ flight.arrival_time.split(' ')[1] }} {{ flight.destination.code }}
										</div>
										<div>
											{{ flight.destination.cityName }}
										</div>
										<div>
											Operated by: Avia Airways
										</div>
									</b-col>
									<b-col cols="3">
										<b-form-radio
											v-model="ticketReturn"
											:value="index"
											button
											button-variant="outline-primary"
											class="flight-radio-button"
										>
											<div class="text-center">
												<div class="font-large mb-3">
													Business
												</div>
												<div class="mb-3">
													1000
													<span class="font-larger">USD</span>
												</div>
												<div>
													<small>
														Total price for all passengers
													</small>
												</div>
											</div>
										</b-form-radio>
									</b-col>
								</b-row>
							</b-card>
						</b-form-group>
					</div>
				</b-col>
			</b-row>
			
		</b-container>
	</div>
</template>

<script>
export default {
	props: {
		details: Object,
		airports: Array
	},
	data() {
		return {
			ticketDeparture: -1,
			ticketReturn: -1,
		}
	},
	methods: {
		getDifferenceBetweenTwoDates(a, b) {
			const date1 = new Date(a);
			const date2 = new Date(b);
			const diffTime = Math.abs(date2 - date1);
			const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)); 
			const diffMinutes = (diffTime % (1000 * 60 * 60)) * 60; 
			return diffHours + 'h ' + diffMinutes + 'm'
		}
	},
	computed: {
		fields() {
			return [
				{ key: 'flight_number', label: 'Flight Number' },
				{ key: 'departure_time', label: 'Departure Time' },
				{ key: 'arrival_time', label: 'Departure Time' },
				{ key: 'duration', label: 'Duration' },
				{ key: 'seat_count', label: 'Remaining Seats' }
			]
		},
		airportFrom() {
			return this.airports.find(airport => airport.id == this.details.from_airport_id) || {}
		},
		airportTo() {
			return this.airports.find(airport => airport.id == this.details.to_airport_id) || {}
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