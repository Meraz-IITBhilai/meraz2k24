<script>
	import SectionHeader from "./SectionHeader.svelte";
	import Card from "./Card.svelte";
	import entries from "../data/highlights.json"

	let heading = "Highlights";
</script>

<div class="highlights-main-container">
	<SectionHeader name={heading} />
	<div class="highlights-content-holder">
		{#each entries as entry}
				<Card data={entry} width={"400px"}/>
		{/each}
	</div>
</div>

<style lang="scss">
	.highlights-main-container{
		margin-top: 5em;
		margin-bottom: 5em;
		font-family: 'BluuNext', "Yusei Magic";
		font-size: 24px;
		text-align: center;
	}
	.highlights-content-holder{
		position: relative;
		margin-top: 2.5em;
		width: 100%;
		max-width: 100vw;

		padding:0.2em;
		display:flex;
		flex-wrap: wrap;
		gap: 2em 0.2em;
		margin: 1em;
		justify-content: space-evenly;
	}
</style>
