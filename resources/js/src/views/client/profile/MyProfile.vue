<template>
	<div class="p-4"> 
		<div class="d-flex align-items-center justify-content-between mb-5">
			<div class="d-flex align-items-center">
				<b-avatar variant="secondary" size="lg" class="mr-3"></b-avatar>
				<div class="text-center">
					<h4>
						{{ userInfo.first_name }} {{ userInfo.last_name }}
					</h4>
				</div>
			</div>
			<div>
				<i class="fas fa-star text-warning"></i>
				Your skymiles: {{ userInfo.skymiles }}
			</div>
		</div>
		<div class="border-bottom mb-3">
			<h5>Contact Informations</h5>
			<b-row>
				<b-col>
					<label for="">Email</label>
					<p>{{ userInfo.email }}</p>
				</b-col>
				<b-col>
					<label for="">Phone Number</label>
					<p>{{ userInfo.tel }}</p>
				</b-col>
			</b-row>
		</div>
		<div>
			<h5>Address</h5>
			<b-row>
				<b-col>
					<label for="">Street</label>
				</b-col>
				<b-col>
					<label for="">City</label>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<label for="">Country</label>
				</b-col>
				<b-col>
					<label for="">Postal Code</label>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo'
		})
	}
}
</script>

<style>

</style>