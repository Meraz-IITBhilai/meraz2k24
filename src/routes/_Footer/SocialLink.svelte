<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	export let icon, href;
</script>

<a {href} aria-label="Facebook"><Fa {icon} size="2x" /></a>

<style>
	a {
		width: 50px;
		height: 50px;
		display: inline-block;
		color: white;
	}
	a:hover {
		color: var(--hover-color);
	}
	a {
		background-color: transparent;
		color: white;
		transition: color 0.4s ease;
		transition: transform 0.2s linear;
	}
	a:hover {
		transform: translateY(-10px);
	}
</style>
