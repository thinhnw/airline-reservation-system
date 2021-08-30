<template>
	<div class="p-3 px-5 flight-status">
		<label>
			Get your flight details
		</label>
		<b-form @submit.prevent="submit">
			<b-row no-gutters>
				<b-col cols="2">
					<b-form-input size="sm" v-model="flightNumber" placeholder="Flight number" class="flight-number py-3" required></b-form-input>
				</b-col>
				<b-col cols="3">
					<v-select
						v-model="cityFrom"
						:options="airports"
						required
						label="label"
						placeholder="From Airport/City"
						:clearable="false"
						:filterBy="airportFilterBy"
						class="from-city-select"
					>
						<template #search="{attributes, events}">
							<input
								class="vs__search"
								:required="!cityFrom"
								v-bind="attributes"
								v-on="events"
							/>
						</template>
					</v-select>
				</b-col>
				<b-col cols="3">
					<v-select
						v-model="cityTo"
						:options="airports"
						required
						label="label"
						placeholder="From Airport/City"
						:clearable="false"
						:filterBy="airportFilterBy"
						class="from-city-select"
					>
						<template #search="{attributes, events}">
							<input
								class="vs__search"
								:required="!cityTo"
								v-bind="attributes"
								v-on="events"
							/>
						</template>
					</v-select>
				</b-col>
				<b-col cols="3">
					<b-form-datepicker 
						class="rounded-0" 
						v-model="date" 
						required
						:min="new Date()"
					>
					</b-form-datepicker>
				</b-col>
				<b-col cols="1">
					<b-button type="submit" variant="primary" class="search-btn">Search</b-button>
				</b-col>
			</b-row>
			<b-row v-if="error">
				<b-col>
					<small class="text-danger">{{ error }}</small>
				</b-col>
			</b-row>
		</b-form>
	</div>
</template>

<script>
import axios from '@/axios'
export default {
	props: {
		airports: Array
	},
	data() {
		return {
			flightNumber: '',
			cityFrom: '',
			cityTo: '',
			date: '',
			error : ''
		}
	},
	methods: {
		airportFilterBy(option, label, search) {
			return (label || '').indexOf(search) > -1
		},
		validate() {
			if (!this.flightNumber) return false
			if (!this.cityTo) return false
			if (!this.cityFrom) return false
			if (!this.date) return false
			this.error = ""
			return true
		},
		async submit() {
			if (!this.validate()) {
				this.error = "Please fill out your flight information"
				return
			}
			try {
				let filter = {
					flightNumber: this.flightNumber,
					cityFrom: this.cityFrom,
					cityTo: this.cityTo,
					date: this.date
				}
				let res = await axios.get(`/api/flights/details?filter=${JSON.stringify(filter)}`)	
				this.$emit('query-flight-details', res.data.flight)
			} catch (error) {
				console.log(error)	
				this.error = error.message
			}
		}
	}
}
</script>

<style scoped lang="scss">
.flight-number {
		border-top-right-radius: 0 !important;
		border-bottom-right-radius: 0 !important;
		height: 35px !important;
}
.from-city-select {
	&::v-deep .vs__dropdown-toggle {
		border-radius: 0px;
		border-left: 0
	}
}
.search-btn {
	height: 35px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
</style>