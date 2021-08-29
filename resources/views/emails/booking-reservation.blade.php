@php
	$payment = json_decode($reservation->payment, true);
	$name = $payment["charges"]["data"][0]["billing_details"]["name"];
@endphp
<div>
	<p>
		Dear {{ $name }},
	</p>
	<p>
		Thank you for booking with Avia Airways.
	</p>
</div>