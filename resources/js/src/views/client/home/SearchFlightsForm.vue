<template>
	<div>
		<b-form class="px-3">
			<div class="d-flex justify-content-between">
				<div style="width: 190px">
					<b-form-group>
						<label>From</label>
						<v-select></v-select>
					</b-form-group>
				</div>
				<div style="width: 190px">
					<b-form-group>
						<label>To</label>
						<v-select></v-select>
					</b-form-group>
				</div>
				<div style="width: 110px">
					<b-form-group>
						<label>Trip</label>
						<v-select></v-select>
					</b-form-group>
				</div>
				<b-row no-gutters class="flex-fill">
					<b-col>
						<b-form-group>
							<label>Departure</label>
							<b-form-datepicker
									:date-format-options="{
											year: 'numeric',
											month: 'short',
											day: 'numeric'
									}"
							></b-form-datepicker>
						</b-form-group>
					</b-col>
					<b-col>
						<b-form-group>
							<label>Return</label>
							<b-form-datepicker
									:date-format-options="{
											year: 'numeric',
											month: 'short',
											day: 'numeric'
									}"
							></b-form-datepicker>
						</b-form-group>
					</b-col>
				</b-row>
				<div style="width: 110px">
					<b-form-group>
						<label>Passengers</label>
						<v-select></v-select>
					</b-form-group>
				</div>
				<div style="width: 110px">
					<b-form-group>
						<label>Class</label>
						<v-select></v-select>
					</b-form-group>
				</div>
			</div>
			<b-row no-gutters>
					<b-col class="text-right">
							<b-button variant="primary">
									Search
							</b-button>
					</b-col>
			</b-row>
		</b-form>
	</div>	
</template>

<script>
export default {};
</script>

<style scoped>
label {
	font-size: 0.8rem;
}
</style>
