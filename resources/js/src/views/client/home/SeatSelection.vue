<template>
	<div class="py-5">
		<b-container class="px-5">
			<b-row>
				<b-col class="text-center">
					<h2 class="mb-4">Seat Selection</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-tabs content-class="mt-3" v-model="tabIndex">
						<b-tab :title="flightDeparture.origin.cityname + ' -> ' + flightDeparture.destination.cityname">
							<b-card no-body class="card-seat-selection p-4">
								<b-tabs vertical pills nav-wrapper-class="col-6 border-none border-0" content-class="col-6 d-flex justify-content-end"
									v-model="currentPassenger"
								>
									<template #tabs-end>
										<div class="py-5 w-100">
											<b-button variant="warning" class="w-100" v-if="isAllSelectedForDeparture" @click="goToSelectionOfReturnFlight">
												Continue
											</b-button>
										</div>
									</template>
									<b-tab v-for="(passenger, index) in details.passengerDetails" 
										:key="index" 
										:class="{ 'border-bottom': index < details.passengerDetails.length - 1 }"
									>
										<template #title>
											<h5>
												{{ index + 1 }}: {{ passenger.firstName + ' ' + passenger.lastName }}
											</h5>
											<p>
												Seat: {{ passengerSeats[index].seatDeparture || 'Not Selected'}}
											</p>
										</template>
										<SeatMap
											:seatClass="details.class"
											:businessSeatMap="departureBusinessSeatMap"
											:economySeatMap="departureEconomySeatMap"
											:passengerIndex="index"
											@selected="handleSelected"
										/>
									</b-tab>
								</b-tabs>
							</b-card>
						</b-tab>

						<b-tab v-if="flightReturn" :title="flightReturn.origin.cityname + ' -> ' + flightReturn.destination.cityname">
							<b-card no-body class="card-seat-selection p-4">
								<b-tabs vertical pills nav-wrapper-class="col-6 border-none border-0" content-class="col-6 d-flex justify-content-end"
									v-model="currentPassenger"
								>
									<template #tabs-end>
										<div class="py-5 w-100">
											<b-button variant="warning" class="w-100" v-if="isAllSelectedForReturn" @click="done">
												Continue
											</b-button>
										</div>
									</template>
									<b-tab v-for="(passenger, index) in details.passengerDetails" 
										:key="index" 
										:class="{ 'border-bottom': index < details.passengerDetails.length - 1 }"
									>
										<template #title>
											<h5>
												{{ index + 1 }}: {{ passenger.firstName + ' ' + passenger.lastName }}
											</h5>
											<p>
												Seat: {{ passengerSeats[index].seatReturn || 'Not Selected'}}
											</p>
										</template>
										<SeatMap
											:seatClass="details.class"
											:businessSeatMap="returnBusinessSeatMap"
											:economySeatMap="returnEconomySeatMap"
											:passengerIndex="index"
											@selected="handleSelected"
										/>
									</b-tab>
								</b-tabs>
							</b-card>
						</b-tab>
					</b-tabs>
				</b-col>
			</b-row>
		</b-container>
	</div>	
</template>

<script>
import SeatMap from '@/components/SeatMap'
// import details from './tripSummaryDetails'
const numericBiz = {
	'A': 0, 'B': 0, 'D': 1, 'E': 1, 'F': 2, 'G': 2, 'J': 3, 'K': 3
}
const numericEco = {
	'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'J': 8, 'K': 9
}
export default {
	components: {
		SeatMap
	},
	props: {
		details: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			departureBusinessSeatMap: [],
			departureEconomySeatMap: [],
			returnBusinessSeatMap: [],
			returnEconomySeatMap: [],
			tabIndex: 0,
			currentPassenger: 0, 
			// details,
			passengerSeats: this.details.passengerDetails.map(passenger => { return { seatDeparture: '', seatReturn: '' } })
		}
	},
	methods: {
		handleSelected(seat) {
			this.releaseSeat(this.currentPassenger)
			if (this.tabIndex === 0) {
				this.passengerSeats[this.currentPassenger].seatDeparture = seat
				this.occupySeat(seat)
				this.currentPassenger = (this.currentPassenger + 1) % this.passengerSeats.length
				return
			}
			this.passengerSeats[this.currentPassenger].seatReturn = seat
			this.occupySeat(seat)
			this.currentPassenger = (this.currentPassenger + 1) % this.passengerSeats.length
		},
		releaseSeat(psIndex) {
			if (!this.tabIndex) {
				// Departure
				let seat = this.passengerSeats[psIndex].seatDeparture
				console.log('release', seat)
				if (!seat) return
				let [ seatClass, row, col ] = seat.split(' ')
				if (seatClass === 'Business')
					this.$set(this.departureBusinessSeatMap[row - 1], numericBiz[col], false)
				else
					this.$set(this.departureEconomySeatMap[row - 1], numericEco[col], false)
				return
			}
			// Return
			let seat = this.passengerSeats[psIndex].seatReturn
			if (!seat) return
			let [ seatClass, row, col ] = seat.split(' ')
			if (seatClass === 'Business')
				this.$set(this.returnBusinessSeatMap[row - 1], numericBiz[col], false)
			else
				this.$set(this.returnEconomySeatMap[row - 1], numericEco[col], false)
		},
		occupySeat(seat) {
			let [ seatClass, row, col ] = seat.split(' ')
			if (seatClass === 'Business') {
				if (!this.tabIndex)
					this.$set(this.departureBusinessSeatMap[row - 1], numericBiz[col], this.currentPassenger)
				else 
					this.$set(this.returnBusinessSeatMap[row - 1], numericBiz[col], this.currentPassenger)
				return
			}
			if (!this.tabIndex)
				this.$set(this.departureEconomySeatMap[row - 1], numericEco[col], this.currentPassenger)
			else
				this.$set(this.returnEconomySeatMap[row - 1], numericEco[col], this.currentPassenger)
		},
		goToSelectionOfReturnFlight() {
			if (this.flightReturn) {
				this.tabIndex++
				this.currentPassenger = 0
				return
			}
			this.done()
		},
		done() {
			let data = JSON.parse(JSON.stringify(this.details.passengerDetails))
			data = data.map((datum, index) => {
				return {
					...datum,
					...this.passengerSeats[index]
				}
			})
			console.log(data)
			this.$emit('done', { passengerDetails: data })
		}
	},
	computed: {
		flightDeparture() {
			return this.details.selectedFlightDeparture
		},
		flightReturn() {
			return this.details.selectedFlightReturn
		},
		isAllSelectedForDeparture() {
			return this.passengerSeats.every(e => e.seatDeparture !== '')
		},
		isAllSelectedForReturn() {
			return this.passengerSeats.every(e => e.seatReturn !== '')
		}
	},
	mounted() {
		JSON.parse(this.details.selectedFlightDeparture.business_seats).forEach((row, index) => {
			this.$set(this.departureBusinessSeatMap, index, row)
		})
		JSON.parse(this.details.selectedFlightDeparture.economy_seats).forEach((row, index) => {
			this.$set(this.departureEconomySeatMap, index, row)
		})
		if (this.flightReturn) {
			JSON.parse(this.details.selectedFlightReturn.business_seats).forEach((row, index) => {
				this.$set(this.returnBusinessSeatMap, index, row)
			})
			JSON.parse(this.details.selectedFlightReturn.economy_seats).forEach((row, index) => {
				this.$set(this.returnEconomySeatMap, index, row)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.card-seat-selection {
	padding-top: 72px;
	.tabs {
		&::v-deep .nav {
			border-top-left-radius: 10px !important;
			border-bottom-left-radius: 10px !important;
		}
		&::v-deep .col-auto {
			border-right: 1px solid #eee;
		}
	}
	&::v-deep .disabled {
		background: var(--gray);
		border-color: var(--gray);
		color: white;
	}
}
</style>