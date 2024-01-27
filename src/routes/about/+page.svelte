<!-- JAVASCRIPT -->

<script>
	import SectionHeader from "$lib/components/SectionHeader.svelte";
	let heading = "About Meraz 4.0";
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
		<SectionHeader bind:name={heading}/>
	</div>
	<div class="content">
		<div class="bgimg"></div>
		<div class="introheading">
			Discover A new <u style="color: #ffbe4a">YOU</u>.
		</div>
		<br>
		<div class="intro">
			<p>
				Meraz is the Annual Techno cultural fest of IIT Bhilai. Each IIT has a rich legacy of Techno cultural events. WITH Meraz 2024, we continue this age old tradition at IIT Bhilai.
			</p>
			<br>
			<p>
				This Fest is an opportunity for students to showcase their talent and discover new interests. Students from every background get a chance to interact and grow towards a new future. It will be an otherworldly experience filled with humongous possibilities and a glimpse of the future in every field ranging from technology and IT to fashion and culinary arts.
			<br>
				The Multi-Hued facets of Meraz attract students from over a hundred colleges, across India, to witness exhilarating competitions and dazzling demonstrations in every field to compete, learn and perform.					
			</p>
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
		height: 100vh;
		width: 100vw;
		background-color: transparent;
		background-image: linear-gradient(to top right, #161617, #0f1014);
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
</style>
