<template>
	<b-container>
		<b-row>
			<b-col class="py-5">
				<h4>Flight Number {{ flight.flight_number }}</h4>
				<p class="mt-4">Departure: {{ new Date(flight.departure_time).toLocaleDateString() }}</p>
				<p class="mt-3">Status: {{ status }}</p>
				<b-row>
					<b-col>
						<p>
							<b>Origin</b>
						</p>
						<p>
							{{ `${flight.airport_from.name} (${flight.airport_from.code}), ${flight.airport_from.cityname} , ${flight.airport_from.countryname}` }}
						</p>
					</b-col>
					<b-col>
						<p>
							<b>Destination</b>
						</p>
						<p>
							{{ `${flight.airport_to.name} (${flight.airport_to.code}), ${flight.airport_to.cityname} , ${flight.airport_to.countryname}` }}
						</p>
					</b-col>
				</b-row>
				<b-row>
					<b-col>
						<p>
							<b>Departure Time</b>
						</p>
						<p>
							{{ new Date(flight.departure_time).toLocaleTimeString() }}
						</p>
					</b-col>
					<b-col>
						<p>
							<b>Arrival Time</b>
						</p>
						<p>
							{{ new Date(flight.arrival_time).toLocaleTimeString() }}
						</p>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import moment from 'moment'
export default {
	props: {
		flight: Object
	},

	computed: {
		status() {
			let time = moment(this.flight.departure_time)
			let now = moment()
			if (now.isAfter(time)) return 'DEPARTED'
			if (time.diff(now, 'seconds') <= 60 * 60) return 'BOARDING'
			return 'SCHEDULED'
		}
	}
}
</script>

<style>

</style>