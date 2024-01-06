<script>
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import { sidebarOpen } from '$lib/stores';
	import links from '$lib/links.json';
	import links2 from '$lib/links2.json';
	let scrollY;
	$: transparent =  false;
	$:bgColor  = $page.url.pathname==='/' ? 'white' : 'black';
	$:txtColor  = $page.url.pathname==='/' ? 'black' : 'white';

	// $: bgColor = transparent ? 'rgba(0,0,0,0)' : 'white';
	$: shadow = 'none';

	$: display = $sidebarOpen ? 'none' : 'flex';
</script>
<svelte:head><link href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap" rel="stylesheet"></svelte:head>
<svelte:window bind:scrollY />




<button aria-label="Menu" on:click={() => ($sidebarOpen = true)}>
	<Fa icon={faBars} size="2x" />
</button>

<nav
	class="app-bar appbar2"
	style={`background-color: ${bgColor}; box-shadow: ${shadow}; display: ${display} `}
>


	<div class="links">

		<li  class="part1" style={`background-color: ${txtColor}; `}> 
			<a href="/" >Home </a>
		</li>
		<li  style={`background-color: ${txtColor}; `} class="part2"> 
			<a href="/events">Events </a>
		</li>
		<li style={`background-color: ${txtColor}; `} class="part3"> 
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdVrwsIUO-_cpOIcANsYEnIkhzIroS8HoFADNup8s6DztpYRw/viewform">Accomodation </a>
		</li>
		<li style={`background-color: ${txtColor}; `} class="part7"> 
			<a href="/sponsors">Sponsors </a>
		</li>
		<li style={`background-color: ${txtColor}; `} class="part4"> 
			<a href="/about">About</a>
		</li>
		<li style={`background-color: ${txtColor}; `} class="part8"> 
			<a href="/startup">Startups </a>
		</li>
		<li style={`background-color: ${txtColor}; `} class="part5"> 
			<a href="/contact">Contact </a>
		</li>
		
		<li style={`background-color: ${txtColor}; `} class="part6"> 
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform ">Register </a>
		</li>

	<!-- <button class="btn third"> Register</button> -->
	</div>
</nav>
<div class="box">

	<a href="/">
		<img alt="not found" class="logoo" src="/assets/glitcherr.png"  srcset=""/> 
	
	</a>
	

</div>


<!-- <div class="nav-graphic">
	<img alt="not found" src="/assets/nav_img.png"  />
	<hr />
</div> -->

<style lang="scss">
	.box{
		z-index: 20;
		width: 10%;
		height: 10%;
		background-color: black;
	}
	
	.logoo{
		position: fixed;
		// margin: auto;
		// margin-top: 20px;
		// position: absolute;
		// border-color: black;
		border-radius: 5%;
		margin-top: -3%;
		margin-right: 47%;
		z-index: 20;
		max-width: 6%;
		max-height: auto;
		transition: transform .2s;
	}
	@font-face {
		font-family: slant;
		src: url('assets/SLANT.TTF');
	}

	button {
		position: absolute;
		z-index: 20;
		margin-top: 5%;
		margin-left: 85%;
		background: none;
		border: none;
		color: currentColor;
	}
	li {
		// background-image: url('/assets/gold-texture.jpg');
		font-family: 'Staatliches', cursive;
		// background-color: black;
		font-size: 1.1em;
		letter-spacing: 1px;
		font-weight: regular;

		// text-transform: uppercase;
		text-align: center;
		color: transparent;
		-webkit-font-smoothing: antialiased;

		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	hr {
		color: white;
		background-color: white;
		border: 4px solid white;
		border-radius: 35px;
		box-shadow: 1px 0px 10px 7px rgba(84, 222, 121, 0.99);
		position: absolute;
		right: 3.2%;
		top: 59.7px;
		width: 250px;
		z-index: 1000;
		float: left;
	}

	img {
		width: 200px;
		position: absolute;	
		right: 0px;
		top: 3rem;
		float: right;
		z-index: 1500;
	}


	// .nav-graphic {
	// 	display: none;
	// }

	h1 {
		font-size: 2em;
		margin: 10px;
		position: relative;
		padding-left: 110px;
		font-family: 'Staatliches', cursive;
		font-weight: normal;
		letter-spacing: 1px;
		background: -webkit-linear-gradient(rgb(244, 242, 235), rgb(96, 162, 255), rgb(254, 177, 247));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.app-bar {
		// margin-bottom: 30px;
		margin-top: 15px;
		margin-left: 20px;
		margin-right: 20px;
		border-radius: 10px;
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		right: 0;
		padding: 0px 40px 0px 15px;
		background-color: transparent;

		display: flex;
		align-items: center;
		overflow-x: hidden;
		color: var(--primary);
		-webkit-transition: display 4s ease-in-out;
		-moz-transition: display 4s ease-in-out;
		-ms-transition: display 4s ease-in-out;
		-o-transition: display 4s ease-in-out;
		transition: display 4s ease-in-out;

		transition: background-color 0.8s ease;
		--shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
			0 1px 5px 0 rgba(0, 0, 0, 0.2);
		box-shadow: var(--shadow);
	}
	.links {
		// margin-left: 100px;
		padding-top: 25px;
		padding-bottom: 25px;
		display: none;
		align-items: center;
		padding-inline-start: 3px;
		li {
			display: inline-block;
			// margin-left: 3em;
			position: absolute;

			a {
				color: inherit;
				font-size: 1.3em;
			}
			a:after {
				background: none repeat scroll 0 0 transparent;
				bottom: 0;
				content: '';
				display: block;
				height: 6px;
				border-radius: 4px;
				left: 50%;
				bottom: -10px;
				position: absolute;
				background: #5da4e6;
				transition: width 0.3s ease 0s, left 0.3s ease 0s;
				width: 0;
			}
			a:hover:after,
			a.active:after {
				width: 100%;
				left: 0;
			}
		}
	}
	.active {
		color: rgb(250, 0, 0);
	}
	nav > h1 {
		flex-grow: 1;
		text-align: center;
	}
	@media (min-width: 900px) {
		
		.app-bar{
			opacity: 1	;
		}
		.appbar2{
			opacity: 1;
		}
		.nav{
			background-color: black;
		}
		.links {
			display: flex;
		}
		button {
			display: none;
		}
		nav > h1 {
			text-align: left;
		}
	}


	.part1{
	margin-left: 2%;
}


.part2{
	margin-left: 11%;
}
.part3{
	margin-left: 21%;
}
.part4{
	margin-left: 58%;
}
.part5{
	margin-left: 79%;
}
.part6{
	margin-left: 90%;
}

.part7{
	margin-left: 35%;
}
.part8{
margin-left: 67%;
}

	
.logoo:hover{
	transform: scale(1.2);}




a:hover,a:focus { text-shadow: 0 0 20px grey; }


 


// Basic Button Style
.btn {
	// float: right;
	right: 0;
	position: absolute;
	z-index: 3000;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid red;
  border-radius: 0.6em;
  color: red;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
  }
}




//BUTTON 3
.third {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
}


@media (max-width: 900px) {
		h1 {
			position: relative;
			left: -10px;
		}
		.logoo{
			max-width: 20%;
			max-height: 40%;
			position: absolute;
			top: 20px;
			left: 40%;
		}

		.links{
			opacity: 0;
		}
	}

</style>
