<template>
	<b-form @submit.prevent="handleStepDone">
		<b-container id="passenger-info" class="py-5">
			<b-row class="mb-3">
				<b-col class="px-0 text-center" cols="12">
					<h2>Passenger Details</h2>
					<small class="text-gray">Please enter  names as they appear on passport or travel documents</small>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="8" class="px-0">
					<b-card no-body v-for="passenger, index in passengerDetails" :key="index" class="mb-3">
						<b-card-header>
							<h5>
								Passenger {{ index + 1 }}
							</h5>
						</b-card-header>
						<b-card-body>
							<b-form-group label="Title" v-slot="{ ariaDescribedby }" class="mb-3">
								<b-form-radio-group
									v-model="passenger.title"
									:aria-describedby="ariaDescribedby"
									required
								>
									<b-form-radio value="Mr">Mr</b-form-radio>
									<b-form-radio value="Mrs">Mrs</b-form-radio>
									<b-form-radio value="Ms">Ms</b-form-radio>
								</b-form-radio-group>
							</b-form-group>
							<b-form-row class="mb-3">
								<b-col cols="5">
									<b-form-input 
										required 
										v-model="passenger.firstName"
										placeholder="First Name"
									></b-form-input>
								</b-col>
								<b-col cols="5">
									<b-form-input
										required
										v-model="passenger.lastName"
										placeholder="Last Name"
									></b-form-input>
								</b-col>
							</b-form-row>
							<b-form-row class="mb-3">
								<b-col cols="5">
									<b-form-datepicker
										v-model="passenger.dateOfBirth"
										required
										:max="new Date()"
										placeholder="Date of Birth"
										:date-format-options="{
											year: 'numeric',
											month: 'short',
											day: 'numeric'
										}"
									>
									</b-form-datepicker>
								</b-col>
								<b-col cols="5">
									<v-select
										v-model="passenger.nationality"
										:options="regions"
										required
										label="countryname"
										:reduce="country => country.countryShortCode"
										placeholder="Nationality"
										:clearable="false"
									>
										<template #search="{attributes, events}">
											<input
												class="vs__search"
												:required="!passenger.nationality"
												v-bind="attributes"
												v-on="events"
											/>
										</template>
									</v-select>
								</b-col>
							</b-form-row>
							<b-form-group>
								<label>Passport details</label>
								<b-form-row>
									<b-col cols="5">
										<b-form-input required
											v-model="passenger.passportNumber"
											placeholder="Passport number"
										></b-form-input>
									</b-col>
									<b-col cols="5">
										<b-form-datepicker
											v-model="passenger.passportExpiryDate"
											required
											:min="new Date()"
											placeholder="Passport expiry date"
											:date-format-options="{
												year: 'numeric',
												month: 'short',
												day: 'numeric'
											}"
										></b-form-datepicker>
									</b-col>
								</b-form-row>
							</b-form-group>
							<b-form-group>
								<label>Travel document</label>
								<b-form-row>
									<b-col cols="5">
										<v-select v-model="passenger.travelDocumentType"
											:options="[ 'Passport' ]"
											:clearable="false"
										></v-select>
									</b-col>
									<b-col cols="5">
										<v-select
											v-model="passenger.travelDocumentCountry"
											:options="regions"
											required
											label="countryname"
											:reduce="country => country.countryShortCode"
											placeholder="Select Country"
											:clearable="false"
										>
											<template #search="{attributes, events}">
												<input
													class="vs__search"
													:required="!passenger.travelDocumentCountry"
													v-bind="attributes"
													v-on="events"
												/>
											</template>
										</v-select>
									</b-col>
								</b-form-row>
							</b-form-group>
						</b-card-body>
					</b-card>
					<b-card class="mb-3" no-body>
						<b-card-header>
							<h5>
								Contact details
							</h5>
							<small>Please provide your contact details so that we can notify you the updates on your flight</small>
						</b-card-header>
						<b-card-body>
							<b-form-group>
								<label for="">E-mail</label>
								<b-form-input placeholder="Enter your email" type="email" required v-model="contact.email"></b-form-input>
							</b-form-group>
						</b-card-body>
					</b-card>
					<b-card>
						<b-form-checkbox required>
							I have verified that the information provided matches the passport information
						</b-form-checkbox>
					</b-card>
				</b-col>
				<b-col cols="4" class="pr-0">
					<b-card no-body>
						<b-card-header class="text-center">
							Your trip review
						</b-card-header>
						<b-card-body>
							<section class="outbound-flight mb-3">
								Outbound flight
								<div class="text-center mt-3">
									<span class="dot"></span>
									{{ flightDeparture.origin.cityname }} -&gt; {{ flightDeparture.destination.cityname}}
									<span class="dot"></span>
								</div>
							</section>
							<section class="inbound-flight" v-if="flightReturn">
								Inbound flight
								<div class="text-center mt-3">
									<span class="dot"></span>
									{{ flightReturn.origin.cityname }} -&gt; {{ flightReturn.destination.cityname}}
									<span class="dot"></span>
								</div>
							</section>
						</b-card-body>
						<b-card-footer class="d-flex justify-content-between">
							<div>
								<small class="d-block">Total trip price</small>
								<small class="d-block">({{ passengerDetails.length }} passengers)</small>	
							</div>
							<div>
								{{ formatMoney(grandTotal, 0)}} VND
							</div>
						</b-card-footer>
					</b-card>
				</b-col>
			</b-row>
			<b-row align-h="center" class="mt-3">
				<b-col cols="4" class="px-0">
					<b-button class="w-100 py-2" type="submit" variant="primary">
						Continue
					</b-button>
				</b-col>
			</b-row>
		</b-container>
	</b-form>
	
</template>

<script>
import regions from '@/data/regions'
import { formatMoney } from '@/helper'
export default {
	props: {
		details: {
			type: Object,
			default: () => {}
		},
	},
	data() {
		return {
			regions,
			passengerDetails: [],
			contact: {
				email: ''
			}
		}
	},
	mounted() {
		let totalPassengers = parseInt(this.details.passengers.adults) + parseInt(this.details.passengers.children) + parseInt(this.details.passengers.babies)
		for (let i = 0; i < totalPassengers; ++i) {
			this.passengerDetails.push({
				title: '',
				firstName: '',
				lastName: '',
				dateOfBirth: '',
				nationality: '',
				nationalityId: -1,
				passportNumber: '',
				passportExpiryDate: '',
				travelDocumentType: 'Passport',
				travelDocumentCountry: ''
			})
		}
	},
	methods: {
		formatMoney,
		handleStepDone() {
			let passengerDetails = JSON.parse(JSON.stringify(this.passengerDetails))
			let contact = JSON.parse(JSON.stringify(this.contact))
			this.$emit('done', {
				passengerDetails, contact
			})
		}
	},
	computed: {
		flightDeparture() {
			return this.details.selectedFlightDeparture
		},
		flightReturn() {
			return this.details.selectedFlightReturn
		},
		pricePerAdult() {
			console.log('details', this.details)
			return this.details.class === 'Business' ? 
				(this.flightDeparture.fare_business + (this.flightReturn?.fare_business ?? 0)) : (this.flightDeparture.fare_economy + (this.flightReturn?.fare_economy ?? 0))
		},
		grandTotal() {
			return this.pricePerAdult * this.details.passengers.adults + this.pricePerAdult * this.details.passengers.children * 2 / 3
		}
	}
}
</script>

<style scoped>
.dot {
	display: inline-block;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	border: 3px solid var(--primary);
	background-color: rgba(var(--primary), 0.5);
}
</style>
