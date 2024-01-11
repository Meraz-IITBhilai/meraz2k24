<!-- JAVASCRIPT ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<script>
	import { page } from '$app/stores';
	import { sidebarOpen } from '$lib/stores';
	import links from '$lib/links.json';
	import links2 from '$lib/links2.json';

	let flexDisp;
	$: flexDisp = sidebarOpen ? "flex" : "none";
</script>


<!-- SVELTE ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet">
</svelte:head>


<!-- PAGE STRUCTURE ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<div class="wrapper" class:open={$sidebarOpen}> 
	<nav class="sidebar" class:open={$sidebarOpen}>
		<div class="cross" on:click={() => ($sidebarOpen = false)}>
			&#10005
		</div>

		<img alt="" class="logoo" src="/assets/glitcherr.png"  srcset=""/>
		
		{#each links as { href, text }}
		<li>
			<a {href} class:active={href === '/' ? $page.url.pathname === href : $page.url.pathname.includes(href)}
				>{text}</a
			>
		</li>
		{/each}

		<div class="regbtn"> 
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform ">Register</a>
		</div>
	</nav>
</div>


<!-- CSS STYLING ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<style lang="scss">
	.cross {
		position: absolute;
		top: 1%;
		right: 1%;
		height: 30px;
		width: 30px;
		background-color: transparent;
		color: #f1d380;
		font-size: 30px;
		font-weight: 900;
	}

	* {
		margin: 0;
		box-sizing: border-box;
		background-color: #121212f9;
		font-size: 16px;
		font-family: 'Yusei Magic', sans-serif;
	}

	.logoo{
		max-width: 100px;
		margin: 30px;
	}
	
	.wrapper {
		position: fixed;
		width: 100%;
		z-index: 40;
		left: 100%;
		top: 0;
		width: 100%;
		height: 100%;
		transition: all 0.4s linear;
	}
	
	.wrapper.open {
		left: 0px;
	}

	.sidebar {
		width: 96%;
		height: 96%;
		box-sizing: border-box;
		color: #bfbfbf;
		position: absolute;
		background-color: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #f1d380;
		margin: 2%;
	}

	.sidebar.open {
		right: 0px;
	}

	li {
		list-style-type: none;
		margin: 10px;
	}

	li:active, li:hover {
		a {
			color: #f1d380;
		}
	}
	
	.regbtn {
		padding: 6px 30px;
		border-radius: 10px;
		display: table-cell;
		vertical-align: middle;
		border: 2px solid #bfbfbf;
		text-align: center;
		margin: 10px;
	}

	.regbtn:active, .regbtn:hover {
		background-color: #f1d380;
		a {
			background-color: #f1d380;
			font-weight: 900;
			color: #121212;
		}
	}
</style>
