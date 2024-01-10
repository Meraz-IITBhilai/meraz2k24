<script context="module">
	export const prerender = true;
	export const load = async ({ params }) => ({
		props: {
			key: params.path,
		},
	});
</script>

<script>
	import Header from './_Header.svelte';
	import Sidebar from './_Sidebar.svelte';
	import Footer from './_Footer/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import "../styles/main.scss"
	import { onMount } from 'svelte';
	import HexagonLoading from './HexagonLoading.svelte';

	let isPageLoaded = false;
	export let key;

	let globalProgress = 0;
	let delay = 100;
	let progressOnComplete = 0;
	let actuallyLoaded = false;

	/** @param {element} element
	 * @param {integer} percent
	 */
	function updateProgress(element, percent) {
		const fill = element.querySelector('.fill');
		const valueElement = element.querySelector('.value');

		fill.setAttribute('style', `stroke-dasharray: ${percent * 3.02} 360;`);
		valueElement.innerHTML = `${percent}%`;
	}

	onMount(() => {
		document.querySelectorAll('.progress').forEach((element) => {
			isPageLoaded = document.readyState === 'complete';

			const interval = setInterval(() => {

				if (document.readyState === 'complete' && actuallyLoaded != true) {
					progressOnComplete = globalProgress;
					actuallyLoaded = true;
				}

				if(globalProgress <= 100 && actuallyLoaded){
					globalProgress += (100 - progressOnComplete) / 10;
				} else if (globalProgress < 80) {
					globalProgress += 1;
				} 

				if (globalProgress >= 100) {
					globalProgress = 100;
					clearInterval(interval);
					isPageLoaded = true;
				}
				globalProgress = Math.floor(globalProgress);
				updateProgress(element, globalProgress);
			}, delay);
		});
	});
</script>

<HexagonLoading bind:isPageLoaded />

<Header />
<Sidebar />
<PageTransition {key}>
	<slot />
</PageTransition>
<Footer />
