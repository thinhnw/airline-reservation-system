<template>
	<div id="trip-summary" class="py-5">
		<b-container class="px-0">
			<b-row>
				<b-col class="px-0">
					<b-card no-body>
						<b-card-header>
							Trip Summary
						</b-card-header>
						<b-card-body ref="summary">
							<TripSummaryPrintable :details="details" />
						</b-card-body>
						<div class="w-100 text-center">
							<b-button class="w-50 py-3 font-size-large" variant="warning" @click="makeReservation">
								Confirm Booking
							</b-button>
							<div class="py-3 pointer" @click="$emit('back')"><< Back</div>
						</div>
					</b-card>
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
import TripSummaryPrintable from './TripSummaryPrintable.vue'
import axios from '@/axios'
import { mapGetters } from 'vuex'
export default {
	components: {
		TripSummaryPrintable
	},
	props: {
		// details: {
		// 	type: Object,
		// 	default: () => {}
		// }
	},
	data() {
		return {
			moment,
			details,
		}
	},
	methods: {
		getDisplayedDuration,
		async makeReservation() {
			// this.$refs.html2Pdf.generatePdf()
			try {
        const el = this.$refs.summary
        let res = await html2canvas(el)
        let output = res.toDataURL()
        // this.output = this.output.replace("png", "jpeg")
        let filename = "e-ticket.png"
        // let element = document.createElement("a")
				// console.log(output)
        // element.setAttribute("href", output)
        // element.setAttribute("download", filename)

        // element.style.display = "none"
        // document.body.appendChild(element)

        // element.click()

        // document.body.removeChild(element)
				res = await axios.post('/api/reservations', {
					e_ticket: output,
					details: this.details,
					price: 500
				})
				this.$router.push('profile')
      } catch (err) {
        console.error(err)
      }
    },
		// hasGenerated(e) {
		// 	console.log(e)
		// }
	},
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo'
		}),
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