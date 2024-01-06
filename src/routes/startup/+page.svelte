<script>
	//import 'lite-youtube-embed/src/lite-yt-embed.css';
	import { onMount } from 'svelte';
	//onMount(() => import('lite-youtube-embed/src/lite-yt-embed'));
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
		<img alt="not found" class="merazimg" src="assets/meraz_white.png" />
	</div>
	<h1 class="event">STARTUP</h1>


    <div class="startup">
        <img alt="not found" src="assets/startups.png"  srcset="">
    </div>
    <div class="start">
    <p>
        We are hosting Meraz-22 the techno-cult fest of IIT Bhilai, this fest is a platform for students not just from IIT Bhilai but across the region to showcase their talent on the big stage. The fest includes events ranging from fashion to robotics. The 2022 fest will be held from 11th Nov to 13th Nov. There will be various events like data science hackathons, Robo soccer, etc. 
But we want to discuss an exclusive event that will happen this year. We would like to talk about the Entrepreneurship Conclave 2022. This is an event that will help the students to showcase their ideas for a start-up in front of some leading investors across the region.
Now speaking about the event, we invite all the startups and ideas around Chhattisgarh state to participate in the conclave and present their ideas to everyone. The best startups might attract potential investment from investors. Also if the student is allowed to set the counter at Meraz-22 that student may get a prize money based on his/her/their performance. So, any student having a product or even an idea can register for the Entrepreneurship Conclave.
    </p>    
    <div class="button">
		<a href="https://docs.google.com/forms/d/e/1FAIpQLSeCGymKHoU_UmXRFw9HsUJXJwnSUi9bY0QHCerV6g2vRGXRNA/viewform">
        <button   class="but">
            Register
		</a>
      </div>

    </div>

   
</div>

<style lang="scss">

	.bodyy {
		background-image: url(/assets/scitech_bg.png);
		padding-bottom: 10%;
		background-attachment: fixed;
		background-size: cover;
		background-repeat:no-repeat ;
	}
	.empty {
		height: 40px;
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
		padding: 2px;
		width: 100%;
	}
	.meraz {
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
		font-size: 450%;
		// position: absolute;
		position: absolute;
		top:4%;
		left: 15%;
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
    .startup{
        width: 30%;
        height: auto;
        position: relative;
        padding-top:18% ;
        left: 20%;
    }
    .start{
        position: absolute;
        top: 27%;
        width:40%;
        left: 55%;
        line-height: 180%;
        font-size:large;
    }
    h1{
        padding: 0;
    }


/* submit button */
 .button {
// position: absolute;
    height: 45px;
  margin: 45px 0;
  z-index: 5;
  width: 40%;
margin-left: 20%;
}

.but {
  height: 100%;
  width: 100%;
  outline: none;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  background: linear-gradient(135deg, black, #9b59b6);
  transition: all 0.3s ease;
}

.but:hover {
  background: linear-gradient(-135deg,black,  #9b59b6);
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
			font-size: 300%;
			left: 15%;
			top:4%;
			text-align: center;
		}
		.bodyy {
			height: 110rem;
		}
      .startup{
        width: 60%;
        height: auto;
        position: relative;
        padding-top:50% ;
        left: 21%;
      }
      .start{
        text-align:justify;
        position: absolute;
        top: 40%;
        width:80%;
        left: 10%;
        line-height: 150%;
        font-size:large;
        margin: 10px;
      }
		.button{

            height: 45px;
  margin: 45px 0;
  z-index: 5;
  width: 50%;
margin-left: 20%;
        }
		
	}
</style>
