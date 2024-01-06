<script>
	//import 'lite-youtube-embed/src/lite-yt-embed.css';
	import { onMount } from 'svelte';
	// onMount(() => import('lite-youtube-embed/src/lite-yt-embed'));
</script>

<svelte:head>
	<title>ABOUT | Meraz '22</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap"
		rel="stylesheet"
	/>
	<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet">
</svelte:head>
<div class="bodyy">
	<!-- <div class="empty">

	</div> -->
	<div class="meraz">
		<img alt="not found" class="merazimg" src="/assets/meraz_white.png" />
	</div>
	<h1 class="event">ABOUT MERAZ</h1>

	<div class="mains">
		<div class="background">
			<p align="justify">Discover A new YOU.</p>
			<p align="justify">
				Meraz is the Annual Techno cultural fest of IIT Bhilai. Each IIT has a rich legacy of Techno
				cultural events. WITH Meraz 2022, we continue this age old tradition at IIT Bhilai.
			</p>
			<p align="justify">
				This Fest is an opportunity for students to showcase their talent and discover new
				interests. Students from every background get a chance to interact and grow towards a new
				future. It will be an otherworldly experience filled with humongous possibilities and a
				glimpse of the future in every field ranging from technology and IT to fashion and culinary
				arts.
			</p>
			<p align="justify">
				The Multi-Hued facets of Meraz attract students from over a hundred colleges, across India,
				to witness exhilarating competitions and dazzling demonstrations in every field to compete,
				learn and perform.
			</p>

            <div style="height: 30px" class="empty"></div>

			<section class="glimpses">
				<div class="title">
					<h1 style="font-weight: normal">MERAZ'22 TRAILER</h1>
				</div>
				<iframe class="youtube"
					src="https://www.youtube.com/embed/iDtwPVqDfkA"
					title="Meraz'19 Trailer"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</section>

            <div class="empty"></div>
			<section class="glimpses">
				<div class="title">
					<h1 style="font-weight: normal">MERAZ'19 GLIMPSES</h1>
				</div>

                <iframe class="youtube"
                src="https://www.youtube.com/embed/fjtuMhY1KK8"
                title="Meraz'19 Trailer"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
				/>
			</section>

            <div class="empty"></div>
			<section class="glimpses">
				<div class="title">
					<h1 style="font-weight: normal">MERAZ'18 GLIMPSES</h1>
				</div>
                <iframe class="youtube"
					src="https://www.youtube.com/embed/uOQbTb4-ejs"
					title="Meraz'19 Trailer"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</section>
			<div class="empty2">

			</div>
		</div>
	</div>

</div>

<style lang="scss">
	.bodyy {
		background-image: url(/assets/about_bg.png);
		padding-bottom: 170%;
		height: 350vh;
		background-attachment: fixed;
		background-size: cover;
		background-repeat:no-repeat ;
	}
	.empty {
		height: 40px;
	}
    
	.mains {
		position: absolute;
		top: 10%;
		left: 22%;
		margin-bottom: 30px;
		margin-right: 0px;
	}
    .youtube{
        height: 70vh;
        width: 60vw;
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
	.img1 {
		// border-radius: 40px 0 0 40px;
	}
	.img4 {
		// border-radius: 0 40px 40px 0 ;
	}
	img {
		padding: 2px;
		width: 100%;
	}
	.meraz {
		z-index: 9;
		position: fixed;
		left: 2%;
		top: 7%;
		height: 100vh;
		width: 200px;
		background-color: #5E305A;
	}
	.title{
		font-family: 'Josefin Sans', sans-serif;
	}
	.event {
		font-family: 'Oswald', 'cursive';
		font-size: 500%;
		// position: absolute;
		position: absolute;
		top:2%;
		left: 20%;
		width: 70%;
		margin-bottom: 5%;
		text-align: center;
		
	}
	.merazimg {
		position: relative;
		// opacity:0.5;
		top: 5%;
		width: 100px;
		left: 20%;
	}

	.poster {
		object-fit: cover;
	}
	lite-youtube {
		margin: 1% auto;
		width: 75vw;
		height: 80vh;
	}
	p{
		font-family: 'Josefin Sans', sans-serif;
	}
	@media (max-width: 900px) {

		p{
			font-size: 1rem;
		}
		.empty {
			height: 100px;
		}
		.background {
			width: 80vw;
            font-size: 13px;
			left: 5%;
		}
		.mains {
			left: 10%;
			top: 12%;
			
		}
		.meraz{
			position: absolute;
			width:30px;
			top:0;
			left:0;
			height: 100%;
			// z-index: ;
		}
		.empty2{
			height: 40px;
		}
		.merazimg{
			display: none;
		}

		.event {
			// font-size: ;
			// margin-right: -0%;top: ;
			font-size: 270%;
			left: 15%;
			top:4%;
			text-align: center;
		}
		.bodyy {
			height: 95rem;
		}
        .youtube{
        height: auto;
        width: 80vw;
    }
		lite-youtube {
			height: 30vh;
			width: 90vw;
			margin-top: 5vh;
			margin-bottom: 0px;
		}
		.glimpses {
			height: 25vh;
		}
		
	}
</style>
