<script>
	import sponsorshipData from './sponsorship.json';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import SponsorCard from '$lib/components/SponsorCard.svelte';

	let titleSponsorData = sponsorshipData['title-sponsor'];
	let coSponsorsData = sponsorshipData['co-sponsors'];
	let sponsorsData = sponsorshipData.sponsors;

	let mainSponsorCardWidth = 32.75;
	let mainSponsorCardHeight = 23;

	let coSponsorCardWidth = 29.5;
	let coSponsorCardHeight = 18.5;

	let sponsorCardWidth = 25;
	let sponsorCardHeight = 15;
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
		<SectionHeader name="Sponsors" />
	</div>

	<div class="title-sponsor-container">
		<div class="sub-title">
			TITLE SPONSOR
		</div>
		<div class="titleSponsor-grid-container">
			<SponsorCard
				bind:frameContainerWidth={mainSponsorCardWidth}
				bind:frameContainerHeight={mainSponsorCardHeight}
				bind:sponsorName={titleSponsorData.name}
				bind:logoName={titleSponsorData.logo}
			/>
		</div>
	</div>

	<div class="coSponsor-container">
		<div class="sub-title">
			CO SPONSORS
		</div>
		<div class="coSponsor-grid-container">
			{#each coSponsorsData as coSponsor}
				<SponsorCard
					bind:frameContainerWidth={coSponsorCardWidth}
					bind:frameContainerHeight={coSponsorCardHeight}
					bind:sponsorName={coSponsor.name}
					bind:logoName={coSponsor.logo}
				/>
			{/each}
		</div>
	</div>

	<div class="sponsors-container">
		<div class="sub-title">SPONSORS</div>
		<div class="sponsors-grid-container">
			{#each sponsorsData as sponsorObject}
				<SponsorCard
					bind:frameContainerWidth={sponsorCardWidth}
					bind:frameContainerHeight={sponsorCardHeight}
					bind:sponsorName={sponsorObject.name}
					bind:logoName={sponsorObject.logo}
				/>
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

	.title-sponsor-container {
		display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1%;
	}

	.coSponsor-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.875rem;
		position: relative;
		margin-bottom: 3.625rem;
	}

	.sponsors-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.875rem;
		position: relative;
	}

	.titleSponsor-grid-container{
		position: relative;
	}

	.sponsors-grid-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-row-gap: 1.625rem;
		grid-column-gap: 11.25rem;
		position: relative;
	}

	.coSponsor-grid-container {
		margin-top: 3.125rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		position: relative;
		grid-row-gap: 1.625rem;
		grid-column-gap: 11.25rem;
	}

	@media (max-width: 1100px) {
		.coSponsor-grid-container {
			grid-template-columns: repeat(1, 1fr);
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

</style>
