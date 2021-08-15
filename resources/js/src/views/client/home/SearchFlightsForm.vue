<template>
	<div>
		<b-form class="px-3" @submit.prevent="search">
			<div class="d-flex justify-content-between">
				<div style="width: 220px">
					<b-form-group>
						<label>From</label>
						<v-select
							v-model="form.fromCity"
							:options="airports"
							required
							label="label"
							placeholder="From Airport/City"
							:clearable="false"
							:filterBy="airportFilterBy"
							class="from-city-select"
						>
							<template #search="{attributes, events}">
								<input
									class="vs__search"
									:required="!form.fromCity"
									v-bind="attributes"
									v-on="events"
								/>
							</template>
						</v-select>
					</b-form-group>
				</div>
				<div style="width: 220px">
					<b-form-group>
						<label>To</label>
						<v-select
							v-model="form.toCity"
							:options="airports"
							label="label"
							placeholder="To Airport/City"
							:clearable="false"
							:filterBy="airportFilterBy"
							class="to-city-select"
						>
							<template #search="{attributes, events}">
								<input
									class="vs__search"
									:required="!form.toCity"
									v-bind="attributes"
									v-on="events"
								/>
							</template>
						</v-select>
					</b-form-group>
				</div>
				<div style="width: 130px">
					<b-form-group>
						<label>Trip</label>
						<v-select 
							v-model="form.tripType"
							:options="[ 'One-way', 'Return' ]"
							@change="handleTripChange"
							:clearable="false"
							class="trip-select"
						></v-select>
					</b-form-group>
				</div>
				<b-row no-gutters class="flex-fill">
					<b-col>
						<b-form-group>
							<label>Departure</label>
							<b-form-datepicker
								v-model="form.departureDate"
								:date-format-options="{
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								}"
								placeholder="Departure Date"
								class="departure-date-picker"	
							></b-form-datepicker>
						</b-form-group>
					</b-col>
					<b-col v-if="form.tripType==='Return'">
						<b-form-group>
							<label>Return</label>
							<b-form-datepicker
								v-model="form.returnDate"
								:date-format-options="{
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								}"
								placeholder="Return Date"
								class="return-date-picker"
							></b-form-datepicker>
						</b-form-group>
					</b-col>
				</b-row>
				<div style="width: 100px">
					<b-form-group>
						<label>Passengers</label>
						<b-form-input type="number" v-model="form.passengerCount" required class="passenger-input"></b-form-input>
					</b-form-group>
				</div>
				<div style="width: 130px">
					<b-form-group>
						<label>Class</label>
						<v-select
							class="class-select"
							:options="['Economy', 'Business']"
							:clearable="false"
							v-model="form.class"
						></v-select>
					</b-form-group>
				</div>
			</div>
			<b-row no-gutters>
				<b-col class="text-right">
					<b-button variant="primary" type="submit" class="px-4">
						Search
					</b-button>
				</b-col>
			</b-row>
		</b-form>
	</div>	
</template>

<script>
import axios from '@/axios'
export default {
	props: {
		airports: Array
	},
	data() {
		return {
			form: {
				fromCity: null,
				toCity: null,
				tripType: 'One-way',
				departureDate: (new Date()).toISOString().split('T')[0],
				returnDate: (new Date()).toISOString().split('T')[0],
				passengerCount: 1,
				class: 'Business'
			}
		}
	},
	methods: {
		airportFilterBy(option, label, search) {
			return (label || '').indexOf(search) > -1
		},
		handleTripChange(value) {
		},
		async search() {
			try {
				let filter = {
					from_airport_id: this.form.fromCity.id,
					to_airport_id: this.form.toCity.id,
					trip_type: this.form.tripType,
					departure_date: this.form.departureDate,
					passenger_count: this.form.passengerCount,
					class: this.form.class
				}
				// let filter = {
				// 	from_airport_id: 1934,
				// 	to_airport_id: 2307,
				// 	trip_type: 'Return',
				// 	departure_date: '2021-08-19',
				// 	return_date: '2021-08-21',
				// 	passenger_count: 2,
				// 	class: 'Business'
				// }
				if (filter.trip_type === 'Return') filter.return_date = this.form.returnDate
				let res = await axios.get(`/api/flights/search?filter=${JSON.stringify(filter)}`)	
				console.log(res)

				let payload = {
					...filter,
					flightsDeparture: res.data.flightsDeparture.map(flight => {
						return {
							...flight,
							origin: this.airports.find(airport => airport.id == flight.departure_id),
							destination: this.airports.find(airport => airport.id == flight.destination_id),
						}
					}),
				}
				if (filter.trip_type == 'Return') {
					payload = {
						...payload,
						flightsReturn: res.data.flightsReturn.map(flight => {
							return {
								...flight,
								origin: this.airports.find(airport => airport.id == flight.departure_id),
								destination: this.airports.find(airport => airport.id == flight.destination_id),
							}
						})
					}
				}
				this.$emit('list-flights', payload)
			} catch (error) {
				console.error(error)	
			}
		}
	},
};
</script>

<style scoped lang="scss">
label {
	font-size: 0.8rem;
}
.from-city-select, .to-city-select, .trip-select, .passenger-select {
	&::v-deep .vs__dropdown-toggle {
		border-right: 0;
		border-radius: 0;
	}
}
.departure-date-picker, .return-date-picker, .passenger-input {
	border-right: 0;
	border-radius: 0 !important;
}
.from-city-select {
	&::v-deep .vs__dropdown-toggle {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
}
.class-select {
	&::v-deep .vs__dropdown-toggle {
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}
}
</style>
