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
	import '../styles/main.scss';

	export let key;
</script>

<Header />
<Sidebar />


<PageTransition {key}>
	<slot />
</PageTransition>

<Footer />
