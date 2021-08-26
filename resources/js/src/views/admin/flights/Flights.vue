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
				hover
			>
				<template #cell(actions)="{ item }">
					<div class="text-center">
						<i class="far fa-edit btn-icon text-dark mr-3" @click="editFlight(item)"></i>
						<i class="far fa-times-octagon btn-icon text-danger" @click="deleteFlight(item.id)"></i>
					</div>
				</template>
			</b-table>
		</div>
		<FlightEditSidebar 
			v-if="showSidebar"
			:showSidebar="showSidebar"
			:airports="airports"
			:method="method"
			:selectedFlight="selectedFlight"
			@close="closeSidebar"
			@submit="submit"
		/>	
	</div>	
</template>

<script>
import FlightEditSidebar from './FlightEditSidebar.vue'
import fields from './flightFields'
import mockAirports from './mockAirports'
import axios from '@/axios'
import { toTitleCase } from '@/helper'

export default {
	components: {
		FlightEditSidebar
	},
	data() {
		return {
			fields,
			allFlights: [],
			allAirports: [],
			fetchingState: 'FETCHING',
			showSidebar: false,
			method: 'Add', // EDIT

			selectedFlight: {
				id: '',
				flightNumber: '',
				departure: null,
				destination: null,
				departureDate: '',
				departureTime: '',
				arrivalDate: '',
				arrivalTime: '',
			},
		}
	},
	computed: {
		airports() {
			return this.allAirports.map(airport => {
				return {
					...airport,
					label: `${airport.code} (${airport.cityname}, ${toTitleCase(airport.countryname)})`
				}
			})
		},
		items() {
			if (this.airports.length === 0) return []
			return this.allFlights.map(flight => {
				return {
					...flight,
					departure: this.airports.find(airport => flight.departure_id === airport.id),
					destination: this.airports.find(airport => flight.destination_id === airport.id),
				}
			})
		},
	},
	methods: {
		openSidebar(method) {
			this.method = method
			this.showSidebar = true
		},
		closeSidebar() {
			this.showSidebar = false
		},
		async fetchAirports() {
			try {
				let res = await axios.get('/api/airports')
				this.allAirports = res.data.airports
			} catch (error) {
				console.error(error)	
			}
		},
		async fetchFlights() {
			try {
				let res = await axios.get('/api/flights')
				this.allFlights = res.data.flights
			} catch (error) {
				console.error(error)	
			}
		},
		async submit(payload) {
			try {
				if (this.method === 'Add') {
					let res = await axios.post('/api/flights', payload)	
					this.allFlights.push(res.data.flight)
				} else {
					await axios.patch(`/api/flights/${payload.id}`, payload)	
					await this.fetchFlights()
				}
			} catch (err) {
				console.error(err)	
			} finally {
				this.closeSidebar()
			}
		},
		editFlight(flight) {
			this.selectedFlight = {
				...flight
			}
			this.openSidebar('Edit')
		},
		async deleteFlight(id) {
			try {
				let res = await axios.delete(`/api/flights/${id}`)	
				if (res.status === 200) {
					this.allFlights.splice(this.allFlights.findIndex(flight => flight.id === id), 1)
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
	async mounted() {
		try {
			this.fetchingState = 'FETCHING'
			await Promise.all([
				this.fetchFlights(),
				this.fetchAirports()
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