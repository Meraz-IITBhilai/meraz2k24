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

	onMount(() => {
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
	});
	let events = [pronite, scitech, culturals, informal];
	let headings = ["Pronites", "SciTech", "Culturals", "Informals"];
</script>
<svelte:head>
	<title>Events | Meraz '22</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap" rel="stylesheet">
</svelte:head>

	<section id="section1" class="top">
		<SectionHeader bind:name={headings[0]}/>
		<ScrollingItemsView bind:events={events[0]} />
		<a href="#section2"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:black"></iconify-icon>
	</section>
	<section id="section2" class="top">
		<SectionHeader bind:name={headings[1]}/>
		<ScrollingItemsView bind:events={events[1]} />
		<a href="#section1"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:black"></iconify-icon>
		<a href="#section3"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:black"></iconify-icon>
	</section>
	<section id="section3" class="top">
		<SectionHeader bind:name={headings[2]}/>
		<ScrollingItemsView bind:events={events[2]} />
		<a href="#section2"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:black"></iconify-icon>
		<a href="#section4"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:black"></iconify-icon>
	</section>
	<section id="section4" class="top">
		<SectionHeader bind:name={headings[3]}/>
		<ScrollingItemsView bind:events={events[3]} />
		<a href="#section3"><iconify-icon icon="uil:arrow-down" style="font-size:54px; color:black"></iconify-icon>
	</section>

<style lang="scss">
	.empty{
		height: 40px;
	}
	.mains{
		position: absolute;
		top:2%;
		left:22%;
		margin-bottom: 30px;
		margin-right: 0px;
	}
	.background{
		position: relative;
		display: flex;
		flex-direction:row;
		width:50vw;
		background-color: transparent;
		padding: 2px;
		padding-bottom: 1px;
		border-radius: 40px;
		left:10%;
	}
	.imag{
		transition: .2s all;

	}
	
	.imag:hover{

			// -webkit-filter: brightness(30%);

		
		// content: 'hey i am a text';
		border: 2px solid rgb(117, 255, 227);
		transform: scale(1.2);

}
	.img1{
		// border-radius: 40px 0 0 40px;
	}
	.img4{
		// border-radius: 0 40px 40px 0 ;
	}
	img{
		padding: 2px;
		width:100%;
	}
	.meraz{
		
		position: fixed;
		z-index: 9;
		left:2%;
		top:7%;
		height:100vh;
		width:200px;
		background-color: #58899A;
	}
	.event{
		font-family: 'Oswald', sans-serif;
		font-size:500%;
		// position: absolute;
		position: relative;	
		left: 20%;	
		width:70%;
		margin-bottom: 5%;
		text-align: center;
		z-index: 25
	}
	.merazimg{
		position: relative;
		// opacity:0.5;
		top:5%;
		width:100px;
		left:20%;
	}
	.background2{
		display:none;
	}
	// .img1{
	// 	position: relative;
	// 	left:0%;
	// }
	// .img2{
	// 	position:relative;
	// 	left:25%;
	// }
	// .img3{
	// 	position:relative;
	// 	left:50%;
	// }
	// .img4{
	// 	position:relative;
	// 	left:75%;
	// }
	.poster{
		object-fit:cover;
		
	}
	.btn {
	position: absolute;
	bottom: 10%;
	z-index: 3;
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




.third {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
}
.butt{
	position: relative;
	// padding-top:-50%;
	margin-top: -67%;
	// text-align: center;
	left: 80%;

}

	@media (max-width: 900px) {
		.butt{
	position: relative;
	padding-top: 50%;
	margin-top: 0%;
	// text-align: center;
	left: 15%;

}
		.empty{
			height: 100px;

		}
		.background{
			display:none;
			width: 80vw;

			left: 5%;
		}
		.background2{
			display:block;
			width:90%;
			margin-left: 5%;
			margin-right: 5%;
		}
		.mains{
			left:10%;
			top:10%;
		}
		.meraz{
			position: absolute;
			width:30px;
			top:0;
			left:0;
			height: 100%;
			// z-index: ;
		}
		.merazimg{
			display: none;
		}
		.event{
			// font-size: ;
			// margin-right: -0%;top: ;
			font-size: 300%	;
			left: 15%;
			text-align: center;
		}
		.bodyy{
			padding-bottom: 200%;
		}
	
	}
</style>
