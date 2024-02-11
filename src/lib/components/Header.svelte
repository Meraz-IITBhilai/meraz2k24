<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { sidebarOpen } from '$lib/stores';
	import { collapsingNavbar } from '$lib/stores';

	let scrollY;
	let y;
	let posType;

$: y = $collapsingNavbar ? Math.min(scrollY - 100, 0) : 0;
$: posType = $collapsingNavbar ? 'fixed': 'sticky';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window bind:scrollY />

<div class="navbar-sidebar-container" style={`transform: translateY(${$sidebarOpen ? -100 : y}%); position: ${posType}`}>
	<div class="small-navbar-logo-conatiner">
		<a href="/">
			<img alt="" class="small-navbar-logo" src="/assets/logo.svg"  srcset=""/> 
		</a>
	</div>
	<button class="sidebarr" aria-label="Menu" on:click={() => ($sidebarOpen = true)}>
		<Fa icon={faBars} size="2x" />
	</button>
</div>
<div class="navbar-container" style={`transform: translateY(${y}%); position: ${posType};`}>
	<nav>
		<div class="navbar">
			<li class="navelt1"> 
				<a class="link" href="/">Home</a>
			</li>
			<li class="navelt2"> 
				<a class="link" href="/events">Events</a>
			</li>

			<!-- accomodation form link to be modified -->
			<li class="navelt3"> 
				<a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSdVrwsIUO-_cpOIcANsYEnIkhzIroS8HoFADNup8s6DztpYRw/viewform">Accomodation</a>
			</li>
			<li class="navelt4"> 
				<a class="link" href="/sponsors">Sponsors</a>
			</li>

			<li class="logo">
				<a href="/">
					<img alt="" class="logoo" src="/assets/logo.svg"  srcset=""/> 
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

		<!-- registration form link to be modified -->
		<div class="regbtn"> 
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform ">Register</a>
		</div>

	</nav>
</div>


<!-- CSS STYLING -->

<style lang="scss">
	* {
		margin: 0;
		box-sizing: border-box;
		font-size: 16px;
		font-family: 'BluuNext', 'Yusei Magic', sans-serif;
	}

	.navbar-container, .navbar-sidebar-container {
		z-index: 1000;
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		background: var(--bg-secondary);
	}


	div {
		display: inline-block; 
	}

	a, .link {
		text-decoration: none;
		color: white;
	}

	.link:hover {
		color: var(--primary);
	}

	.link::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 2px;
		background-color: var(--primary);
		transition: width 0.25s ease; 
	}

	.link:hover::after {
		width: 100%;
	}

	.navbar {
		width: auto;
		height: 60px;
		display: flex;
		background-color: var(--bg-secondary);
		align-items: center;
		flex-wrap: nowrap;
	}

	.navelt1, .navelt2, .navelt3, .navelt4, 
	.navelt5, .navelt6, .navelt7, .navelt8, 
	.logo {
		display: inline-block;
		padding: 5px;
		position: absolute;
		margin: auto;
	}

	.navelt1 {
		margin-left: 16%;;
	}
	.navelt2 {
		margin-left: 22%;;
	}
	.navelt3 {
		margin-left: 28%;;
	}
	.navelt4 {
		margin-left: 38%;
	}

	.logo {
		height: 80px;
		display: auto;
		margin-left: 46.5%;
		width: 5%;
	}
	.logoo {
		height: 100%;
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
		top: 50%;
		transform: translateY(-50%);
		border: 2px solid white;
		border-radius: 10px;
		display: table-cell;
		vertical-align: middle;	
		text-align: center;
		padding: 6px 30px;
	}

	.regbtn:hover {
		border: 2px solid var(--primary);
		background-color: var(--primary);
		a {
			font-weight: 900;
			color: #121212;
		}
	}

	.navbar-sidebar-container {
		position: fixed;
		display: flex;
		width: 100%;
		border-top: none;
		border-right: none;
		border-left: none;
		border-bottom: 1px #191B21 solid;
		padding: 1%;
		text-align: end;
		transition: transform 200ms linear;
	}
	.sidebarr{
		color: var(--primary);
		background-color: var(--bg-secondary);
		border:none;
		border-bottom: 1px #191B21 solid;
	}
	.small-navbar-logo-conatiner {
		height: 60px;
		/*display: inline-block;*/
		padding: 0px;
		margin: auto;
	}
	.small-navbar-logo {
		height: 100%;
		transition: transform .2s;
	}
	.small-navbar-logo:hover {
		transform: scale(1.2);
	}

	@media (min-width: 1000px) {	
		.navbar-sidebar-container, .sidebarr,
		.small-navbar-logo-conatiner, .small-navbar-logo{
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

</style>
