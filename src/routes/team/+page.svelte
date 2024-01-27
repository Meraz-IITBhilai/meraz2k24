<script>
		import SectionHeader from "$lib/components/SectionHeader.svelte";
	let heading = "Our Team"
</script>

<svelte:head>
	<title>ABOUT | Meraz '22</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
</svelte:head>

<div class="main-container">
	<SectionHeader bind:name={heading} />
</div>

<style lang="scss">
</style>
