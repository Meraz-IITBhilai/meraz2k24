<script>
	import Hero from "$lib/components/Hero.svelte"
	import AboutSection from "$lib/components/AboutSection.svelte";
	import HighlightsSection from "$lib/components/HighlightsSection.svelte";
	import Card from "$lib/components/Card.svelte"
</script>

<svelte:head>
	<title>Meraz '22</title>
</svelte:head>

<Hero/>
<AboutSection/>
<HighlightsSection />

<style lang="scss">
	.mainpage-body{
		display: block;
	}
</style>
