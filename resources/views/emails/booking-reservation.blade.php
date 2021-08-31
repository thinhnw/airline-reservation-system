@php
	$payment = json_decode($reservation->payment, true);
	$name = $payment["charges"]["data"][0]["billing_details"]["name"];
@endphp
<div>
		Dear {{ $name }},
	<p>
		Thank you for booking with Avia Airways.
	</p>
</div>