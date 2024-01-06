<script>
	import culturals from './culturals.json';
</script>

<svelte:head>
	<title>Cultural Events | Meraz '22</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap" rel="stylesheet">
</svelte:head>

<div class="bodyy">
	<div class="meraz">
		<img alt="not found" class="merazimg" src="/assets/meraz_white.png">
	</div>
	<h1 class="event">CULTURALS</h1>
	<div class="parent">
		
		{#each culturals as name}
			<div>
				<div class="content" id={name.name}>
					<a class="event-item" href={`/culturals/${name.name}`} style="cursor: pointer;">
						<div class="content-overlay" />
						<img alt="not found" class="event-img" src={`/assets/event-images/${name.name}.jpg`}  />
						<div class="content-details fadeIn-top">
							<div class="event-title-container"><h3 class="event-title">{name.tagline}</h3></div>
						</div>
					</a>
					<h1 class="name"><a name={name.name}>{name.name}</a></h1>
				</div>
				
			</div>
		{/each}
	</div>

</div>

<style lang="scss">
	.bodyy{
		background-image:url(/assets/bg_cult.png);
		padding-bottom: 200px;
		background-attachment: fixed;
		background-size: cover;
		background-repeat:no-repeat ;
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
	.event{
		font-family: 'Oswald', sans-serif;
		font-weight: bolder;
		font-size: 100px;
		position: absolute;
		left:35%;
		top:2%;
		margin:0%;
	}
	.content {
		position: relative;
		width: 100%;
		max-width: 400px;
		margin: auto;
		margin-top: 50px;
		overflow: hidden;
		left:30%;
		top:20%
	}

	.content .content-overlay {
		background: rgba(0, 0, 0, 0.7);
		position: absolute;
		height: 99%;
		width: 100%;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
		-webkit-transition: all 0.4s ease-in-out 0s;
		-moz-transition: all 0.4s ease-in-out 0s;
		transition: all 0.4s ease-in-out 0s;
	}

	.content:hover .content-overlay {
		opacity: 1;
	}
	$yellow: rgb(61, 104, 191);

	$border-width: 5px;

	.event-item {
		//   A duration of .5s in transition of text color (Effective when hovered)
		transition: 0.5s color ease-in-out;

		// Change text color to $yellow on hover
		// &:hover {
		// 	color: $yellow;
		// }

		// Start ::after in same position as ::before
		&::before,
		&::after {
			box-sizing: inherit;
			content: '';
			position: absolute;
			border: $border-width solid transparent;
			border-radius: 0px;
			width: 0;
			height: 0;
			top: 0;
			left: 0;
		}

		//   Change dimensions on hovering
		&:hover::before,
		&:hover::after {
			width: 100%;
			height: 100%;
		}

		&::before,
		&::after {
			width: 0%;
			height: 0%;

			border-width: 0px;
			border-style: solid;
			border-image: linear-gradient(180deg, #28b3e9, yellow, yellow, #28b3e9) 1 round;
		}

		&::before {
			transition: width 0s ease-out 0s,
				// Width expands first
				height 0s ease-out,
				border-width 0s ease-out 0s;
		}

		&::after {
			transition: // Animate height first, then width
				height 0s ease-out 0s, width 0s ease-out, border-width 0s ease-out 0s;
		}
		// Change colors
		&:hover::before {
			border-width: $border-width ;
			// -webkit-transition: border-radius 1s;
			// Commented for now transition
			transition: width 0s ease-out,
				// Width expands first
				height 0s ease-out 0;
			//   border-radius 0.6s; // And then height
		}

		&:hover::after {
			border-width: $border-width $border-width $border-width $border-width;
			transition: // Animate height first, then width
				height 0s ease-out, width 0s ease-out 0s;
		}
	}

	.content-image {
		width: 100%;
		// border-radius: 10px;
	}

	.content-details {
		position: absolute;
		text-align: center;
		padding-left: 1em;
		padding-right: 1em;
		width: 100%;
		top: 50%;
		left: 50%;
		opacity: 0;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		-webkit-transition: all 0.3s ease-in-out 0s;
		-moz-transition: all 0.3s ease-in-out 0s;
		transition: all 0.3s ease-in-out 0s;
	}

	.content:hover .content-details {
		top: 50%;
		left: 50%;
		opacity: 1;
	}

	.content-details h3 {
		color: #fff;
		font-weight: 500;
		letter-spacing: 0.15em;
		margin-bottom: 0.5em;
		text-transform: uppercase;
	}

	// .content-details p {
	// 	color: #fff;
	// 	font-size: 0.8em;
	// }
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
		// margin-right: 15%;
		// margin-left: 10%;
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
		// font-family: 'Metal Mania', cursive;
		font-family: 'Audiowide', cursive;
		color: transparent;
		// background: -webkit-linear-gradient(#7ce7ec, rgb(8, 109, 172), blue);
		background: black;
		background-clip: text;
		padding-left: 2vw;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.event-img {
		width: 100%;
		height: 150%;
		object-fit: contain;

		// //border: #7ce7ec 2px ridge;
		// border-radius: 10px;
		cursor: pointer;
	}
	.event-title {
		
		font-family: 'Oswald', sans-serif;
		justify-content: center;
		display: block;
		text-align: center;
		font-weight:lighter;	
		// left: 10px;
		text-shadow: black 0px 0px 5px;
		// font-weight: bold;
		font-size: 1.4em;
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
		z-index: 9;
		left:2%;
		top:7%;
		height:100vh;
		width:200px;
		background-color: #01313F;
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
			// left:5%;

		}
		.event{
			position: absolute;
				left:12%;
				padding-top: 10%;
				top:1%;
				font-size: 70px;
		}
		$border-width: 0px;
		// .event-item {
		// 	border-width: 2px;
		// 	border-style: solid;
		// 	border-image: linear-gradient(180deg, #ff2600, yellow, yellow, #ff2600) 1 round;
		// }
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
	}
	// $border-width: 2px;
</style>
