<template>
	<div style="max-width: 360px; min-width: 360px" class="px-0 border pl-1">
		<b-row class="w-100 mx-0">
			<b-col class="text-center py-2">
				<div class="border">
					BUSINESS
				</div>
			</b-col>
		</b-row>
		<div v-for="row in businessSeatMap.length" :key="'business' + row"> 
			<b-row no-gutters v-if="[1, 7].includes(row)">
				<b-col cols="3" class="py-2 pr-1"> 
					<div class="bg-secondary text-white rounded">
						&lt;&lt;EXIT
					</div>
				</b-col>
				<b-col></b-col>
				<b-col cols="4" class="text-center py-2 pr-1">
					<div class="border rounded">
						Restroom
						<i class="fas fa-restroom"></i>
					</div>
				</b-col>
				<b-col></b-col>
				<b-col cols="3" class=" py-2 pr-1">
					<div class="bg-secondary text-right text-white rounded">
						EXIT&gt;&gt;
					</div>
				</b-col>
			</b-row>
			<b-row no-gutters class="seat-row">
				<span class="seat-row--number">{{ row }}</span>
				<b-col v-for="col in 12" :key="col" cols="1">
					<div v-if="businessAlphabet[(row - 1) % 2][col - 1] != ''">
						<b-form-radio 
							size="sm" 
							button-variant="outline-primary" 
							button 
							v-model="selectedSeat" 
							:value="'Business ' + row + ' ' + businessAlphabet[(row - 1) % 2][col - 1]"
							class="seat"
							:disabled="
								seatClass === 'Economy' ||
								businessSeatMap[row - 1][businessCol(businessAlphabet[(row - 1) % 2][col - 1])] === true ||
								(businessSeatMap[row - 1][businessCol(businessAlphabet[(row - 1) % 2][col - 1])] !== false && businessSeatMap[row - 1][businessCol(businessAlphabet[(row - 1) % 2][col - 1])] !== passengerIndex)
							"
						>
							{{ businessAlphabet[(row - 1) % 2][col - 1] }}
						</b-form-radio>
					</div>
				</b-col>	
			</b-row>	
		</div>
		<b-row class="w-100 mx-0">
			<b-col class="text-center py-2">
				<div class="border">
				ECONOMY
				</div>
			</b-col>
		</b-row>
		<div v-for="row in economySeatMap.length" :key="'economy' + row">
			<b-row no-gutters class="seat-row">
				<span class="seat-row--number">{{ row }}</span>
				<b-col v-for="col in 12" :key="col" cols="1">
					<div v-if="economyAlphabet[col - 1] != ''">
						<b-form-radio 
							size="sm" 
							button-variant="outline-primary" 
							button 
							v-model="selectedSeat" 
							:value="'Economy ' + row + ' ' + economyAlphabet[col - 1]"
							class="seat"
							:disabled="
								seatClass === 'Business' ||
								economySeatMap[row - 1][economyCol(economyAlphabet[col - 1])] === true ||
								(economySeatMap[row - 1][economyCol(economyAlphabet[col - 1])] !== false  && economySeatMap[row - 1][economyCol(economyAlphabet[col - 1])] != passengerIndex) 
							"
						>
							{{ economyAlphabet[col - 1] }}
						</b-form-radio>
					</div>
				</b-col>	
			</b-row>	
			<b-row no-gutters v-if="[10, 20, 30].includes(row)">
				<b-col cols="3" class="py-2 pr-1"> 
					<div class="bg-secondary text-white rounded">
						&lt;&lt;EXIT
					</div>
				</b-col>
				<b-col></b-col>
				<b-col cols="4" class="text-center py-2 pr-1">
					<div class="border rounded">
						Restroom
						<i class="fas fa-restroom"></i>
					</div>
				</b-col>
				<b-col></b-col>
				<b-col cols="3" class=" py-2 pr-1">
					<div class="bg-secondary text-right text-white rounded">
						EXIT&gt;&gt;
					</div>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
const businessAlphabet = [
	[ 'A', '', '', '', '', 'E', 'F', '', '', '', '', 'K'], 
	[ '', 'B', '', '','D', '', '', 'G', '', '', 'J', '']
]
const economyAlphabet = ['A', 'B', 'C', '', 'D', 'E', 'F', 'G', '', 'H', 'J', 'K']
export default {
	props: {
		passengerIndex: { 
			type: Number,
			default: 0
		},
		seatClass: {
			type: String,
			default: 'Business'
		},
		businessSeatMap: Array,
		economySeatMap: Array
	},
	data() {
		return {
			businessAlphabet,
			economyAlphabet,
			selectedSeat: '',
		}
	},
	methods: {
		businessCol(letter) {
			switch (letter) {
				case 'A':
				case 'B': return 0
				case 'D':
				case 'E': return 1
				case 'F':
				case 'G': return 2
				case 'J':
				case 'K': return 3
				default: return -1
			}
		},
		economyCol(letter) {

			switch (letter) {
				case 'A': return 0
				case 'B': return 1
				case 'C': return 2
				case 'D': return 3
				case 'E': return 4
				case 'F': return 5 
				case 'G': return 6
				case 'H': return 7
				case 'J': return 8
				case 'K': return 9
				default: return -1
			}
		}
	},
	watch: {
		selectedSeat(value) {
			console.log(value)
			this.$emit('selected', value)
		}
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>
.seat {
	width: 100% !important;
	&::v-deep .btn {
		width: 25px !important;
		height: 25px !important;
		font-size: 0.8rem;
	}
}
.seat-row {
	position: relative;
	.seat-row--number {
		position: absolute;
		display: block;
		width: 30px;
		text-align: center;
		left: -30px;
		top: 6px;
		font-size: 12px;
	}
}
</style>