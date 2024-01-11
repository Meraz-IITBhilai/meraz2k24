<script>
	import SectionHeader from "./SectionHeader.svelte";
  import LiteYouTube from 'svelte-lite-youtube-embed'

	let heading = "Aftermovie @ Meraz'22"
</script>

<div class="aftermv-main-container">
	<SectionHeader bind:name={heading}/>
	<div class="aftermv-content-holder">
		<div class="container-1">
		</div>
		<div class="container-2">
		</div>
		<div class="container-3">
			<div class="aftermv-content">
				<LiteYouTube
					videoId="ztJsklsTg8M"
					videoTitle="Meraz 2022 Aftermovie"
					params="enablejsapi=1"
					posterQuality="sddefault"
					posterLoading="eager"
					on:iframeLoaded={(e) => console.log(e.detail.iframe)}
				/>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.aftermv-main-container{
		margin-top: 5em;
		margin-bottom: 5em;
		font-family: BluuNext, "Yusei Magic";
		font-size: 24px;
		text-align: center;
	}
	.aftermv-content-holder{
		position: relative;
		margin-top: 2.5em;
		left: 50%;
		transform: translateX(-50%);
		min-width: 20em;
		width: fit-content;
	}
	.container-1{
		position: absolute;
		height: 100%;
		width: 100%;
		left: -10px;
		top: -6px;
		border: 1px solid var(--primary);
	}
	.container-2{
		position: absolute;
		height: 100%;
		width: 100%;
		left: -5px;
		top: +6px;
		border: 1px solid var(--primary);
	}
	.container-3{
		position: relative;
		border: 1px solid var(--primary);
	}
	.aftermv-content{
		position: relative;
		right: 5px;
		/*padding: 1.5em 1.5em;*/
		margin: 15px;
	}
</style>
