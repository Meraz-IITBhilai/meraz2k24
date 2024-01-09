<script>
	import _events from './scitech.json';
	import ScrollingComponent from "$lib/components/ScrollingItemsView.svelte";

	let events = _events;
</script>

<svelte:head>
	<title>Scitech Events | Meraz '22</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap" rel="stylesheet">
</svelte:head>

<div class="bodyy">
	<div class="meraz">
		<img alt="not found" class="merazimg" src="/assets/meraz_white.png"/>
	</div>
	<h1 class="event">SCI TECH</h1>	
	<ScrollingComponent bind:events={events} />
</div>

<style lang="scss">
	.bodyy {
		background-image: url(/assets/scitech_bg.png);
		padding-bottom: 200px;
		background-attachment: fixed;
		background-size: cover;
		background-repeat: no-repeat;
	}
	*,
	*:before,
	*:after {
		margin: 0;
		padding: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.event {
		font-family: 'Oswald', sans-serif;
		font-weight: bolder;
		font-size: 100px;
		position: absolute;
		left: 40%;
		top: 5%;
		margin: 0%;
	}
	.content-image {
		width: 100%;
		border-radius: 10px;
	}

	.fadeIn-top {
		top: 20%;
	}
	.parent {
		display: grid;
		grid-gap: 30px;
		grid-template-columns: 25% 25% 25%;
		width: 100%;
		position: relative;
		left: 10%;
		margin-right: 15%;
		margin-left: 10%;
		padding-top:10%;
	}
	.event-item {
		display: flex;
		justify-content: center;
		align-items: center;
		scroll-snap-align: start;
		scroll-margin-top: 75px;
		position: relative;
		transition: transform 0.2s ease-in-out;
	}
	div:focus {
		outline: none;
	}
	h1 {
		margin-top: 2em;
		scroll-snap-align: start;
		scroll-margin-top: 75px;
		font-weight: normal;
		font-family: 'Metal Mania', cursive;
		font-family: 'Audiowide', cursive;
		color: transparent;
		background: -webkit-linear-gradient(#7ce7ec, rgb(8, 109, 172), blue);
		background: white;
		background-clip: text;
		padding-left: 2vw;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.event-img {
		width: 100%;
		height: 150%;
		object-fit: contain;

		border: #7ce7ec 2px ridge;
		border-radius: 10px;
		cursor: pointer;
	}
	.event-title-container {
		width: 100%;
	}
	.name{
		margin-top:3%;
		font-family: 'Oswald', sans-serif;
		font-weight: bolder;
		text-transform: uppercase;
		text-align: center;
	}
	.merazimg{
		position: relative;
		// opacity:0.5;
		top:5%;
		width:100px;
		left:20%;
	}
	.meraz{

		position: fixed;
		left:2%;
		top:7%;
		z-index: 9;
		height:100vh;
		width:200px;
		background-color: #003253;
	}
	h1{
		padding: 0;
	}
	@media (max-width: 900px) {
		.bodyy{
			padding-bottom: 100%;
		}
		.parent{
			position: relative;
			display:block;
			top:10%;
			width: 90%;
			padding-top: 60%;
			left:5%;

		}
		.event{
			position: absolute;
			left:20%;
			padding-top: 20%;
			top:1%;
			font-size: 70px;
		}
		$border-width: 0px;
		.event-item {
				border-width: 2px;
				border-style: solid;
				border-image: linear-gradient(135deg, #ff2600, yellow, yellow, #ff2600) 1 round;
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
		.content{
			margin-top: 30px;
			left:0%;
			width:80%;
		}
		.event-title{
			font-size: 1em;
		}
	}
</style>
