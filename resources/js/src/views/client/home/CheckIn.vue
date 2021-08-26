<template>
	<div class="p-3 px-5">
		<label>
			Check in for your flight at your convenience (this feature is coming soon)
		</label>
		<b-input-group>
			<b-form-input placeholder="Booking reference" class="py-4"></b-form-input>
			<b-form-input placeholder="Last Name" class="py-4"></b-form-input>

			<template #append>
				<b-button variant="warning">Check-in</b-button>
			</template>
		</b-input-group>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>