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

			</b-table>
		</div>
		<b-sidebar
			:visible="showSidebar"
			@hidden="closeSidebar"
			header-class="text-center"
			body-class="px-3"
			width="500px"
			right
			backdrop
			:title="`${method} Flights ${method == 'EDIT' ? selectedFlightId : ''}`"
		>
			<b-form @submit.prevent="submit">
				<b-form-group class="mb-3">
					<b-label>
						Flight Number
					</b-label>
					<b-form-input 
						v-model="flightNumber" 
						required
						placeholder="Enter Flight Number"
						class="rounded-0"
					/>
				</b-form-group>
				<b-form-group class="mb-3">
					<b-label>
						Departure
					</b-label>
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
					<b-label>
						Departure Date & Time (UTC+0)
					</b-label>
					<b-form-row>
						<b-col cols="7">
							<b-form-datepicker class="rounded-0"></b-form-datepicker>
						</b-col>
						<b-col cols="5">
							<b-form-timepicker class="rounded-0"></b-form-timepicker>
						</b-col>
					</b-form-row>
				</b-form-group>
				<b-form-group class="mb-3">
					<b-label>
						Destination
					</b-label>
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
					<b-label>
						Arrival Date & Time (UTC+0)
					</b-label>
					<b-form-row>
						<b-col cols="7">
							<b-form-datepicker class="rounded-0"></b-form-datepicker>
						</b-col>
						<b-col cols="5">
							<b-form-timepicker class="rounded-0"></b-form-timepicker>
						</b-col>
					</b-form-row>
				</b-form-group>
				<b-form-group>
					<b-button type="submit" variant="primary" squared class="w-100">CONFIRM</b-button>
				</b-form-group>
			</b-form>
		</b-sidebar>
	</div>	
</template>

<script>
import fields from './flightFields'
import mockAirports from './mockAirports'
export default {
	components: {
	},
	data() {
		return {
			fields,
			showSidebar: false,
			method: 'Add', // EDIT
			selectedFlightId: -1,

			flightNumber: '',
			departure: null,
			destination: null,
			departureDate: new Date(),
			departureTime: new Date(),
			arrivalDate: new Date(),
			arrivalTime: new Date(),
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
			return []
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
		async submit() {

		}
	}
}
</script>

<style>

</style>