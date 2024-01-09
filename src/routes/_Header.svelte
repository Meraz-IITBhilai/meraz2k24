<!-- JAVASCRIPT ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<script>
	// import { page } from '$app/stores';
	// import { browser } from '$app/environment';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { sidebarOpen } from '$lib/stores';
	// import links from '$lib/links.json';
	// import links2 from '$lib/links2.json';
	let scrollY;
	// $:transparent =  false;
	// $:bgColor  = $page.url.pathname==='/' ? 'black' : 'black';
	// $:txtColor  = $page.url.pathname==='/' ? 'black' : 'black';
	// $: bgColor = transparent ? 'rgba(0,0,0,0)' : 'white';
	// $: shadow = 'none';
	$: display = $sidebarOpen ? 'none' : 'flex';
</script>


<!-- SVELTE ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet">
</svelte:head>
<svelte:window bind:scrollY />


<!-- PAGE STRUCTURE ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<button class="sidebarr" aria-label="Menu" on:click={() => ($sidebarOpen = true)}>
	<Fa icon={faBars} size="2x" />
</button>

<nav style={`display: ${display}`}>
	<div class="navbar">
		<li class="navelt1"> 
			<a class="link" href="/">Home</a>
		</li>
		<li class="navelt2"> 
			<a class="link" href="/events">Events</a>
		</li>
		
<!-- accomodation form link to be modified ************************************************************************* -->
		<li class="navelt3"> 
			<a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSdVrwsIUO-_cpOIcANsYEnIkhzIroS8HoFADNup8s6DztpYRw/viewform">Accomodation</a>
		</li>
		<li class="navelt4"> 
			<a class="link" href="/sponsors">Sponsors</a>
		</li>

		<li class="logo">
			<a href="/">
				<img alt="" class="logoo" src="/assets/glitcherr.png"  srcset=""/> 
			</a>
		</li>

		<li class="navelt5"> 
			<a class="link" href="/startup">Startups</a>
		</li>
		<li class="navelt6"> 
			<a class="link" href="/about">About</a>
		</li>

<!-- team page to be created and link to be inserted ***************************************************************** -->
		<li class="navelt7"> 
			<a class="link" href="/team">Team</a>
		</li>
		<li class="navelt8"> 
			<a class="link" href="/contact">Contact</a>
		</li>
		
	</div>

<!-- registration form link to be modified *********************************************************************** -->
<div class="regbtn"> 
	<a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform ">Register</a>
</div>

</nav>


<!-- CSS STYLING ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** -->

<style lang="scss">
	* {
		margin: 0;
		box-sizing: border-box;
		font-size: 16px;
		font-family: 'Yusei Magic', sans-serif;
	}

	div {
		display: inline-block; 
	}

	a, .link {
		text-decoration: none;
		color: white;
	}

	.link:hover {
		color: #f1d380;
	}

	.link::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: #f1d380;
		transition: width 0.25s ease; 
	}

	.link:hover::after {
		width: 100%;
	}

	.navbar {
		width: auto;
		height: 60px;
		display: flex;
		background-color: #121212;
		align-items: center;
		flex-wrap: nowrap;
	}

	.navelt1, 
	.navelt2, 
	.navelt3, 
	.navelt4, 
	.navelt5, 
	.navelt6, 
	.navelt7, 
	.navelt8, 
	.logo {
		display: inline-block;
		padding: 5px;
		position: absolute;
		margin: auto;
	}

	.navelt1 {
		margin-left: 14%;;
	}
	.navelt2 {
		margin-left: 20%;;
	}
	.navelt3 {
		margin-left: 26%;;
	}
	.navelt4 {
		margin-left: 36%;
	}

	.logo {
		margin-left: 47%;
		width: 5%;
	}
	.logoo {
		width: 100%;
		transition: transform .2s;
	}
	.logoo:hover {
		transform: scale(1.2);
	}

	.navelt5 {
		margin-left: 58%;;
	}
	.navelt6 {
		margin-left: 65%;;
	}
	.navelt7 {
		margin-left: 71%;;
	}
	.navelt8 {
		margin-left: 77%;
	}

	.regbtn {
		box-sizing: border-box;
		position: absolute;
		right: 1%;
		top: 1.5%;
		border: 2px solid white;
		border-radius: 10px;
		display: table-cell;
		vertical-align: middle;	
		text-align: center;
		padding: 6px 30px;
	}

	.regbtn:hover {
		border: 2px solid #f1d380;
		background-color: #f1d380;
		a {
			font-weight: 900;
			color: #121212;
		}
	}

	@media (min-width: 1000px) {	
		.sidebarr {
			display: none;
		}
	}

	@media (max-width: 1000px) {
		.navbar {
			display: none;
		}
		.regbtn {
			display: none;
		}
	}

	.sidebarr {
		background-color: #121212;
		color: #f1d380;
		border-top: none;
		border-right: none;
		border-left: none;
		border-bottom: 1px #191B21 solid;
		padding: 1%;
		text-align: end;
	}
</style>
