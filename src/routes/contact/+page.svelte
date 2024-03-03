<script>
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
	
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	let heading = "Contact Us";

	let isClicked=false;
	function handleClick() {
		isClicked=!(isClicked);
		console.log(isClicked);
	}
	let isClicked2=false;
	function handleClick2() {
		isClicked2=!(isClicked2);
		console.log(isClicked2);
	}
	let isClicked3=false;
	function handleClick3() {
		isClicked3=!(isClicked3);
		console.log(isClicked3);
	}
	let isClicked4=false;
	function handleClick4() {
		isClicked4=!(isClicked4);
		console.log(isClicked4);
	}
	let isClicked5=false;
	function handleClick5() {
		isClicked5=!(isClicked5);
		console.log(isClicked5);
	}
	let isClicked6=false;
	function handleClick6() {
		isClicked6=!(isClicked6);
		console.log(isClicked6);
	}
</script>

<svelte:head>
	<title>Contact | Meraz'24</title>
	<link
		href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
</svelte:head>

<div class ="back">
	<div class="aboutmeraz">	
		<SectionHeader bind:name={heading}/>
	</div>

	<div class="parent" style="background:rgb(66, 66, 66, 25%);	border-radius: 12px;">
		<div class="top">
			<iframe
				title="IIT Bhilai Map"
				id="map-iframe"
				src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=IIT%20Bhilai+(Meraz)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
			/>
		</div>
		<div class="bottom">
			<div class="team" id="info">
				<h2>
					<Fa icon={faPhoneAlt}/>
					<span>Phone</span>
				</h2>
				<div class='nonhiddenInfo'>
					<div id="poc">
						<p>Elavartha Nikhil Reddy (CoSA Events Head)  - 8790367047</p>
						<p>Sooraj Reddy (CoSA President) - 9391436084</p>
						<p>Atharva Bhatnagar (CoSA Treasurer) - 8447973545</p>
					</div>
				</div>
			</div>

			<div class="team" id="info">
				<h2>
					<Fa icon={faEnvelope}/>
					<span>E-mail</span>
				</h2>
				<div class='nonhiddenInfo'>
					<div id="poc">
						<p><a href="mailto:eventshead_cosa@iitbhilai.ac.in">eventshead_cosa@iitbhilai.ac.in </a></p>
						<p><a href="mailto:President_CoSA@iitbhilai.ac.in">president_CoSA@iitbhilai.ac.in </a></p>
					</div>
				</div>
			</div>

			<div class="team" id="info">
				<h2>
					<Fa icon={faPhoneAlt}/>
					<span>Address</span>
				</h2>
				<div class='nonhiddenInfo'>
					<div id="poc">
						<p>
							Indian Institute of Technology Bhilai <br>
							Kutelabhata, Durg Chhattisgarh <br>
							India - 491001
						</p>
					</div>
				</div>
			</div>
			<div class="team" id="info" on:click={handleClick}>
				<h2>
					<Fa icon={faEnvelope} />
					<span>Registration and Help Desk</span>
				</h2>
				<div class='nonhiddenInfo'>
				<!-- <div class={isClicked ? 'hiddenInfo' : 'blank'}> -->
					<div id="poc">
						<p>Shreya Nukala - 8185820990</p>
						<p>Sanyam Sharma - 8360795487</p>
					</div>
				</div>
			</div>

			<div class="team" id="info" on:click={handleClick2}>
				<h2>
					<Fa icon={faEnvelope} />
					<span>Transportation</span>
				</h2>
				<div class='nonhiddenInfo'>
				<!-- <div class={isClicked2 ? 'hiddenInfo' : 'blank'}> -->
					<div id="poc">
						<p>Prasanth - 7337599501</p>
					</div>
				</div>
			</div>

			<div class="team" id="info" on:click={handleClick3}>
				<h2>
					<Fa icon={faEnvelope} />
					<span>Hospitality</span>
				</h2>	
				<div class='nonhiddenInfo'>
				<!-- <div class={isClicked3 ? 'hiddenInfo' : 'blank'}> -->
					<div id="poc">
						<p>Sudeep Ranjan Sahoo - 6372432280</p>
						<p>Ishita Saxena - 9454777711</p>
					</div>
				</div>
			</div>

			<div class="team" id="info" on:click={handleClick4}>
				<h2>
					<Fa icon={faEnvelope} />
					<span>Security</span>
				</h2>
				<div class='nonhiddenInfo'>
				<!-- <div class={isClicked4 ? 'hiddenInfo' : 'blank'}> -->
					<div id="poc">
						<p>Rajvardhan - 7898547042</p>
						<p>Ayushman Tripathi - 6265844927</p>
					</div>
				</div>
			</div>
			
			<div class="team" id="info" on:click={handleClick5}>
				<h2>
					<Fa icon={faEnvelope} />
					<span>Ground Force</span>
				</h2>
				<div class='nonhiddenInfo'>
				<!-- <div class={isClicked5 ? 'hiddenInfo' : 'blank'}> -->
					<div id="poc">
						<p>M Ramesh Naik - 9392783638</p>
						<p>B Vamshi Krishna - 7732004234</p>
					</div>
				</div>
			</div>	

			<div class="team" id="info" on:click={handleClick6}>
				<h2>
					<Fa icon={faEnvelope} />
					<span>Sponsorship</span>
				</h2>
				<div class='nonhiddenInfo'>
				<!-- <div class={isClicked6 ? 'hiddenInfo' : 'blank'}> -->
					<div id="poc">
						<p>Sanskar Pathak - 7415756769</p>
						<p>Akash Patel - 9460568832</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	* {
		color: white;
	}
	#info {
		padding: 20px;
		// cursor: pointer;
	}
	.hiddenInfo {
		display: none;
		padding: 10px;
		margin-top: 10px;
	}
	.nonhiddenInfo {
		padding: 10px;
		margin-top: 10px;
	}
	.team {
		width: 30%;
		padding: 15px;
		color: black;
		text-align: center;
		min-width: 350px;
	}
	.bottom {
		margin-top: 10px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 50px;
		flex-wrap: wrap;
	}

	.back{
		background-image: url("/assets/hero_bg2.jpg");
		height: auto;
		padding: 10px;
		background-repeat:no-repeat;
		background-size: cover;
	}

	.parent { 
		scroll-snap-align: start;
		scroll-margin-top: 75px;
		
		object-fit: cover;
		border-radius: 12px;
		margin: 10px;
		border-width: 3px;
		border-style: solid;
		border: 1 round solid rgb(177, 177, 177);
		// border-image: linear-gradient(135deg, #161616, rgb(58, 58, 59), rgb(146, 149, 148), #f7fbf9) 1 round;
	}

	.top {
		display: flex;
	}

	span{
		font-family: 'Josefin Sans',sans-serif;
	}

	h2 {
		font-weight: normal;
		font-family: 'Oswald', cursive;
		span {
			color: transparent;
			background: rgb(255, 255, 255);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}

	iframe {
		width: 100%;
		margin: 40px;
		height: 460px;
	}
	@media (min-width: 800px) {
		.parent {
			margin: 75px;
			padding: 10px;
		}
	}
	@media (max-width: 800px) {
		.back{
			height: auto;
		}
		.parent {
			flex-direction: column;
		}
		iframe {
			margin: 20px;
			width: 90%;
			height: 200px;
		}
		.team {
			min-width: 100%;
		}
	}
</style>
