<script>
	import Hero from "$lib/components/Hero.svelte"
	import AboutSection from "$lib/components/AboutSection.svelte";
	import HighlightsSection from "$lib/components/HighlightsSection.svelte";
	import AftermovieSection from "$lib/components/AftermovieSection.svelte";
	import SponsorsSection from  "$lib/components/SponsorsSection.svelte";
</script>

<svelte:head>
	<title>Meraz '22</title>
</svelte:head>

<Hero/>
<AboutSection/>
<HighlightsSection />
<AftermovieSection />
<SponsorsSection />

<style lang="scss">
	.mainpage-body{
		display: block;
	}
</style>
