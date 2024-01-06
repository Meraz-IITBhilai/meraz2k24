<script>
	import SocialLink from './SocialLink.svelte';
	import {
		faFacebookF,
		faInstagram,
		faYoutube,
		faTwitter,
	} from '@fortawesome/free-brands-svg-icons';
</script>

<footer>
	<div class="footer-content">
		<div style="font-size: 18px;">Contact Us</div>

		<div class="links">
			<SocialLink
				icon={faFacebookF}
				href="https://www.facebook.com/meraz.iitbh"
				--hover-color="#3b5998"
			/>
			<SocialLink
				icon={faInstagram}
				href="https://www.instagram.com/meraziitbh"
				--hover-color="#e1306c"
			/>
			<SocialLink
				icon={faYoutube}
				href="https://www.youtube.com/channel/UCs_b3N6z8XZSCY4KUrcQnsQ"
				--hover-color="#f00"
			/>
			<SocialLink icon={faTwitter} href="https://twitter.com/IIT_Bhilai" --hover-color="#1da1f2" />
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		scroll-snap-align: start;
		scroll-padding-top: 75px;
		background-color: var(--bg-primary);
		color: var(--secondary);
		z-index: 8;
		// position: fixed;
    bottom: 0;
    width: 100%;
	}
	.footer-content {
		text-align: center;
		padding: 30px 5%;
	}
	.links {
		margin-top: 1rem;
	}
</style>
