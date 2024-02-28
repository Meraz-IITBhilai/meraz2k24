<script>

	import SectionHeader from '$lib/components/SectionHeader.svelte';
import { collapsingNavbar } from '$lib/stores';

	$collapsingNavbar = false;

</script>
<svelte:head>
	<title>Events | Meraz'24</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald:wght@500&family=Silkscreen&display=swap" rel="stylesheet">
</svelte:head>

<div class="root">
	<SectionHeader name="Events"/>
	<div class="mains">
		<div class="background">
			<a href="/events/culturals"><img alt="not found" class="img2 imag" src="/assets/culturals.png"></a>
			<a href="/events/scitech"><img alt="not found" class="img3 imag" src="/assets/scitech.png"></a>
			<a href="/events/informals"><img alt="not found" class="img4 imag" src="/assets/informal.png"> </a>
		</div>
	</div>

</div>


<style lang="scss">
	.root{
		background-image: url(/assets/bg_event.png);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		padding-bottom: 55%;
	}
	.mains{
		position: absolute;
		top:2%;
		left:22%;
		margin-bottom: 30px;
		margin-right: 0px;
	}
	.background{
		position: relative;
		display: flex;
		flex-direction:row;
		width:50vw;
		background-color: transparent;
		padding: 2px;
		padding-bottom: 1px;
		border-radius: 40px;
		left:10%;
	}
	.imag{
		transition: .2s all;
	}
	
	.imag:hover{
		border: 2px solid rgb(117, 255, 227);
		transform: scale(1.2);
	}

	img{
		padding: 2px;
		width:100%;
	}

@media (max-width: 900px) {
	.background{
		display:none;
		width: 80vw;

		left: 5%;
	}
		.mains{
			left:10%;
			top:10%;
		}
		.root{
			padding-bottom: 200%;
		}
}
</style>
