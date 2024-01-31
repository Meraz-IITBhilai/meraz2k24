<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
	// import SectionHeader from './SectionHeader.svelte';

	let heading = 'Startups';
	//import 'lite-youtube-embed/src/lite-yt-embed.css';
	// import { onMount } from 'svelte';
	//onMount(() => import('lite-youtube-embed/src/lite-yt-embed'));
</script>

<svelte:head>
	<title>Startups | Meraz'24</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="bodyy">
	<div class="empty"></div>
	<SectionHeader bind:name={heading} />
	<!-- <div class="meraz">
		<img alt="not found" class="merazimg" src="assets/meraz_white.png" />
	</div> -->
	<!-- <h1 class="event">STARTUP</h1> -->
	<!-- <div class=""> -->
		<div class="hero startup">
			<img class="poster" alt="not found" src="assets/startups.png" srcset="" />
			<img class="frame" alt="not found" src="assets/startups_img_bg.svg" srcset="" />
		</div>
	<!-- </div> -->
	<div class="start">
		<p>
			We are hosting Meraz-23 the techno-cult fest of IIT Bhilai, this fest is a platform for
			students not just from IIT Bhilai but across the region to showcase their talent on the big
			stage. The fest includes events ranging from fashion to robotics. The 2022 fest will be held
			from 11th Nov to 13th Nov. There will be various events like data science hackathons, Robo
			soccer, etc. But we want to discuss an exclusive event that will happen this year. We would
			like to talk about the Entrepreneurship Conclave 2022. This is an event that will help the
			students to showcase their ideas for a start-up in front of some leading investors across the
			region. Now speaking about the event, we invite all the startups and ideas around Chhattisgarh
			state to participate in the conclave and present their ideas to everyone. The best startups
			might attract potential investment from investors. Also if the student is allowed to set the
			counter at Meraz-23 that student may get a prize money based on his/her/their performance. So,
			any student having a product or even an idea can register for the Entrepreneurship Conclave.
		</p>
		<div class="event-info">
			<div class="text value fund">
				<div><span>&#8377;</span>1,00,000</div>
			</div>
			<div class="text value mode">
				<!-- {data.mode}  -->Offline
			</div>
			<div class="poc-col value">
				<br />
				<p>Dhruv Gupta</p>
				<p>+91 9569073087</p>
				<br />
				<p>Chirag Sharma</p>
				<p>+91 8053530044</p>
				<br />
			</div>
			<div>
				<h3 class="key prizeKey">Funding Amount</h3>
			</div>
			<div>
				<h3 class="key modeKey">Event Mode</h3>
			</div>
			<div>
				<h3 class="key pocKey">Point Of Contact</h3>
			</div>
		</div>
		<div class="button-container">
			<a
				target="_blank"
				class="block-2"
				href="https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform"
			>
				<div class="effect btn-ani">
					<button class="reg-btn hover-effect">Register</button>
					<img class="glitter" src="/assets/E_Stars.svg" alt="Glitter" />
				</div>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.bodyy {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(242.28deg, #191b21 -0.41%, rgba(25, 27, 33, 0) 79.12%),
			linear-gradient(
				287.93deg,
				#24262b 0%,
				rgba(36, 38, 43, 0.9145) 68.72%,
				rgba(36, 38, 43, 0.714495) 93.62%,
				rgba(36, 38, 43, 0) 112.6%
			),
			linear-gradient(89.15deg, #332d34 0.77%, rgba(51, 45, 52, 0) 106.07%);
		// background-image: url(/assets/scitech_bg.png);
		// padding-bottom: 10%;
		// background-attachment: fixed;
		// background-size: cover;
		// background-repeat: no-repeat;
	}
	.empty {
		height: 4vh;
	}

	.background {
		position: relative;
		font-size: 20px;
		width: 55vw;
		background-color: transparent;
		padding: 2px;
		padding-bottom: 1px;
		border-radius: 40px;
		left: 10%;
	}

	img {
		// padding: 2px;
		width: 100%;
	}
	// .meraz {
	// 	position: fixed;
	// 	left: 2%;
	// 	top: 7%;
	// 	height: 100vh;
	// 	width: 200px;
	// 	background-color: #5e305a;
	// }
	.title {
		font-family: 'Josefin Sans', sans-serif;
	}
	// .event {
	// 	font-family: 'Oswald', 'cursive';
	// 	font-size: 450%;
	// 	// position: absolute;
	// 	// position: absolute;
	// 	// top: 4%;
	// 	// left: 15%;
	// 	width: 70%;
	// 	// margin-bottom: 5%;
	// 	text-align: center;
	// }
	// .merazimg {
	// 	// position: relative;
	// 	// opacity:0.5;
	// 	// top: 5%;
	// 	width: 100px;
	// 	// left: 20%;
	// }

	.poster {
		position: relative;
		top: 0;
		left: 0;
		margin-top: 6.15%;
		margin-right: 0.0%;
		object-fit: cover;
		width: 40.4vw; 
		height: 40.5vw; 
		overflow: hidden;
		border-radius: 50%;
		// z-index: 1;
	}
	.frame {
		// position: relative;
		// top: 0;
		position: absolute;
		top: 0%;
		left: 0;
		// height: 100%;
		// left: 33.333vw;
	}
	// .poster img {
	// }
	// lite-youtube {
	// 	margin: 1% auto;
	// 	width: 75vw;
	// 	height: 80vh;
	// }
	// p {
	// 	font-family: 'Josefin Sans', sans-serif;
	// }
	.startup {
		// background-color: aqua;
		display: flex;
		justify-content: center;
		// width: 95%;
		// height: 100vh;
		// top: 737.5px;
		// left: 624px;
		// padding: 15px;
		// border-radius: 7.5px;
		// border: 1.5px;
		// gap: 15px;
		// width: 30%;
		// height: auto;
		// background-attachment: fixed;
		// background-size: auto;
		// background-repeat: no-repeat;
		// background-image: url(/assets/startups_img_bg.svg);
	}
	.hero {
		position: relative;
		width: 100%;
		height:57.5vw;
	}
	.start {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		padding-top: 5%;
		padding-bottom: 5%;
		padding-left: 10%;
		padding-right: 10%;
		// position: absolute;
		// top: 27%;
		// width: 40%;
		// left: 55%;
		// line-height: 180%;
		// font-size: large;
	}
	.start > p {
		font-family: Yusei Magic;
		font-size: 1.5rem;
		font-weight: 400;
		line-height: 35px;
		letter-spacing: 0em;
		text-align: center;
	}
	.event-info {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
		// grid-template-rows: repeat(1, 1fr);
		padding: 5vw;
	}
	.text {
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-content: center;
	}
	.key {
		font-family: Yusei Magic;
		font-size: 1.9rem;
		font-weight: 400;
		line-height: 43px;
		letter-spacing: 0em;
		text-align: center;
		text-decoration: underline;
		margin-top: 0px;
	}
	.value {
		font-family: Yusei Magic;
		font-size: 1.3rem;
		font-weight: 400;
		line-height: 29px;
		letter-spacing: 0em;
		text-align: center;
	}
	.value p{
		margin: 0px;
		padding: 0px;
	}
	.fund {
		font-size: 2.8rem;
		color: #ffc727;
	}
	h1 {
		padding: 0;
	}

	.button-container {
		display: flex;
		justify-content: center;
		align-content: center;
		gap: 5%;
		margin-top: 3vh;
		flex-wrap: wrap;
	}
	.hover-effect {
		outline: none;
		width: 192px;
		height: 46.5px;
		border-radius: 7px;
		font-family: Yusei Magic;
		font-size: 1.5rem;
		font-weight: 400;
		letter-spacing: 0em;
		text-align: center;
		border: 1.5px solid #464646;
		transition: all 0.4s;
	}

	.reg-btn {
		color: #fff;
		background: transparent;
	}
	.btn-ani {
		position: relative;
	}
	.block-2 {
		position: relative;
	}
	//////////////////////// Buttons Animation Start/////////////////////////
	.block-2:hover .hover-effect {
		background: #ebb460;
		color: #373737;
		border: 0;
		// width: 205px;
		// height: 42px;
	}

	.glitter {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.glitter {
		opacity: 0;
	}

	.block-2:hover .glitter {
		opacity: 1;
	}
	//////////////////////// Buttons Animation end/////////////////////////

	.but:hover {
		background: linear-gradient(-135deg, black, #9b59b6);
	}

	@media (max-width: 1000px) {
		p {
			font-size: 1rem;
		}
		.empty {
			height: 7vh;
		}
		// .background {
		// 	width: 80vw;
		// 	font-size: 13px;
		// 	left: 5%;
		// }
		// .mains {
		// 	left: 10%;
		// 	top: 12%;
		// }
		// .meraz {
		// 	position: absolute;
		// 	width: 30px;
		// 	top: 0;
		// 	left: 0;
		// 	height: 100%;
		// 	// z-index: ;
		// }
		// .empty2 {
		// 	height: 40px;
		// }
		// .merazimg {
		// 	display: none;
		// }

		// .event {
		// 	// font-size: ;
		// 	// margin-right: -0%;top: ;
		// 	font-size: 300%;
		// 	left: 15%;
		// 	top: 4%;
		// 	text-align: center;
		// }
		// .bodyy {
		// 	height: 110rem;
		// }
		.startup {
			// width: 60%;
			// height: auto;
			// position: relative;
			// padding-top: 50%;
			// left: 21%;
		}
		.start {
			// text-align: justify;
			// position: absolute;
			// top: 40%;
			// width: 80%;
			// left: 10%;
			// line-height: 150%;
			// font-size: large;
			// margin: 10px;
		}
		.event-info {
			grid-template-columns: 1fr;
			grid-template-rows: 0.3fr 0.7fr 0.1fr 0.5fr 0.1fr 0.2fr ;
			// repeat(6, 0.2fr);
			grid-template-areas:
				'prizePool'
				'prizePoolKey'
				'eventMode'
				'eventModeKey'
				'poc'
				'pocKey';
			// gap: 0.1vh;
			margin-top: 10vh;
			// margin-bottom: 70vh;
			//  place-items: center;
		}
		.magic {
			grid-area: prizePool;
		}

		.mode {
			grid-area: eventMode;
		}

		.poc-col {
			grid-area: poc;
		}

		.prizeKey {
			grid-area: prizePoolKey;
		}

		.modeKey {
			grid-area: eventModeKey;
		}

		.pocKey {
			grid-area: pocKey;
		}
		.button {
			height: 45px;
			// margin: 45px 0;
			z-index: 5;
			width: 50%;
			// margin-left: 20%;
		}
	}
</style>
