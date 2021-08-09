<template>
	<div class="w-100">
		<FlightBooking v-if="bookingStep === 0" 
			:airports="airports"
			:details="flightsDetails"
		/>	
		<PassengersInfo v-if="bookingStep === 1"
		/>
	</div>	
</template>

<script>
import FlightList from './FlightList.vue'
import PassengersInfo from './PassengersInfo.vue'
export default {
	components: {
		FlightList,
		PassengersInfo
	},
	props: {
		details: {
			type: Object,
			default: () => {}
		},
		airports: Array
	},
}
</script>

<style>

</style>