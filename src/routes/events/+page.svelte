<script>
	import 'iconify-icon'

	import { collapsingNavbar } from '$lib/stores';
	import { onMount } from "svelte";

	import ScrollingItemsView from '$lib/components/ScrollingItemsView.svelte';
	import SectionHeader from "../../lib/components/SectionHeader.svelte";

	import culturals from '$lib/data/culturals.json';
	import scitech from '$lib/data/scitech.json';
	import pronite from '$lib/data/pronite.json';
	import informal from '$lib/data/informal.json';

	$collapsingNavbar = false;

/*onMount(() => {
		document.querySelectorAll('a[href*="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();

				const targetId = this.getAttribute('href').substring(1); // Get the target element id without the #
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: 'smooth'
					});
				}
			});
		});
});*/
	let events = [pronite, scitech, culturals, informal];
</script>
<svelte:head>
	<title>Events | Meraz'24</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap" rel="stylesheet">
</svelte:head>

<div class="main-container">
	<!--	<section id="section1" class="section">
		<SectionHeader name="Pronites"/>
		<ScrollingItemsView bind:events={events[0]} type={"pronite"} />
		<div class="section-nav-icons">
			<a href="#events/section2"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:white"></iconify-icon>SciTech</a>
		</div>
	</section> -->
	<section id="section2" class="section">
		<SectionHeader name="SciTech"/>
		<ScrollingItemsView bind:events={events[1]} type="scitech"/>
		<div class="section-nav-icons">
			<a href="events/#section3"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:white"></iconify-icon>Culturals</a>
			<a href="events/#section1"><iconify-icon icon="uil:arrow-up" style="font-size:54px; color:white"></iconify-icon>Pronites</a>
		</div>
	</section>
	<section id="section3" class="section">
		<SectionHeader name="Culturals"/>
		<ScrollingItemsView bind:events={events[2]} type="culturals"/>
		<div class="section-nav-icons">
			<a href="events/#section4"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:white"></iconify-icon>Informals</a>
			<a href="events/#section2"><iconify-icon icon="uil:arrow-up" style="font-size:54px; color:white"></iconify-icon>SciTech</a>
		</div>
	</section>
	<section id="section4" class="section">
		<SectionHeader name="informals"/>
		<ScrollingItemsView bind:events={events[3]} type="informals"/>
		<div class="section-nav-icons">
			<a href="events/#section3"><iconify-icon icon="uil:arrow-up" style="font-size:54px; color:white"></iconify-icon>Culturals</a>
		</div>
	</section>
</div>

<style lang="scss">
	.section{
		height: calc(100vh - 60px);
		display: flex;
		flex-flow: column;
	}

	///////////////////////////////// 
	.events-sections{
		overflow-y: scroll;
		overflow-x: scroll;
		display: block;
	}
	.section-nav-icons {
		display: flex;
		justify-content: space-between;
		color: white;
		font-size: 34px;
		a {
			display: flex;
			justify-content: end;
			align-items: end;
		}
	}
	@media (max-width: 900px) {
	}
</style>
