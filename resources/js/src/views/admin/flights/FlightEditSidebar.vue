<template>
	<b-sidebar
		:visible="showSidebar"
		@hidden="$emit('close')"
		header-class="text-center"
		body-class="px-3"
		width="600px"
		right
		backdrop
		:title="`${method} Flights ${method == 'Edit' ? '#' + selectedFlight.id : ''}`"
	>
		<b-form @submit.prevent="$emit('submit', flight)">
			<b-form-group class="mb-3">
				<label>
					Flight Number
				</label>
				<b-form-input 
					v-model="flightNumber" 
					required
					placeholder="Enter Flight Number"
					class="rounded-0"
				/>
			</b-form-group>
			<b-form-group class="mb-3">
				<label>
					Departure
				</label>
				<v-select
					v-model="departure"
					:options="airports"
					label="label"
					placeholder="Choose the depature airport"
					:clearable="false"
					:filterBy="airportFilterBy"
				>
				</v-select>
			</b-form-group>
			<b-form-group class="mb-3">
				<label>
					Departure Date & Time (GMT)
				</label>
				<b-form-row>
					<b-col cols="7">
						<b-form-datepicker 
							class="rounded-0" 
							v-model="departureDate" 
							required
							:state="state.departureDatetime"
							:min="new Date()"
							@input="handleDepartureDatetime"
						>
						</b-form-datepicker>
					</b-col>
					<b-col cols="5">
						<b-form-timepicker 
							class="rounded-0" 
							v-model="departureTime" 
							required
							:state="state.departureDatetime"
							@input="handleDepartureDatetime"
						>
						</b-form-timepicker>
					</b-col>
				</b-form-row>
				<b-form-invalid-feedback>Departure datetime have to be after today</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group class="mb-3">
				<label>
					Destination
				</label>
				<v-select
					v-model="destination"
					:options="airports"
					label="label"
					placeholder="Choose the destination airport"
					:clearable="false"
					:filterBy="airportFilterBy"
				>
				</v-select>
			</b-form-group>
			<b-form-group class="mb-4">
				<label>
					Arrival Date & Time (GMT)
				</label>
				<b-form-row>
					<b-col cols="7">
						<b-form-datepicker 
							class="rounded-0" 
							v-model="arrivalDate" 
							required
							:min="new Date()"
							@input="handleArrivalDatetime"
							:state="state.arrivalDatetime"
						></b-form-datepicker>
					</b-col>
					<b-col cols="5">
						<b-form-timepicker 
							class="rounded-0" 
							v-model="arrivalTime" 
							required
							@input="handleArrivalDatetime"
							:state="state.arrivalDatetime"
						></b-form-timepicker>
					</b-col>
				</b-form-row>
				<b-form-invalid-feedback>Arrival datetime have to be after departure datetime</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group>
				<b-button type="submit" variant="warning" squared class="w-100">CONFIRM</b-button>
			</b-form-group>
		</b-form>
	</b-sidebar>
</template>

<script>
export default {
	props: {
		showSidebar: {
			type: Boolean,
			default: false
		},
		airports: {
			type: Array,
			default: () => []
		},
		method: {
			type: String,
			default: 'Add'
		},
		selectedFlight: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			state: {
				departureDatetime: null,
				arrivalDatetime: null
			},
			flightNumber: '',
			departure: null,
			destination: null,
			departureDate: '',
			departureTime: '',
			arrivalDate: '',
			arrivalTime: '',
		}
	},
	methods: {
		handleDepartureDatetime() {
			let today = new Date()
			// console.log(this.departure_datetime, '<=>', this.arrival_datetime)
			this.state.departureDatetime = this.departure_datetime.getTime() > today.getTime()
			this.state.arrivalDatetime = (this.arrival_datetime.getTime() > this.departure_datetime.getTime()) 
		},
		handleArrivalDatetime() {
			// console.log(this.departure_datetime, '<=>', this.arrival_datetime)
			this.state.arrivalDatetime = (this.arrival_datetime.getTime() > this.departure_datetime.getTime()) 
		},
		airportFilterBy(option, label, search) {
			return (label || '').indexOf(search) > -1
		}
	},
	computed: {
		departure_datetime() {
			return new Date(this.departureDate + ' ' + this.departureTime + ' GMT')
		},
		arrival_datetime() {
			return new Date(this.arrivalDate + ' ' + this.arrivalTime + ' GMT')
		},
		flight() {
			let res = {}
			if (this.method === 'Edit') res = { 
				id: this.selectedFlight.id
			}
			return {
				...res,
				flight_number: this.flightNumber,
				departure_id: this.departure.id,
				destination_id: this.destination.id,
				departure_time: this.departure_datetime,
				arrival_time: this.arrival_datetime,
			}
		}
	},
	mounted() {
		console.log(this.selectedFlight)
		this.flightNumber = this.selectedFlight.flight_number
		this.departure = this.airports.find(airport => airport.id == this.selectedFlight.departure.id)
		this.destination = this.airports.find(airport => airport.id == this.selectedFlight.destination.id);
		[ this.departureDate, this.departureTime ] = this.selectedFlight.departure_time.split(' ');
		[ this.arrivalDate, this.arrivalTime ] = this.selectedFlight.arrival_time.split(' ');
	}
}
</script>

<style>

</style>