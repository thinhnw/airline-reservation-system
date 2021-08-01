<template>
	<div class="h-100">
		<div class="d-flex justify-content-between mb-3">
			<h2>FLIGHTS</h2>
			<b-button variant="outline-warning" squared class="py-1" @click="openSidebar('Add')">
				Add flight
				<i class="ml-1 fal fa-plus"></i>
			</b-button>
		</div>
		<div>
			<b-table
				:fields="fields"
				:items="items"
				bordered
			>
				<template #cell(actions)="{ item }">
					<div class="text-center">
						<i class="far fa-edit btn-icon text-dark mr-3" @click="editFlight(item.id)"></i>
						<i class="far fa-times-octagon btn-icon text-danger" @click="deleteFlight(item.id)"></i>
					</div>
				</template>
			</b-table>
		</div>
		<b-sidebar
			:visible="showSidebar"
			@hidden="closeSidebar"
			header-class="text-center"
			body-class="px-3"
			width="600px"
			right
			backdrop
			:title="`${method} Flights ${method == 'EDIT' ? selectedFlightId : ''}`"
		>
			<b-form @submit.prevent="submit">
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
					>
					</v-select>
				</b-form-group>
				<b-form-group class="mb-3">
					<label>
						Departure Date & Time (UTC+0)
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
								placeholder="YYYY-MM-DD"
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
					>
					</v-select>
				</b-form-group>
				<b-form-group class="mb-4">
					<label>
						Arrival Date & Time (UTC+0)
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
								placeholder="YYYY-MM-DD"
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
	</div>	
</template>

<script>
import fields from './flightFields'
import mockAirports from './mockAirports'
import axios from '@/axios'

export default {
	components: {
	},
	data() {
		return {
			fields,
			allFlights: [],
			showSidebar: false,
			method: 'Add', // EDIT
			selectedFlightId: -1,

			flightNumber: '',
			departure: null,
			destination: null,
			departureDate: '',
			departureTime: '',
			arrivalDate: '',
			arrivalTime: '',
			state: {
				departureDatetime: null,
				arrivalDatetime: null
			}
		}
	},
	computed: {
		airports() {
			return mockAirports.map(airport => {
				return {
					...airport,
					label: `${airport.code} (${airport.city}, ${airport.country})`
				}
			})
		},
		items() {
			return this.allFlights.map(flight => {
				return {
					...flight,
					departure: this.airports.find(airport => flight.departure_id === airport.id).label,
					destination: this.airports.find(airport => flight.destination_id === airport.id).label,
				}
			})
		},
		departure_datetime() {
			return new Date(this.departureDate + ' ' + this.departureTime)
		},
		arrival_datetime() {
			return new Date(this.arrivalDate + ' ' + this.arrivalTime)
		}
	},
	methods: {
		openSidebar(method) {
			this.method = method
			this.showSidebar = true
		},
		closeSidebar() {
			this.showSidebar = false
		},
		handleDepartureDatetime() {
			let today = new Date()
			// console.log(this.departure_datetime, '<=>', this.arrival_datetime)
			this.state.departureDatetime = this.departure_datetime.getTime() > today.getTime()
		},
		handleArrivalDatetime() {
			// console.log(this.departure_datetime, '<=>', this.arrival_datetime)
			this.state.arrivalDatetime = (this.arrival_datetime.getTime() > this.departure_datetime.getTime()) 
		},
		async fetchFlights() {
			try {
				let res = await axios.get('/api/flights')
				this.allFlights = res.data.flights
				console.log(this.allFlights)
			} catch (error) {
				console.error(error)	
			}
		},
		async submit() {
			try {
				let form = {
					flight_number: this.flightNumber,
					departure_id: this.departure.id,
					destination_id: this.destination.id,
					departure_time: this.departure_datetime,
					arrival_time: this.arrival_datetime,
				}
				let res = await axios.post('/api/flights', form)	
				this.allFlights.push(res.data.flight)
				console.log(res)
			} catch (err) {
				console.error(err)	
			}
		},
		async editFlight(id) {
			try {
				
			} catch (error) {
				console.error(err)	
			}
		},
		async deleteFlight(id) {
			try {
				let res = await axios.delete(`/api/flights/${id}`)	
				if (res.status === 200) {
					this.allFlights.splice(this.allFlights.find(flight => flight.id === id), 1)
					this.$bvToast.toast(res.message, {
						title: 'Success',
						autoHideDelay: 1000,
						appendToast: false,
						solid: true,
						toaster: 'b-toaster-top-right',
						variant: 'success'
					})
				}
			} catch (error) {
				console.error(err)	
			}
		}
	},
	mounted() {
		this.fetchFlights()
	}
}
</script>

<style>

</style>