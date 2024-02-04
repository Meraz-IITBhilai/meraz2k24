<script>
	export let sponsorName = '';
</script>

<div class="card-container">
	<div class="card-img-container">
		<img class="frame-container" src="/assets/sponsors/sponsor_frame.svg" alt="sponsor image" />
		<div class="image-container">
			<img class="sponsor-image" src={`/assets/sponsors/${sponsorName}.jpg`} />
		</div>
	</div>
	<div class="sponsor-name">{sponsorName}</div>
</div>

<style>
	.card-container {
		display: flex;
		flex-direction: column;
		margin-right: 5.625rem;
		margin-left: 5.625rem;
		align-items: center;
		margin-bottom: 3.625rem;
	}

	.card-img-container:hover {
		transform: scale(1.1); 
	}

	.card-img-container {
		margin: 1rem;
		position: relative;
		transition: all 0.3s ease-in-out; 
	}

	.frame-container {
		width: 29.45rem;
		height: 18.5rem;
	}

	.image-container {
		position: absolute;
		top: 15%;
		left: 10%;
		bottom: 12%;
		right: 10%;
	}

	.sponsor-image {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.sponsor-name {
		font-size: 2rem;
		margin: 0.5rem;
		margin-top: 1.5rem;
		font-family: 'Yusei Magic', BluuNext;
	}

	@media (max-width: 400px) {
		.frame-container {
			width: 19.45rem;
			height: 11.88rem;
		}

		.sponsor-name {
			font-size: 1.8rem;
			margin: 0.3rem;
			margin-top: 1rem;
			font-family: 'Yusei Magic', BluuNext;
		}
	}
</style>
