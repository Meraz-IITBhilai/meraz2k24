<script>
	import { page } from '$app/stores';
	import { sidebarOpen } from '$lib/stores';
	import links from '$lib/links.json';
	import links2 from '$lib/links2.json';
</script>

<div
	id="barwrapper"
	class="wrapper"
	class:open={$sidebarOpen}
	on:click={() => ($sidebarOpen = false)}
> 

	<nav class="app-bar sidebar" class:open={$sidebarOpen} id="sidebar">
		<ul class="links">
			<img alt="not found" class="logoo" src="/assets/glitcherr.png"  srcset=""/>
			{#each links as { href, text }}
				<li>
					<a {href} class:active={href === '/' ? $page.url.pathname === href : $page.url.pathname.includes(href)}
						>{text}</a
					>
				</li>
			{/each}

			{#each links2 as { href, text }}
				<li>
					<a {href} class:active={href === '/' ? $page.url.pathname === href : $page.url.pathname.includes(href)}
						>{text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style lang="scss">
	.logoo{
		max-width: 80px;
		margin-top: 10%;
		// max-height: 80%;
	}
	.wrapper {
		position: fixed;
		width: 100%;
		z-index: 40;
		left: 100vw;
		top: 0;
		width: 100%;
		height: 100%;
		transition: all 420ms linear;
	}

	#sidebar {
		z-index: 40;
		color: white;
		position: absolute;
		background: #121212;
		width: 75vw;
		height: 100%;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
	#sidebar ul {
		margin: 50px;
		padding: 0;
		list-style: none;
	}

	#sidebar ul li {
		margin: 0;
	}
	#sidebar.open {
		right: 0px;
	}
	.wrapper.open {
		left: 0px;
	}

	.links {
		li {
			display: block;
			margin-left: 1em;

			a {
				color: inherit;
				font-size: 1.125em;
				padding: 15px 20px;
				font-weight: 100;
				text-decoration: none;
				display: block;
				transition: background 0.3s ease-in-out 	;
			}
		}
	}
	.active {
		font-weight: bold;
	}
	a:hover { text-shadow: 0 0 5px white; }

</style>
