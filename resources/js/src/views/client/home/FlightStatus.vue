<template>
	<div class="p-3 px-5">
		<label>
			Manage your upcoming trip (this feature is coming soon)
		</label>
		<b-input-group>
			<b-form-input placeholder="Flight number" class="py-4"></b-form-input>
			<b-form-input placeholder="From" class="py-4"></b-form-input>
			<b-form-input placeholder="To" class="py-4"></b-form-input>
			<b-form-select :options="[]" class="py-4"></b-form-select>

			<template #append>
				<b-button variant="warning">Search flights</b-button>
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