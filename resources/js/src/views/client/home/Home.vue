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
		<div>
			<FlightBooking v-if="bookingStep >= 0" 
				:airports="airports"
				:details="flightsDetails"
			/>	
			
		</div>
	</div>
</template>

<script>
import SearchFlightsForm from './SearchFlightsForm.vue'
import FlightBooking from './FlightBooking.vue'
import axios from '@/axios'
export default {
	components: {
		SearchFlightsForm,
		FlightBooking
	},
	data() {
		return {
			fetchedAirports: [],
			// flightsDetails: null,
			flightsDetails: {
    "from_airport_id": 1934,
    "to_airport_id": 2307,
    "trip_type": "Return",
    "departure_date": "2021-08-19",
    "return_date": "2021-08-21",
    "passenger_count": 2,
    "class": "Business",
    "flightsDeparture": [
        {
            "id": 4,
            "flight_number": "RU66",
            "departure_id": 1934,
            "destination_id": 2307,
            "departure_time": "2021-08-19 11:00:00",
            "arrival_time": "2021-08-19 13:00:00",
            "created_at": "2021-08-07T07:08:26.000000Z",
            "updated_at": "2021-08-07T07:08:26.000000Z",
            "economy_seat_count": 312,
            "business_seat_count": 42,
            "origin": {
                "id": 1934,
                "code": "LED",
                "name": "Pulkovo Airport",
                "cityCode": "LED",
                "cityName": "St Petersburg",
                "countryName": "RUSSIA",
                "countryCode": "RU",
                "timezone": "4",
                "lat": "59.800292",
                "lon": "30.262503",
                "numAirports": 2,
                "city": "true",
                "created_at": null,
                "updated_at": null,
                "label": "St Petersburg LED"
            },
            "destination": {
                "id": 2307,
                "code": "SVO",
                "name": "Sheremetyevo Airport",
                "cityCode": "MOW",
                "cityName": "Moscow",
                "countryName": "RUSSIA",
                "countryCode": "RU",
                "timezone": "4",
                "lat": "55.972642",
                "lon": "37.414589",
                "numAirports": 3,
                "city": "",
                "created_at": null,
                "updated_at": null,
                "label": "Moscow SVO"
            }
        },
        {
            "id": 7,
            "flight_number": "RU345",
            "departure_id": 1934,
            "destination_id": 2307,
            "departure_time": "2021-08-19 23:00:00",
            "arrival_time": "2021-08-20 01:00:00",
            "created_at": "2021-08-08T10:24:51.000000Z",
            "updated_at": "2021-08-08T10:24:51.000000Z",
            "economy_seat_count": 312,
            "business_seat_count": 42,
            "origin": {
                "id": 1934,
                "code": "LED",
                "name": "Pulkovo Airport",
                "cityCode": "LED",
                "cityName": "St Petersburg",
                "countryName": "RUSSIA",
                "countryCode": "RU",
                "timezone": "4",
                "lat": "59.800292",
                "lon": "30.262503",
                "numAirports": 2,
                "city": "true",
                "created_at": null,
                "updated_at": null,
                "label": "St Petersburg LED"
            },
            "destination": {
                "id": 2307,
                "code": "SVO",
                "name": "Sheremetyevo Airport",
                "cityCode": "MOW",
                "cityName": "Moscow",
                "countryName": "RUSSIA",
                "countryCode": "RU",
                "timezone": "4",
                "lat": "55.972642",
                "lon": "37.414589",
                "numAirports": 3,
                "city": "",
                "created_at": null,
                "updated_at": null,
                "label": "Moscow SVO"
            }
        }
    ],
    "flightsReturn": [
        {
            "id": 8,
            "flight_number": "RU 556",
            "departure_id": 2307,
            "destination_id": 1934,
            "departure_time": "2021-08-21 22:00:00",
            "arrival_time": "2021-08-21 23:00:00",
            "created_at": "2021-08-09T03:13:31.000000Z",
            "updated_at": "2021-08-09T03:13:31.000000Z",
            "economy_seat_count": 312,
            "business_seat_count": 42,
            "origin": "Moscow SVO",
            "destination": "St Petersburg LED"
        }
    ]
},
			bookingStep: 0, // -1: Not yet, 0. Searched, 1. Selected Flights and clicked continue, 2. Require passengers info
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
			this.bookingStep = 0
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