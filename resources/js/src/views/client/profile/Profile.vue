<template>
	<div class="user-profile">
		<b-container class="py-5">
			<b-row>
				<b-col>
					<b-card no-body>
						<b-tabs pills vertical nav-class="tabs p-3">
							<b-tab title="My Profile" title-link-class="">
								<MyProfile />
							</b-tab>
							<b-tab title="My Reservations" title-link-class="">
								<MyFlights />
							</b-tab>
						</b-tabs>
					</b-card>
				</b-col>
			</b-row>
		</b-container>	
	</div>
</template>

<script>
import MyFlights from './MyFlights'
import MyProfile from './MyProfile'
export default {
	components: {
		MyFlights, MyProfile
	}
}
</script>

<style lang="scss" scoped>
.user-profile {
	padding-top: 72px;
	.tabs {
		&::v-deep .nav {
			border-top-left-radius: 10px !important;
			border-bottom-left-radius: 10px !important;
		}
		&::v-deep .col-auto {
			border-right: 1px solid #eee;
		}
	}
}
</style>
