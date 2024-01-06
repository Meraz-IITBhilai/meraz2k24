<script>
	import Hero from './_Hero.svelte';
  import LiteYouTube from 'svelte-lite-youtube-embed'
	import Timer from './_Timer.svelte';
</script>

<svelte:head>
	<title>Meraz '22</title>
</svelte:head>

<div style="background-color:#98B0D2">
<div class="section">

	<!-- <h1>Meraz 22</h1> -->

	<div class="video-container">
		<div class="color-overlay"></div>
		<video class="vidd " autoplay loop muted>
			<source src="/assets/bggg.mp4" type="video/mp4">
		</video>
	</div>
  <div class="timer">
    <Timer />
    <div class="trailer">
      <a href="https://www.youtube.com/watch?v=iDtwPVqDfkA">Trailer Out now</a></div>
  </div>
  
	<img alt="not found" style="display: inline-block" class="newmeraz" src="/assets/newmeraz.png"  srcset="">
	<button class="btn third" ><a href="https://docs.google.com/forms/d/e/1FAIpQLSdbAwPfY7tyRO_wOjbx2Uv7PFvhy8kRZuqDTj-mpfRQT5aA_w/viewform ">Register</a></button>
</div>

<!-- <div class="section1">
    
</div>
<div style="height:200px">
  <video  autoplay loop muted>
    <source src="/assets/bggg.mp4" type="video/mp4">
  </video>
</div> -->


<div class="section1">
  <h1 class="text"> To step up the music meter
  </h1>
  <img alt="not found" class="lost lost2" src="/assets/gaj.png">
  <video  class="video" autoplay loop muted>
      <source src="/assets/Gajendra.mp4" type="video/mp4">
    </video>    
</div>


<div class="section2">
  <video  class="video1" autoplay loop muted>
    <source src="/assets/vipul.mp4" type="video/mp4">
  </video> 
  <h1 class="text1">To tickle your funny bones.
  </h1>
    <img alt="not found" class="vipul" src="/assets/vipulgoyal.png">   
</div>
<div class="section3">
  <video  class="video2" autoplay loop muted>
    <source src="/assets/Neophilis.mp4" type="video/mp4">
  </video> 
  <h1 class="text2"> Rock off Rave on
  </h1>  
  <img alt="not found" class="lost" src="/assets/nemophilis.png">  
</div>
<div class="section4">
  <h1 class="tat" style=" position: absolute;
  color: black;
  top:-3%;
  align-items: center;">Meet our guest speakers</h1>
  <img alt="not found" class="tata" src="/assets/tata.png">
</div>

<!-- <div class="section5">
  <video  class="video2" autoplay loop muted>
    <source src="/assets/Anuv Jain.mp4" type="video/mp4">
  </video> 
  <h1 class="text2">To step up the music meter
  </h1>   
  <img alt="not found" class="lost" src="/assets/anuvjain.png">  
</div> -->

<div class="section2 hitzero">
  <h1 class="eve"> WHEN THE TIMER HITS ZERO,TIME TO GET YOUR GAME FACE ON.
  </h1>
  <a class="but" href="/events"><button class="btn third">Events</button></a>
</div>

</div>
  <!-- <Hero /> -->
<!-- <div class="full">
<Hero />
<section class='glimpses'>
	<div class="title">
	<h1 style='font-weight: normal'>Meraz'22 Teaser</h1>
	</div>
	<iframe src="https://www.youtube.com/embed/W0VIHUbZ680" title="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>



<section class='glimpses'>
	<div class="title">
	<h1 style='font-weight: normal'>Meraz'19 Glimpses</h1>
	</div>
	<iframe src="https://www.youtube.com/embed/fjtuMhY1KK8" title="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>

<section class='glimpses'>
	<div class="title">
	<h1 style='font-weight: normal'>Meraz'18 Glimpses</h1>
	</div>
	<iframe  src="https://www.youtube.com/embed/uOQbTb4-ejs" title="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
</div> -->

<style lang="scss">
  .but{
    // align-self: center;
    top:90%;
    left: 43%;
    position: absolute;
  }
  .vidd{
    transform: translate(-10%,-10%);
  }
  .video{
    position:absolute;
    width:40vw;
    top: 10%;
    left:5%
  }
  .video1{
    position:absolute;
    width:30vw;
    // z-index: ;
    top: 10%;
    // height:100%;
    right:15%  ;
  }
  .video2{
    position:absolute;
    width:40vw;
    top: 15%;
    left:5%
  }
  .eve{
    top: 0;
    color: black;
  }
  .lost{
    position: relative;
    left: 20%;
    width: 20vw;
    top: 0%;
  }
  .vipul{
    position: relative;
    right: 20%;
    width: 20vw;
    top: -3%;
  }
  .text{
    position: absolute;
    color: white;
    right:0px;
    top: 10%;
    width: 40%;
    // height: 100%;
    align-items: center;
  }
  .text1{
    position: absolute;
    color: black;
    width: 40%;
    left: 20%;
    top: 5%;
    // height: 100%;
    align-items: center;
  }
  .text2{
    position: absolute;
    color: white;
    right:0px;
    top: 30%;
    width: 40%;
    // height: 100%;
    align-items: center;
  }
  .tata{
    width: 60vw;
  }
  .mohan{
    width: 20vw;
  }
// 	.full {
// 		background-color: #040406;
// 	}
// 	section {
// 		height: 100vh;
// 		// padding-top: 75px;
// 		scroll-snap-align: start;
// 		scroll-padding-top: 75px;
// 		margin: auto;
// 		display: flex;
// 		flex-direction: column;

// 		.title {
// 			text-align: center;
// 			color: transparent;
// 			font-family: 'Metal Mania';

// 			letter-spacing: 3px;

// 			font-size: 1.3rem;
// 			background-position: -5px;
// 			h1,
// 			a {
// 				background: -webkit-linear-gradient(gold, gold, red);
// 				background-clip: text;
// 				-webkit-background-clip: text;
// 				-webkit-text-fill-color: transparent;
// 			}
// 			h1 {
// 				font-size: 2rem;
// 			}

// 			display: flex;
// 			margin: 0px 30px;
// 			div {
// 				display: flex;
// 				flex-direction: row-reverse;
// 				align-items: center;
// 				flex-grow: 1;
// 			}
// 		}
// 	}	
// iframe{
// 	margin: 1% auto ;
// 	width: 75vw;
// 	height: 80vh;
// }
// .glimpses{
// 	height: 100vh;
// }

// @media screen and (max-width: 900px) {
// 	iframe{
// 		height: 30vh;
// 		width: 90vw;
// 		margin-top: 5vh;
// 		margin-bottom: 0px;
// 	}
// 	.glimpses{
// 		height: 70vh ;
// 		padding : 0px;
// 	}
// }

.newmeraz{
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
  font-family: "Cookie";
  padding: 20px;
  margin: 15px;
  z-index: 1;
  opacity: 0.7;
}
.section h1 {
  text-align: center;
  font-size: 6rem;
  font-family: "Cookie";
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

//Colours







 
.timer{
  z-index : 3;
  position: absolute;
  bottom: 25%;
}
.trailer{
  // z-index : 3;
  background-color: #31E1F7;
		font-family: 'Metal Mania', sans-serif;
		z-index: 3;
		letter-spacing: 3px;
		
		// font-family: nouty;
		// letter-spacing: 3px;

		// background-image: url('/assets/gold-texture.jpg');
		// background-repeat: repeat-x;
		// background-position: 0 0;
		// font-size: 100%;
		text-transform: uppercase;
		text-align: center;
		color: transparent;
		-webkit-font-smoothing: antialiased;

		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
text-align: center;
font-size: 1.7rem;
  // position: absolute;
  // bottom: 30%;
}
// Basic Button Style
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
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out;
  
  &:hover {
    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
  }
}

.section1{
  position: relative;
  // margin-top: 2%;
  width: 100%;
  height:80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  // background-color: black;
  background:url("/assets/gajendra.png") center top/auto 100% no-repeat;

  background-size: contain;
  // background-repeat: no-repeat;
}
.section2{
  position: relative;
  // top:-80px;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  background-color: #98B0D2;
  background-size: contain;
  background-repeat: no-repeat;
} 
.section3{
  position: relative;
  top: -50px;
  width: 100%;
  height:80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:url("/assets/bg2.png") center top/auto 100% no-repeat;
  // background-color: black;
  overflow: visible; 
  background-image: url("/assets/bg2.png");
  background-size: contain;
}
.section4{
  position: relative;
  top:-10%;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  background-color: #98B0D2;
  background-size: contain;
  background-repeat: no-repeat;
}
.section5{
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; 
  background:url("/assets/bg4.png") center top/auto 100% no-repeat;
  // background-color: black;
  background-size: contain;
  // background-repeat: no-repeat;
}
.lost2{
  top:-10%;
}
.hitzero{
  height: 30vh;
}
.eve{
  position: relative;
  top:-20% ;
}
@media (max-width: 900px) {
  .video{
    width:80vw;
    height:80%;
    left:10%;
    right: 10%;
    top: 30%;
  }
  .video1{
    width:80vw;
    // height:80%;
    left:10%;
    right: 10%;
    top: 55%;
  }
  .video2{
    width:80vw;
    height:80%;
    left:10%;
    right: 10%;
    top: 20%;
  }
    .text{
    top: 4%;
    width: 100%;
    height: 100%;
    padding: 4%;
    text-align: justify;
  }
  .lost{
    position: absolute;
    width: 70vw;
    top: 30%;
    left: 15%;
    // margin-bottom: 140px;
  }
  .vipul{
    position: absolute;
    width: 70vw;
    top: 25%;
    right: 20%;
    // margin-bottom: 140px;
  }
  .text1{
    top: 0%;
    width: 100vw;
    // height: 100%;
    left: 6%;
    padding-right: 10%;
    text-align: justify;
  }
  .text2{
    top:10%;
    left: 12%;
    width: 80vw;
    // height: 100%;
  }
  .section1{
    height: 100vh;
    background-size: cover;
  }
  .section2{
    height: 80vh;
    background-size: cover;

  }
  .section3{
    height:80vh;
    background-size: cover;
  }  .section4{
    height: 60vh;
    background-size: cover;

  }
  .tata{
    padding-top: 30%;
    width: 90vw;
  }
  .section5{
    height:80vh;
    background-size: cover;
  }
  .tat {
    left: 4%;
    font-size: 3rem;
  }
  .eve{
    
    font-size: 2rem;
    // text-align: justify;
    padding: 8%;
  }
.hitzero{
  height: 35vh;
}
.but{
  top:100%;
    left: 20%;
}
	}

</style>
