<!-- JAVASCRIPT -->

<script>
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	import AftermovieSection from "$lib/components/AftermovieSection.svelte";
	let meraz2022 = "ztJsklsTg8M";
	let meraz2019 = "fjtuMhY1KK8";
	let meraz2018 = "uOQbTb4-ejs";
	let vhead2022 = "Aftermovie'22";
	let vhead2019 = "Aftermovie'19";
	let vhead2018 = "Aftermovie'18";
</script>


<!-- SVELTE -->

<svelte:head>
	<title>About | Meraz'24</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap" rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
</svelte:head>


<!-- HTML STRUCTURE -->

<div>
	<div class="aboutmeraz">	
		<SectionHeader name="About Meraz 4.0"/>
	</div>
	<div class="content">
		<div class="bgimg"></div>
		<div class="introheading">
			Discover A new <u style="color: #ffbe4a">YOU</u>.
		</div>
		<br>
		<div class="intro">
			<p> Welcome to Meraz 4.0, IIT Bhilai's yearly techno-cultural festival; the vivacious spectacle that breaks through barriers and stokes passions. Meraz, which is rooted in the long history of techno-cultural events IIT Bhilai, is a tribute to our dedication to developing talent and promoting an exploratory and growing attitude. </p>
			<br/>
			<p> It's where diverse talents converge, and horizons expand. No matter their background, everyone has the chance to showcase skills, forge new connections, and chart the course towards a dynamic future. From the intricacies of technology and IT to the elegance of fashion and the artistry of culinary pursuits, Meraz presents a tantalizing glimpse of what's to come. </p>
			<br/>
			<p> Join us on this exhilarating journey at Meraz, where you're invited to discover a new you, witness the kindling and confluence of talents, immerse your senses in an extravaganza which promises to not only paint the campus in a myriad of bright hues, but also to splash those paints on all those who attend it, so that you leave with memories ever so colourful! </p>
			<br/>
		</div>

		<br>
		<br>

		<AftermovieSection bind:vid={meraz2022} bind:vhead={vhead2022}/>
		<AftermovieSection bind:vid={meraz2019} bind:vhead={vhead2019}/>
		<AftermovieSection bind:vid={meraz2018} bind:vhead={vhead2018}/>
	</div>
	
</div>


<!-- CSS STYLING -->

<style lang="scss">
	* {
		margin: 0;
		box-sizing: border-box;	
	}

	.aboutmeraz {
		text-align: center;
		font-family: 'BluuNext', 'Yusei Magic', sans-serif;
		display: table-cell;
		vertical-align: middle;
		height: calc(100vh - 80px);
		width: 100vw;
		background-color: transparent;
		background-image: url(/assets/about-head.webp);
		background-size: cover;
		background-position-x: center;
		background-position-y: top;
	}

	.content {
		padding: 11vw;
		width: 100%;
		position: relative;
		font-size: 3vh;
		font-family: 'Yusei Magic', sans-serif;
		text-align: center;
		line-height: 5vh;
	}

	.introheading {
		font-size: 5vh;
	}

	.intro, .introheading {
		position: relative;
		z-index: 100;
	}

	.bgimg {
		position: absolute;
		top: 0;
		left: 0;
		background-image: url("assets/aboutBgImg.png");
		background-size: cover;
		width: 100%;
		height: 100%;
		z-index: -100;
	}

	@media (max-width: 480px) {
		.intro > p{
			font-size: 1rem;
			text-align: justify;
		}
		.introheading{
			line-height: 3.5rem;
		}
	}
</style>
