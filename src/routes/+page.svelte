<script>
	import Hero from "$lib/components/Hero.svelte"
	import AboutSection from "$lib/components/AboutSection.svelte";
	import HighlightsSection from "$lib/components/HighlightsSection.svelte";
	import AftermovieSection from "$lib/components/AftermovieSection.svelte";
	import SponsorsSection from  "$lib/components/SponsorsSection.svelte";
	import { collapsingNavbar } from '$lib/stores';
	let meraz2022 = "ztJsklsTg8M";
	let vhead2022 = "Aftermovie @ Meraz'22";
	$collapsingNavbar = true;
</script>

<svelte:head>
	<title>Home | Meraz'24</title>
</svelte:head>

<Hero/>
<AboutSection/>
<HighlightsSection />
<AftermovieSection bind:vid={meraz2022}  bind:vhead={vhead2022}/>
<SponsorsSection />

<style lang="scss">
	.mainpage-body{
		display: block;
	}
</style>
