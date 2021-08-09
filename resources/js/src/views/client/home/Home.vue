<template>
	<div id="home-component">
		<div class="banner">
			<b-container class="h-100 px-0">
				<b-row class="h-100">
					<b-col cols="12" class="d-flex align-items-center h-100 px-0">
						<b-card class="w-100 form-card pb-3" no-body>
							<b-tabs justified class="main-tabs" content-class="pt-3">
								<b-tab title="Book">
									<SearchFlightsForm 
										:airports="airports"
										@list-flights="handleListingFlights"
									/>	
								</b-tab>
								<b-tab title="My Trips"></b-tab>
								<b-tab title="Check-in"></b-tab>
								<b-tab title="Flight Status"></b-tab>
							</b-tabs>
						</b-card>
					</b-col>
				</b-row>
			</b-container>
		</div>
		<FlightList v-if="showFlightList" 
			:airports="airports"
			:details="flightsDetails"
		/>	
	</div>
</template>

<script>
import SearchFlightsForm from './SearchFlightsForm.vue'
import FlightList from './FlightList.vue'
import axios from '@/axios'
export default {
	components: {
		SearchFlightsForm,
		FlightList
	},
	data() {
		return {
			fetchedAirports: [],
			showFlightList: false,
			flightsDetails: null
		}
	},
	methods: {
		async fetchAirports() {
			try {
				let res = await axios.get('/api/airports')
				this.fetchedAirports = res.data.airports
			} catch (error) {
				console.error(error)	
			}
		},
		handleListingFlights(event) {
			console.log('event', event)
			this.flightsDetails = event
			this.showFlightList = true
		}
	},
	computed: {
		airports() {
			return this.fetchedAirports.map(airport => {
				return {
					...airport,
					label: `${airport.cityName} ${airport.code}`
				}
			})
		},
	},
	mounted() {
		this.fetchAirports()
	}
}
</script>

<style scoped lang="scss">
.banner {
	background: url(/images/bgbigben.jpg) rgba(0, 0, 0, 0.3);
	background-repeat: no-repeat; 
	background-size: cover; 
	background-blend-mode: darken;
	width: 100%;
	height: 800px;
}
.main-tabs {

	&::v-deep .nav-tabs {
		.nav-link {
			border: initial;
			border-radius: initial;
			color: white;
		}
		.nav-link.active {
			color: black;
		}
		.nav-link:not(.active) {
			background: var(--blue);
		}
		.nav-item:first-child {
			.nav-link {
				border-top-left-radius: 10px;
			}
		}
		.nav-item:last-child {
			.nav-link {
				border-top-right-radius: 10px;
			}
		}
	}
}
.form-card {
	border: initial;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
}
</style>