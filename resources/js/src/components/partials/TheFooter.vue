<template>
	<footer id="footer" :style="{ height: isMinimal ? '73px' : '626px' }">
		<section class="subscription" v-if="!isMinimal" >
			<b-container>
				<b-row align-h="center">
					<b-col cols="10" class="d-flex p-5 align-items-center justify-content-between">
						<div class="d-flex">
							<img src="/images/ico_email_subscribe.svg" alt="">
							<div class="ml-4">
								<h4>Get Updates & More</h4>
								<p class="text-secondary">Thoughtful thoughts to your inbox</p>
							</div>
						</div>
						<div>
							<b-input-group>
								<b-form-input placeholder="Your email" class="p-4"></b-form-input>
								<template #append>
									<b-button variant="primary" class="px-3">SUBSCRIBE</b-button>
								</template>
							</b-input-group>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</section>
		<b-container v-if="!isMinimal">
			<b-row class="py-5">
				<b-col class="pr-5">
					CONTACT US
					<hr>
					<ul>
						<li>
							<label for="">Call Us</label>
							<div>+ 00 222 44 5678</div>
						</li>
						<li>
							<label for="">Our Email</label>
							<div>support@aviaairaways.com</div>
						</li>
						<li>
							<label for="">Follow Us</label>
							<div class="d-flex">
								<i class="fab fa-facebook-square mr-3 font-size-large"></i>
							</div>
						</li>
					</ul>
				</b-col>
				<b-col class="pr-5">
					COMPANY
					<hr>
					<ul>
						<li>About Us</li>
						<li>Community Blog</li>
						<li>Rewards</li>
						<li>Work with Us</li>
						<li>Meet the Team</li>
					</ul>
				</b-col>
				<b-col class="pr-5">
					Support
					<hr>
					<ul>
						<li>Account</li>
						<li>Legal</li>
						<li>Contact</li>
						<li>Affiliate Program</li>
						<li>Privacy Policy</li>
					</ul>
				</b-col>
				<b-col class="pr-5">
					SETTINGS
					<hr>
					<b-form-group>
						<label for="" class="d-block">Currencies</label>
						<b-form-select :options="['VND']" :value="'VND'" class="w-50">
						</b-form-select>
					</b-form-group>
				</b-col>
			</b-row>
		</b-container>
		<section class="py-4 border-top text-center">Copyright © 2021 by Avia Airways</section>
	</footer>
</template>

<script>
export default {
	props: {
		isMinimal: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<style lang="scss" scoped>
#footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0;
	.subscription {
		background: #F5F5F5;
	}
	ul {
		list-style: none;
		li {
			margin-top: 20px;
			cursor: pointer;
			&:hover {
				color: var(--secondary);
			}
		}
	}
}
</style>