<template>
	<div class="py-5">
		<b-container>
			<b-row>
				<b-col class="text-center">
					<h2 class="my-5">Top Destinations</h2>
				</b-col>
			</b-row>
			<b-row class="mb-4">
				<b-col cols="6">
					<b-card 
						overlay
						img-src="/images/zagreb.jpg" img-alt="Card image" 
						text-variant="white"
						title="Zagreb"
						class="img-1"
					></b-card>
				</b-col>
				<b-col cols="3">
					<b-card overlay img-src="/images/brussel.jpg" img-alt="Card image" title="Brussels"
						class="img-4th mb-4"
					></b-card>
					<b-card img-src="/images/milan.jpg" img-alt="Card image" title="Milan" overlay
						class="img-4th"
					></b-card>
				</b-col>
				<b-col cols="3">
					<b-card img-src="/images/kilimanjaro.jpg" img-alt="Card image" title="Kilimanjaro" overlay
						class="img-4th mb-4"
					></b-card>
					<b-card img-src="/images/paris.jpg" img-alt="Card image" title="Paris" overlay
						class="img-4th"
					></b-card>
				</b-col>
			</b-row>
			<b-row class="mt-3">
				<b-col>
					<b-card img-src="/images/mashad.jpg" img-alt="Card image" img-top overlay title="Mashhad" class="img-2nd">
					</b-card>
				</b-col>
				<b-col>
					<b-card img-src="/images/rabat.jpg" img-alt="Card image" overlay title="Rabat" class="img-2nd">
					</b-card>
				</b-col>
			</b-row>
		</b-container>
		
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.card {
	overflow: hidden;
	text-align: center;
	color: white;
	position: relative;
	&.img-1 {
		height: 404px;
		.position-relative {
			height: 100%;
			img {
				height: 100%;
			}
		}
		.card-title {
			font-size: 2rem;
		}
	}
	&.img-2nd{
		height: 250px;
		.position-relative {
			height: 100%;
			img {
				height: 100%;
			}
		}
		.card-title {
			font-size: 2rem;
		}
	}
	&.img-4th{
		height: 190px;
		.position-relative {
			height: 100%;
			img {
				height: 100%;
			}
		}
		.card-title {
			font-size: 1.5rem;
		}
	}
	.card-title {
		margin: 0 !important;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
		&:after {
			content: " ";
			display: block;
			height: 2px;
			width: 40px;
			background: white;
			position: relative;
			left: 50%;
			top: 10px;
			transform: translateX(-50%);
		}
	}
	&:hover {
		cursor: pointer;
		.card-img {
			transform: scale(1.1);
			transition: all 0.3s;
		}
	}
}

</style>