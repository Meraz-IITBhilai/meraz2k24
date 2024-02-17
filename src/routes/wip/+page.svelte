<script>
import SectionHeader from "$lib/components/SectionHeader.svelte";
import { collapsingNavbar } from '$lib/stores';

$collapsingNavbar = false;

</script>
<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Press Start 2P' rel='stylesheet'>
</svelte:head>

	<SectionHeader name="Work in progress"/>
	<img src="assets/construction.svg" style="height: 60vh; width: 100%"/>

<style lang="scss">
	.hero {
		width: 100%;
		height: 100vh;
		background-image: url("assets/hero_bg.png");
		background-size: cover;
		background-position: center;
		position: relative;
		text-align: center;
		scroll-snap-align: start;
	}
</style>
