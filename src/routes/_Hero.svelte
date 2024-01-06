<script>
	import Timer from './_Timer.svelte';
</script>
<svelte:head>
	<link href='https://fonts.googleapis.com/css?family=Press Start 2P' rel='stylesheet'>
</svelte:head>
<div class="hero" style="font-size: 2rem;">
	<img alt="not found" class="logo" src="/assets/Logo_glitch.png"  />
	<div class="container">
		<img alt="not found" class="build" src="/assets/gg.png"  />	
		<div class="days">39</div>
	</div>
	<div class="bottom">
		<!-- <Timer /> -->
		<!-- <button class="register-button"> Register </button> -->
	</div>
</div>

<style lang="scss">
	.logo{
		position: absolute;
		left: 25%;
		top: 46%;
		width: 45vw;
		transform: translate(-50%, -50%);
		max-width: 100%;
		min-height: 25%;
	}
	.floor{
		position: fixed;
		top: 100%;
		left: 50%;
		width: 100vw;
		transform: translate(-50%, -50%);
		max-width: 100%;	
		min-height: 40%;
	}
	.container {
	position: absolute;
	top: 50%;
	left: 67%;
	width: 50vw; 
	}
	.build	{
		width: 35vw;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 100%;
		min-height: 25%;
	}



	.days {
	font-family: 'Press Start 2P';
	position: absolute;
	top: -40%;
	left: 15.5%;
	font-size: 4vw;
	transform: translate(-50%, -50%);
	}

	@keyframes spin {
		from {
			transform:rotate(0deg);
		}
		to {
			transform:rotate(360deg);
		}
	}

	@media (min-width: 1400px) {
		.register-button {
			font-size: 2em;
			padding: 1em 3em;
		}
	}

	@media (max-width: 1100px) {
		img {
			width: 50vh;
		}
	}
	@media (max-width: 768px) {
		img {
			width: 50vh;
		}
	}
	@media (max-width: 425px) {
		img {
			width: 300px;
			top: 38%;
		}
		.bottom {
			top: 70% !important;
		}
	}
	.register-button {
		font-size: 1.9rem;
		letter-spacing: 2px;
		color: #111111;
		margin: 2vw;
		padding: 8px 25px;
		font-family: 'valorant';
		background-image: url('/assets/gold-texture.jpg');
		transition: 0.25s transform ease-in-out;
		&:hover {
			transform: scale(1.1);
		}
		margin-bottom: 4px;
	}
	.hero {
		width: 100%;
		height: 100vh;
		position: relative;
		text-align: center;
		scroll-snap-align: start;
	}

	.bottom {
		width: fit-content;
		margin: 0px;
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, 0px);
		min-width: 50%;
		max-width: 100%;
	}
</style>
