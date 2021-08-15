<template>
	<div id="trip-summary" class="py-5">
		<b-container>
			<b-row>
				<b-col>
					<b-card no-body>
						<b-card-header>
							Trip Summary
						</b-card-header>
						<b-card-body ref="summary">
							<TripSummaryPrintable :details="details" />
						</b-card-body>
						<div class="w-100 text-center">
							<b-button class="w-50 py-3 font-size-large" variant="warning" @click="handlePayment">
								Purchase
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
// import details from './tripSummaryDetails'
import { getDisplayedDuration } from '@/helper'
import html2canvas from 'html2canvas'
import TripSummaryPrintable from './TripSummaryPrintable.vue'

export default {
	components: {
		TripSummaryPrintable
	},
	props: {
		details: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			moment,
			// details,
		}
	},
	methods: {
		getDisplayedDuration,
		async handlePayment() {
			// this.$refs.html2Pdf.generatePdf()
			try {
        const el = this.$refs.summary
        let res = await html2canvas(el)
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
    },
		// hasGenerated(e) {
		// 	console.log(e)
		// }
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