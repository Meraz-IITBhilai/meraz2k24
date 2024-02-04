<script>
	import jsonData from './sponsorship.json';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import CosponsorsCard from '$lib/components/CosponsorsCard.svelte';
	import SponsorCard from '$lib/components/SponsorCard.svelte';
	export let padding;

	let heading = 'Sponsors';
	let titleSponsor = 'TITLE SPONSOR';
	let titleCoSponsors = 'CO SPONSORS';

	let titleSponsorData = jsonData['title-sponsor'];
	let coSponsorsData = jsonData['co-sponsors'];
	let sponsorsData = jsonData.sponsors;

</script>

<svelte:head>
	<title>Sponsors | Meraz'24</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="sponsor-main-container">
	<div class="sponsor-heading">
		<SectionHeader bind:name={heading} />
	</div>

	<div class="title-sponsor-container">
		<div class="sub-title">{titleSponsor}</div>
		<div class="card-img-container">
			<img
				src="/assets/sponsors/sponsor_frame.svg"
				alt="sponsor contianer"
				class="frame-container"
			/>
			<div class="image-container">
				<img class="sponsor-image" src={`/assets/sponsors/${titleSponsorData.name}.png`} alt="not found" />
			</div>
		</div>
		<div class="sponsor-name">{titleSponsorData.name}</div>
	</div>

	<div class="coSponsor-container-title">
		<div class="sub-title">
			{titleCoSponsors}
		</div>
		<div class="coSponsor-container">
			{#each coSponsorsData as coSponsor}
				<CosponsorsCard bind:sponsorName={coSponsor.name}/>
			{/each}
		</div>
	</div>

	<div class="sponsors-container">
		<div class="sub-title">SPONSORS</div>
		<div class="sponsors-grid-container">
			{#each sponsorsData as sponsorObject}
				<SponsorCard bind:sponsorName={sponsorObject.name} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.sponsor-main-container {
		background-image: url(/assets/sponsors/sponsors_background_image.png);
		font-family: BluuNext, 'Yusei Magic';
		font-size: 1.5rem;
		text-align: center;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-size: cover;
		padding-bottom: 9.563rem;
		background-position: center;
	}

	.card-img-container {
		margin: 1rem;
		position: relative;
	}


	.image-container {
		position: absolute;
		top: 5%;
		left: 5%;
		bottom: 2%;
		right: 5%;
	}

	.sponsor-image {
		position: absolute;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}


	.sponsor-heading {
		margin-top: 6.25rem;
		color: #ffbe4a;
		font-family: BluuNext, 'Yusei Magic';
	}

	.sub-title {
		margin-top: 3.188rem;
		margin-bottom: 2.25rem;
		font-family: 'Yusei Magic', BluuNext;
		font-size: 2rem;
		color: #ffbe4a;
		border-bottom: 0.125px solid #ffbe4a;
		display: inline-block;
		align-content: center;
	}

	.frame-container {
		width: 32.75rem;
		height: 22.38rem;
	}

	.title-sponsor-container {
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1%;
	}

	.coSponsor-container {
		margin-top: 3.125rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: fit-content;
	}

	.sponsors-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.875rem;
		position: relative;
	}

	.sponsors-grid-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		//gap: 5.625rem;
		grid-row-gap: 1.625rem;
		grid-column-gap: 11.25rem;
		position: relative;
	}

	@media (max-width: 1100px) {
		.coSponsor-container {
			flex-direction: column;
		}
	}

	@media (max-width: 1640px) {
		.sponsors-grid-container {
			grid-template-columns: repeat(2, 1fr);
			grid-row-gap: 1.625rem;
			grid-column-gap: 7.25rem;
		}
	}

	@media (max-width: 950px) {
		.sponsors-grid-container {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.sponsor-name {
		font-size: 2rem;
		margin: 0.5rem;
		margin-top: 1.5rem;
		font-family: 'Yusei Magic', BluuNext;
	}

	@media (max-width: 400px) {
		.frame-container {
			width: 20.75rem;
			height: 14.17rem;
		}
	}
</style>
