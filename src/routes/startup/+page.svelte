<script>
	import SectionHeader from '../../lib/components/SectionHeader.svelte';
</script>

<svelte:head>
	<title>E-Conclave | Meraz'24</title>
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
	<SectionHeader name="E-Conclave" />
		<div class="hero startup">
		<img class="poster" alt="not found" src="/assets/sponsors/meraz.png" srcset="" />
		<img class="frame" alt="not found" src="/assets/startups_img_bg.svg" srcset="" />
		</div>
	<!-- </div> -->
	<div class="start">
		<p>
Welcome to Meraz, the annual techno-cultural fest of IIT
Bhilai. This vibrant production dismantles barriers and
arouses emotions. Meraz 4.0 is a monument to our drive
to foster talent and promote a curious, forward-thinking
mentality. Its beginnings can be discovered in the long
history of IIT Bhilai's techno-cultural activities. Regardless
of background, it's where people with different skills
come together and their horizons open up. 
	</p>
	<p>
Aim to bridge the gap between budding entrepreneurs and the
resources they need to thrive in the competitive business
landscape
	</p>
	<p>
We believe in nurturing the seeds of creativity, guiding startup
enthusiasts through the intricate pathways of business, and
ultimately, propelling them towards the zenith of success
	</p>
	<p>
Mission to inspire, educate, and connect aspiring entrepreneurs
	</p>
	<p>
It serves as the ultimate bridge between aspiring entrepreneurs
and the dynamic world of business, providing a space for
inspiration, mentorship, and investment opportunities.
		</p>
		<div class="event-info">
			<div class="text value fund">
				<div><span>&#8377;</span> 21 Cr. +</div>
			</div>
			<div class="text value mode">
				<!-- {data.mode}  -->Offline
			</div>
			<div class="poc-col value">
				<br />
				<p>Sudeep Ranjan Sahoo</p>
				<p>+91 6372 432 280</p>
				<br />
				<p>Hasitha Gorerpati</p>
				<p>+91 63013 03292</p>
				<p></p>
				<br />
				<p>Gunthi Varshini</p>
				<p>+91 80965 67259</p>
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
				href="https://docs.google.com/forms/d/e/1FAIpQLSeb4SRS9roSbfQv6wQzdmase5WxYgPTEzFNgjcEjpGn9ppx4A/viewform?usp=sf_link"
			>
				<div class="effect btn-ani">
					<button class="reg-btn hover-effect">Register</button>
	<!--<img class="glitter" src="/assets/E_Stars.svg" alt="Glitter" />-->
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
	}
	.empty {
		height: 4vh;
	}
	img {
		width: 100%;
	}
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
	}
	.frame {
		position: absolute;
		top: 0%;
		left: 0;
	}
	.startup {
		display: flex;
		justify-content: center;
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
		grid-template-columns: repeat(3, 1fr);
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
	}

	/*.glitter {
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
	}*/
	//////////////////////// Buttons Animation end/////////////////////////

	@media (max-width: 1000px) {
		p {
			font-size: 1rem;
		}
		.empty {
			height: 7vh;
		}
		.event-info {
			grid-template-columns: 1fr;
			grid-template-rows: 0.3fr 0.7fr 0.1fr 0.5fr 0.1fr 0.2fr ;
			grid-template-areas:
				'prizePool'
				'prizePoolKey'
				'eventMode'
				'eventModeKey'
				'poc'
				'pocKey';
			margin-top: 10vh;
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
	}
</style>
