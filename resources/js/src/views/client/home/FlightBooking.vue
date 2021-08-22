<template>
	<div id="flight-booking">
		<FlightList v-if="bookingStep === 1" 
			:airports="airports"
			:details="tripDetails"
			@done="continueStep"
		/>	
		<PassengersInfo v-if="bookingStep === 2"
			:details="tripDetails"
			@done="continueStep"
			@back="backStep"
		/>
		<SeatSelection v-if="bookingStep === 3"
			:details="tripDetails"
			@done="continueStep"
			@back="backStep"
		/>
		<TripSummary v-if="bookingStep === 4"
			:details="tripDetails"
			@back="backStep"
		/>
	</div>	
</template>

<script>
import FlightList from './FlightList.vue'
import PassengersInfo from './PassengersInfo.vue'
import TripSummary from './TripSummary.vue'
import SeatSelection from './SeatSelection.vue'
import axios from '@/axios'
export default {
	components: {
		FlightList,
		PassengersInfo,
		TripSummary,
		SeatSelection
	},
	props: {
		searchedInfo: {
			type: Object,
			default: () => {}
		},
		airports: Array
	},
	data() {
		return {
			bookingStep: 1, // 1. Searched, 2. Require passengers info
			tripDetails: {}
		}
	},
	methods: {
		continueStep(event) {
			this.tripDetails = {
				...this.tripDetails,
				...event
			}
			console.log(this.tripDetails)
			this.bookingStep++
		},
		backStep() {
			this.bookingStep--
		}
	},
	created() {
		this.tripDetails = JSON.parse(JSON.stringify(this.searchedInfo))
	}
}
</script>

<style lang="scss" scoped>
#flight-booking {
	background: #f2f3fa;
}
</style>>
