<template>
	<div id="trip-summary" class="py-5">
		<b-container>
			<b-row>
				<b-col>
					<button @click="handlePayment"></button>
					<vue-html2pdf
						:show-layout="false"
						:float-layout="true"
						:enable-download="true"
						:preview-modal="true"
						:paginate-elements-by-height="2000"
						filename="hee hee"
						:pdf-quality="2"
						:manual-pagination="false"
						pdf-format="a4"
						pdf-orientation="portrait"
						pdf-content-width="1040px"
		
						@progress="onProgress($event)"
						@hasStartedGeneration="hasStartedGeneration()"
						@hasGenerated="hasGenerated($event)"
						ref="html2Pdf"
					>
						<section slot="pdf-content">
							<b-card no-body ref="summary" id="summary">
								<b-card-header>
									Trip Summary
								</b-card-header>
								<b-card-body>
									<section class="flight-details mb-5">
										<div class="d-flex align-items-center">
											<div class="icon-wrapper">
												<i class="font-size-small fas fa-plane text-white"></i>
											</div>
											<small class="text-secondary ml-2">
												Outbound flight
											</small>
										</div>
										<div class="mb-3">
											<span class="font-size-2rem text-primary">
												{{ flightDeparture.origin.cityName }}
											</span>
											>
											<span class="font-size-2rem text-primary">
												{{ flightDeparture.destination.cityName }} 
											</span>
											<span>
												{{  moment.utc(flightDeparture.arrival_time).utcOffset(flightDeparture.destination.timezone).format('ddd, DD MMM YYYY') }}
											</span>
										</div>
										<b-table-simple>
											<b-tbody>
												<b-tr>
													<b-td>
														Departure
													</b-td>
													<b-td></b-td>
													<b-td>
														Arrival
													</b-td>
													<b-td>
														Class / Check baggage allowance:
													</b-td>
													<b-td>
														Earn Skymiles
													</b-td>
												</b-tr>
												<b-tr>
													<b-td>
														<div>
															<span class="font-size-larger font-weight-bold">
																{{ moment.utc(flightDeparture.departure_time).utcOffset(flightDeparture.origin.timezone).format('HH:mm') }}
															</span>
															<span class="font-size-larger text-secondary">
																{{ flightDeparture.origin.code.toUpperCase() }}
															</span>
														</div>
														<div>
															<small>{{ flightDeparture.origin.cityName }}, {{ flightDeparture.origin.name }}</small>
														</div>
														<div>
															<small>{{ flightDeparture.origin.countryName }}</small>
														</div>
													</b-td>
													<b-td class="text-center px-5">
														<div>
															<i class="fal fa-clock"></i>
														</div>
														<div>
															{{ getDisplayedDuration(flightDeparture.departure_time, flightDeparture.arrival_time) }}
														</div>
													</b-td>
													<b-td>
														<div>
															<span class="font-size-larger font-weight-bold">
																{{ moment.utc(flightDeparture.arrival_time).utcOffset(flightDeparture.destination.timezone).format('HH:mm') }}
															</span>
															<span class="font-size-larger text-secondary">
																{{ flightDeparture.destination.code.toUpperCase() }}
															</span>
														</div>
														<div>
															<small>{{ flightDeparture.destination.cityName }}, {{ flightDeparture.destination.name }}</small>
														</div>
														<div>
															<small>{{ flightDeparture.destination.countryName }}</small>
														</div>
													</b-td>
													<b-td>
														<div>
															{{ details.class }} / 35kg
														</div>
													</b-td>
													<b-td>
														<small>
															Earn
															{{ 2732 }} Skymiles
														</small>
													</b-td>
												</b-tr>
											</b-tbody>
										</b-table-simple>
									</section>
									<section class="flight-details mb-5">
										<div class="d-flex align-items-center">
											<div class="icon-wrapper">
												<i class="font-size-small fas fa-plane text-white" style="transform: translate(-50%, -50%) rotate(180deg)"></i>
											</div>
											<small class="text-secondary ml-2">
												Inbound flight
											</small>
										</div>
										<div class="mb-3">
											<span class="font-size-2rem text-primary">
												{{ flightReturn.origin.cityName }}
											</span>
											>
											<span class="font-size-2rem text-primary">
												{{ flightReturn.destination.cityName }} 
											</span>
											<span>
												{{  moment.utc(flightReturn.arrival_time).utcOffset(flightReturn.destination.timezone).format('ddd, DD MMM YYYY') }}
											</span>
										</div>
										<b-table-simple>
											<b-tbody>
												<b-tr>
													<b-td>
														Departure
													</b-td>
													<b-td></b-td>
													<b-td>
														Arrival
													</b-td>
													<b-td>
														Class / Check baggage allowance:
													</b-td>
													<b-td>
														Earn Skymiles
													</b-td>
												</b-tr>
												<b-tr>
													<b-td>
														<div>
															<span class="font-size-larger font-weight-bold">
																{{ moment.utc(flightReturn.departure_time).utcOffset(flightReturn.origin.timezone).format('HH:mm') }}
															</span>
															<span class="font-size-larger text-secondary">
																{{ flightReturn.origin.code.toUpperCase() }}
															</span>
														</div>
														<div>
															<small>{{ flightReturn.origin.cityName }}, {{ flightReturn.origin.name }}</small>
														</div>
														<div>
															<small>{{ flightReturn.origin.countryName }}</small>
														</div>
													</b-td>
													<b-td class="text-center px-5">
														<div>
															<i class="fal fa-clock"></i>
														</div>
														<div>
															{{ getDisplayedDuration(flightReturn.departure_time, flightReturn.arrival_time) }}
														</div>
													</b-td>
													<b-td>
														<div>
															<span class="font-size-larger font-weight-bold">
																{{ moment.utc(flightReturn.arrival_time).utcOffset(flightReturn.destination.timezone).format('HH:mm') }}
															</span>
															<span class="font-size-larger text-secondary">
																{{ flightReturn.destination.code.toUpperCase() }}
															</span>
														</div>
														<div>
															<small>{{ flightReturn.destination.cityName }}, {{ flightReturn.destination.name }}</small>
														</div>
														<div>
															<small>{{ flightReturn.destination.countryName }}</small>
														</div>
													</b-td>
													<b-td>
														<div>
															{{ details.class }} / 35kg
														</div>
													</b-td>
													<b-td>
														<small>
															Earn
															{{ 2732 }} Skymiles
														</small>
													</b-td>
												</b-tr>
											</b-tbody>
										</b-table-simple>
									</section>
									<section class="passenger-details">
										<div class="mb-3">
											<span class="font-size-2rem text-primary">Passenger details</span>
										</div>
										<b-table-simple>
											<b-tbody>
												<b-tr>
													<b-td>Passenger name</b-td>
													<b-td>Passport</b-td>
													<b-td>Date of birth</b-td>
													<b-td>Frequent flyer number</b-td>
												</b-tr>
												<b-tr v-for="passenger in details.passengers" :key="passenger.name">
													<b-td>
														{{ passenger.title }} {{ passenger.firstName }} {{ passenger.lastName }}
													</b-td>
													<b-td>
														{{ passenger.passportNumber }}
													</b-td>
													<b-td>
														{{ moment(passenger.dateOfBirth).format('DD MMM YYYY') }}
													</b-td>
													<b-td>-</b-td>
												</b-tr>
											</b-tbody>
										</b-table-simple>
									</section>	
									<section class="contact-details">
										<div class="mb-3 font-size-2rem text-primary">
											Contact details
										</div>
										<b-table-simple>
											<b-tbody>
												<b-tr>
													<b-td>Passenger name</b-td>
													<b-td>Email</b-td>
												</b-tr>
												<b-tr>
													<b-td>
														{{ details.passengers[0].title }} {{ details.passengers[0].firstName }} {{ details.passengers[0].lastName }}
													</b-td>
													<b-td>
														{{ details.contact.email }}
													</b-td>
												</b-tr>
											</b-tbody>
										</b-table-simple>
									</section>
									<section class="total-price">
										<div class="mb-3 text-primary font-size-2rem">
											Total price
										</div>
										<b-table-simple>
											<b-tr>
												<b-td>Total Price per passenger</b-td>
												<b-td class="text-right">500.00 USD</b-td>
											</b-tr>
											<b-tr>
												<b-td>Number of passengers</b-td>
												<b-td class="text-right">{{ details.passengers.length }}</b-td>
											</b-tr>
											<b-tr>
												<b-td class="font-size-larger">
													Grand Total
												</b-td>
												<b-td class="text-right font-size-larger">
													1000.00 USD
												</b-td>
											</b-tr>
										</b-table-simple>
										<div class="w-100 text-center">
											<b-button class="w-50 py-3 font-size-large" variant="warning" @click="handlePayment">
												Purchase
											</b-button>
											<div class="py-3 pointer"> << Back</div>
										</div>
									</section>
								</b-card-body>
							</b-card>
						</section>
					</vue-html2pdf>	
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import moment from 'moment'
import details from './tripSummaryDetails'
import { getDisplayedDuration } from '@/helper'
import html2canvas from 'html2canvas'
import VueHtml2pdf from 'vue-html2pdf'

export default {
	components: {
		VueHtml2pdf
	},
	// props: {
	// 	details: {
	// 		type: Object,
	// 		default: () => {}
	// 	}
	// },
	data() {
		return {
			moment,
			details,
		}
	},
	methods: {
		getDisplayedDuration,
		async handlePayment() {
			this.$refs.html2Pdf.generatePdf()
			return
      try {
        // const el = this.$refs.summary
        let res = await html2canvas(document.getElementById('summary'))
        this.output = res.toDataURL()
        this.output = this.output.replace("png", "jpeg")
        let filename = "instruction.jpeg"
        let element = document.createElement("a")
        element.setAttribute("href", this.output)
        element.setAttribute("download", filename)

        element.style.display = "none"
        document.body.appendChild(element)

        element.click()

        document.body.removeChild(element)
      } catch (err) {
        console.error(err)
      }
    }
	},
	computed: {
		flightDeparture() {
			return this.details.selectedFlightDeparture
		},
		flightReturn() {
			return this.details.selectedFlightReturn
		}
	}
}
</script>

<style scoped lang="scss">
.icon-wrapper {
	position: relative;
	width: 22px;
	height: 22px;
	background: var(--secondary);
	border-radius: 50%;
	.fa-plane {
		position: absolute;
		z-index: 5;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>