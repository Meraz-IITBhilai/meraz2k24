<script>
	import SocialLink from './SocialLink.svelte';
	import {
		faFacebookF,
		faInstagram,
		faYoutube,
		faTwitter,
	} from '@fortawesome/free-brands-svg-icons';
	import Orbs from './Orbs.svelte';
</script>

<footer>
	<div class="frame">
		<div class="div">
			<div class="div-2">
				<div class="text-wrapper">Address</div>
				<p class="indian-institute-of">
					Indian Institute of Technology Bhilai
					<br />
					Bhilai, Chattisgarh, India 000000
				</p>
			</div>
			<div class="div-3">
				<div class="text-wrapper">Contact number</div>
				<div class="text-wrapper-2">939848000</div>
			</div>
		</div>
		<div class="rectangle" />
		<div class="div-6">
			<div class="text-wrapper-7">Follow us</div>
			<div class="group">
				<Orbs className="orbs-instance" />
				<Orbs className="icon-instance-node" />
				<Orbs className="orbs-2" />
			</div>
		</div>
		<div class="div-4">
			<div class="div-5">
				<div class="text-wrapper-3">Home</div>
				<div class="text-wrapper-3">Events</div>
				<div class="text-wrapper-4">Accommodation</div>
				<div class="text-wrapper-4">Sponsors</div>
			</div>
			<div class="navbar">
				<div class="text-wrapper-5">Startups</div>
				<div class="text-wrapper-5">About</div>
				<div class="text-wrapper-5">Team</div>
				<div class="text-wrapper-5">Contact</div>
			</div>
		</div>
		<div class="div-wrapper">
			<div class="text-wrapper-6">Copyright @ Meraz 4.0</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background-color: rgba(25, 27, 33, 0);
		border-color: #606060;
		border-top-style: solid;
		border-top-width: 1px;
		height: 52.478839177750906vh;
		position: relative;
		width: 100%;
	}
	.frame .div {
		align-items: center;
		display: inline-flex;
		flex-direction: column;
		gap: 24px;
		left: 72px;
		position: absolute;
		top: 38px;
	}

	.frame .div-2 {
		align-items: center;
		display: inline-flex;
		flex-direction: column;
		gap: 12px;
		height: 106px;
		position: relative;
	}
	.frame .text-wrapper {
		color: #ffbe4a;
		font-family: 'Yusei Magic', Helvetica;
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 0;
		line-height: normal;
		margin-top: -1px;
		position: relative;
		width: fit-content;
	}

	.frame .indian-institute-of {
		color: #ffffff;
		font-family: 'Yusei Magic', Helvetica;
		font-size: 18px;
		font-weight: 400;
		height: 78px;
		letter-spacing: 0;
		line-height: normal;
		margin-bottom: -18px;
		position: relative;
		text-align: center;
		width: 393px;
	}
	.frame .div-3 {
		align-items: center;
		display: inline-flex;
		flex: 0 0 auto;
		flex-direction: column;
		gap: 12px;
		position: relative;
	}

	.frame .text-wrapper-2 {
		color: #ffffff;
		font-family: 'Yusei Magic', Helvetica;
		font-size: 18px;
		font-weight: 400;
		letter-spacing: 0;
		line-height: normal;
		position: relative;
		text-align: center;
		width: fit-content;
	}

	.frame .rectangle {
		background-color: #d9d9d9;
		height: 196px;
		left: 619px;
		position: absolute;
		top: 44px;
		width: 202px;
	}

	.frame .div-4 {
		align-items: center;
		display: inline-flex;
		gap: 64px;
		justify-content: center;
		left: 262px;
		position: absolute;
		top: 311px;
	}

	.frame .div-5 {
		align-items: center;
		display: inline-flex;
		flex: 0 0 auto;
		gap: 64px;
		justify-content: center;
		position: relative;
	}

	.frame .text-wrapper-3 {
		color: #bfbfbf;
		font-family: var(--navbar-font-family);
		font-size: var(--navbar-font-size);
		font-style: var(--navbar-font-style);
		font-weight: var(--navbar-font-weight);
		letter-spacing: var(--navbar-letter-spacing);
		line-height: var(--navbar-line-height);
		position: relative;
		width: fit-content;
	}

	.frame .text-wrapper-4 {
		color: #bfbfbf;
		font-family: 'Yusei Magic', Helvetica;
		font-size: 18px;
		font-weight: 400;
		letter-spacing: 0;
		line-height: normal;
		margin-top: -1px;
		position: relative;
		width: fit-content;
	}

	.frame .navbar {
		align-items: center;
		display: inline-flex;
		flex: 0 0 auto;
		gap: 64px;
		position: relative;
	}
	.frame .text-wrapper-5 {
		color: #bfbfbf;
		font-family: var(--navbar-font-family);
		font-size: var(--navbar-font-size);
		font-style: var(--navbar-font-style);
		font-weight: var(--navbar-font-weight);
		letter-spacing: var(--navbar-letter-spacing);
		line-height: var(--navbar-line-height);
		margin-top: -1px;
		position: relative;
		width: fit-content;
	}

	.frame .div-wrapper {
		border-color: #606060;
		border-top-style: solid;
		border-top-width: 0.75px;
		height: 52px;
		left: 0;
		position: absolute;
		top: 380px;
		width: 100%;
	}

	.frame .text-wrapper-6 {
		color: #e0e0e0;
		font-family: 'Yusei Magic', Helvetica;
		font-size: 14px;
		font-weight: 400;
		left: 641px;
		letter-spacing: 0;
		line-height: normal;
		position: absolute;
		top: 15px;
	}

	.frame .div-6 {
		align-items: center;
		display: inline-flex;
		flex-direction: column;
		gap: 32px;
		left: 981px;
		position: absolute;
		top: 47px;
	}

	.frame .text-wrapper-7 {
		color: #ffbe4a;
		font-family: 'Yusei Magic', Helvetica;
		font-size: 24px;
		font-weight: 400;
		letter-spacing: 0;
		line-height: normal;
		margin-top: -1px;
		position: relative;
		text-align: center;
		width: fit-content;
	}

	.frame .group {
		height: 111.28px;
		position: relative;
		width: 392.21px;
		justify-content: space-around;
		flex-direction: row;
		display: flex;
	}

	.frame .orbs-instance {
		height: 112px !important;
		left: 0 !important;
		position: absolute !important;
		top: 0 !important;
		width: 92px !important;
	}

	.frame .icon-instance-node {
		height: 112px !important;
		left: 150px !important;
		position: absolute !important;
		top: 0 !important;
		width: 92px !important;
	}

	.frame .orbs-2 {
		height: 112px !important;
		left: 300px !important;
		position: absolute !important;
		top: 0 !important;
		width: 92px !important;
	}
</style>
