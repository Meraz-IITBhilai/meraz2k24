<script>
	import Timer from './_Timer.svelte';
</script>

<svelte:head>
	<title>Meraz '22</title>
</svelte:head>

<div style="background-color:#98B0D2; background-image: url(/assets/clouds.jpg)">
	<div class="section">
		<div class="timer">
			<Timer />
			<div class="trailer">
				<a href="https://www.youtube.com/watch?v=iDtwPVqDfkA">Trailer Out now</a>
			</div>
		</div>

		<img
			alt="not found"
			style="display: inline-block"
			class="newmeraz"
			src="/assets/newmeraz.png"
			srcset=""
		/>
		<button class="btn third"
			><a
				href="https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform "
				>Register</a
			></button
		>
	</div>

	<div class="section1">
		<h1 class="text">To step up the music meter</h1>
		<video class="video" autoplay loop muted>
			<source src="/assets/Gajendra.mp4" type="video/mp4" />
		</video>
	</div>

	<div class="section2">
	</div>
	<div class="section2">
		<video class="video1" autoplay loop muted>
			<source src="/assets/vipul.mp4" type="video/mp4" />
		</video>
		<h1 class="text1">To tickle your funny bones.</h1>
		<img alt="not found" class="vipul" src="/assets/vipulgoyal.png" />
	</div>
	<div class="section3">
		<video class="video2" autoplay loop muted>
			<source src="/assets/Neophilis.mp4" type="video/mp4" />
		</video>
		<h1 class="text2">Rock off Rave on</h1>
		<img alt="not found" class="lost" src="/assets/nemophilis.png" />
	</div>
	<div class="section4">
		<h1
			class="tat"
			style=" position: absolute;
  color: black;
  top:-3%;
  align-items: center;"
		>
			Meet our guest speakers
		</h1>
		<img alt="not found" class="tata" src="/assets/tata.png" />
	</div>

	<div class="section2 hitzero">
		<h1 class="eve">WHEN THE TIMER HITS ZERO,TIME TO GET YOUR GAME FACE ON.</h1>
		<a class="but" href="/events"><button class="btn third">Events</button></a>
	</div>
</div>

<style lang="scss">
	.but {
		top: 90%;
		left: 43%;
		position: absolute;
	}
	.vidd {
		transform: translate(-10%, -10%);
	}
	.video {
		position: absolute;
		width: 40vw;
		top: 10%;
		left: 5%;
	}
	.video1 {
		position: absolute;
		width: 30vw;
		top: 10%;
		right: 15%;
	}
	.video2 {
		position: absolute;
		width: 40vw;
		top: 15%;
		left: 5%;
	}
	.eve {
		top: 0;
		color: black;
	}
	.lost {
		position: relative;
		left: 20%;
		width: 20vw;
		top: 0%;
	}
	.vipul {
		position: relative;
		right: 20%;
		width: 20vw;
		top: -3%;
	}
	.text {
		position: absolute;
		color: white;
		right: 0px;
		top: 10%;
		width: 40%;
		align-items: center;
	}
	.text1 {
		position: absolute;
		color: black;
		width: 40%;
		left: 20%;
		top: 5%;
		align-items: center;
	}
	.text2 {
		position: absolute;
		color: white;
		right: 0px;
		top: 30%;
		width: 40%;
		align-items: center;
	}
	.tata {
		width: 60vw;
	}
	.mohan {
		width: 20vw;
	}

	.newmeraz {
		width: 80%;
		z-index: 2;
		margin-bottom: 10%;
	}

	.section {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.section h1 {
		text-align: center;
		font-size: 6rem;
		font-family: 'Cookie';
		padding: 20px;
		margin: 15px;
		z-index: 1;
		opacity: 0.7;
	}
	.section h1 {
		text-align: center;
		font-size: 6rem;
		font-family: 'Cookie';
		padding: 20px;
		margin: 15px;
		z-index: 1;
		opacity: 0.7;
	}

	.video-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1;
	}

	.color-overlay {
		position: absolute;
		top: 0;
		left: 0;
		background-color: black;
		width: 100%;
		height: 100vh;
		opacity: 0.7;
		z-index: 38;
	}

	.timer {
		z-index: 3;
		position: absolute;
		bottom: 25%;
	}
	.trailer {
		// z-index : 3;
		background-color: #31e1f7;
		font-family: 'Metal Mania', sans-serif;
		z-index: 3;
		letter-spacing: 3px;

		text-transform: uppercase;
		text-align: center;
		color: transparent;
		-webkit-font-smoothing: antialiased;

		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		text-align: center;
		font-size: 1.7rem;
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
		box-shadow:
			0 0 40px 40px #3498db inset,
			0 0 0 0 #3498db;
		transition: all 150ms ease-in-out;

		&:hover {
			box-shadow:
				0 0 10px 0 #3498db inset,
				0 0 10px 4px #3498db;
		}
	}

	.section1 {
		position: relative;
		width: 100%;
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: url('/assets/gajendra.png') center top/auto 100% no-repeat;
		background-size: contain;
	}
	.section2 {
		position: relative;
		width: 100%;
		height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #98b0d2;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.section3 {
		position: relative;
		top: -50px;
		width: 100%;
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: url('/assets/bg2.png') center top/auto 100% no-repeat;
		overflow: visible;
		background-image: url('/assets/bg2.png');
		background-size: contain;
	}
	.section4 {
		position: relative;
		top: -10%;
		width: 100%;
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #98b0d2;
		background-size: contain;
		background-repeat: no-repeat;
	}
	.section5 {
		position: relative;
		width: 100%;
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: url('/assets/bg4.png') center top/auto 100% no-repeat;
		background-size: contain;
	}
	.lost2 {
		top: -10%;
	}
	.hitzero {
		height: 30vh;
	}
	.eve {
		position: relative;
		top: -20%;
	}
	@media (max-width: 900px) {
		.video {
			width: 80vw;
			height: 80%;
			left: 10%;
			right: 10%;
			top: 30%;
		}
		.video1 {
			width: 80vw;
			// height:80%;
			left: 10%;
			right: 10%;
			top: 55%;
		}
		.video2 {
			width: 80vw;
			height: 80%;
			left: 10%;
			right: 10%;
			top: 20%;
		}
		.text {
			top: 4%;
			width: 100%;
			height: 100%;
			padding: 4%;
			text-align: justify;
		}
		.lost {
			position: absolute;
			width: 70vw;
			top: 30%;
			left: 15%;
		}
		.vipul {
			position: absolute;
			width: 70vw;
			top: 25%;
			right: 20%;
		}
		.text1 {
			top: 0%;
			width: 100vw;
			left: 6%;
			padding-right: 10%;
			text-align: justify;
		}
		.text2 {
			top: 10%;
			left: 12%;
			width: 80vw;
		}
		.section1 {
			height: 100vh;
			background-size: cover;
		}
		.section2 {
			height: 80vh;
			background-size: cover;
		}
		.section3 {
			height: 80vh;
			background-size: cover;
		}
		.section4 {
			height: 60vh;
			background-size: cover;
		}
		.tata {
			padding-top: 30%;
			width: 90vw;
		}
		.section5 {
			height: 80vh;
			background-size: cover;
		}
		.tat {
			left: 4%;
			font-size: 3rem;
		}
		.eve {
			font-size: 2rem;
			padding: 8%;
		}
		.hitzero {
			height: 35vh;
		}
		.but {
			top: 100%;
			left: 20%;
		}
	}
</style>
