<script>
	import SectionHeader from "./SectionHeader.svelte";

	let heading = "About Meraz"
</script>

<div class="about-main-container">
	<SectionHeader bind:name={heading}/>
	<div class="about-content-holder">
		<div class="container-1">
		</div>
		<div class="container-2">
		</div>
		<div class="about-content container-3">
			The theme of Meraz 4.0 is ‘An Etherial Matrix’, which means a place or
			state of perfect happiness derived from a broad and diverse range of
			sources. This theme reflects the vision and mission of Meraz 4.0, which
			is to celebrate the diversity and This theme reflects the vision and
			mission of Meraz 4.0, which is to celebrate the diversity and 
		</div>
	</div>
</div>

<style lang="scss">
	.about-main-container{
		margin-top: 5em;
		margin-bottom: 5em;
		font-family: BluuNext, "Yusei Magic";
		font-size: 24px;
		text-align: center;
	}
	.about-content-holder{
		position: relative;
		margin-top: 2.5em;
		left: 50%;
		transform: translateX(-50%);
		min-width: 20em;
		width: 60%;
	}
	.container-1{
		position: absolute;
		height: 100%;
		width: 100%;
		left: -10px;
		top: -6px;
		border: 1px solid var(--primary);
	}
	.container-2{
		position: absolute;
		height: 100%;
		width: 100%;
		left: -5px;
		top: +6px;
		border: 1px solid var(--primary);
	}
	.container-3{
		position: relative;
		border: 1px solid var(--primary);
	}
	.about-content{
		text-align: center;
		padding: 1em 2em;
	}
</style>
