<script>
	export let sponsorName = '';
</script>

<div class="card-container">
	<div class="card-img-container">
		<img class="frame-container" src="/assets/sponsors/sponsor_frame.svg" alt="sponsor contianer" />
		<div class="image-container">
			<img class="sponsor-image" src={`/assets/sponsors/${sponsorName}.jpg`} alt="not found" />
		</div>
	</div>
	<div class="sponsor-name">{sponsorName}</div>
</div>

<style lang="scss">
	.card-container {
		display: flex;
		flex-direction: column;
		padding: 1.25rem;
		align-items: center;
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
		width: 25.05rem;
		height: 15.5rem;
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
			width: 15.05rem;
			height: 10.57rem;
		}

		.sponsor-name {
			font-size: 1.5rem;
			margin: 0.3rem;
			margin-top: 1rem;
			font-family: 'Yusei Magic', BluuNext;
		}

		.image-container {
			top: 8%;
			left: 6%;
			bottom: 5%;
			right: 6%;
		}
	}
</style>
