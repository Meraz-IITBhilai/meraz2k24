<script>
</script>

<footer>
	<div class="frame">
		<div class = "contact-us">
			<div class = "left">
				<div class = "address">
					<p class = "title">Address</p>
					<p class="content">
						Indian Institute of Technology Bhilai
						<br />
						Bhilai, Chattisgarh, India 000000
					</p>
				</div>
				<div class = "address">
					<p class="title">Contact Number</p>
					<p class = "content">939848000</p>
				</div>
			</div>
			<div class = "rectangle">
				<img
					src="/assets/logo.svg"
					width="100%"
					class="logo"
				/>
			</div>
			<div class = "address">
				<p class="title">Follow Us</p>
				<div class = "group">
					<div class = "block-1"><img src="/assets/orbs_before_hover.svg" width="93px" class="image-6"><img src="/assets/orb_insta_h.svg" width="93px" class="image-7"></div>
					<div class = "block-1"><img src="/assets/orb_yt.svg" width="93px" class="image-6"><img src="/assets/orb_yt_h.svg" width="93px" class="image-7"></div>
					<div class = "block-1"><img src="/assets/orb_fb.svg" width="93px" class="image-6"><img src="/assets/orb_fb_h.svg" width="93px" class="image-7"></div>
					
				</div>
			</div>
		</div>
		<div class="nav">
			<a href="/" class="text-wrapper-3">Home</a>
			<a href="/events" class="text-wrapper-3">Events</a>
			<a href="#" class="text-wrapper-3">Accommodation</a>
			<a href="/sponsors" class="text-wrapper-3">Sponsors</a>
			<a href="/startup" class="text-wrapper-3">Startups</a>
			<a href="/about" class="text-wrapper-3">About</a>
			<a href="/team" class="text-wrapper-3">Team</a>
			<a href="/contact" class="text-wrapper-3">Contact</a>
		</div>
		
		<div class="copyright">
			<h3 class = "text-wrapper-6">Copyright @ Meraz 4.0</h3>
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: rgba(25, 27, 33, 0);
		border-color: #606060;
		border-top-style: solid;
		border-top-width: 1px;
		position: relative;	
	}

	.frame {
    display: flex;
    flex-direction: column;
    height: inherit;
    width: inherit;
}
.contact-us {
    display: flex;
    flex-direction: row;
    height: auto;
	justify-content: space-evenly;
	width: auto;
	padding: 10px;
	margin: 10px;
	align-items: center;
	flex-wrap: wrap;
}
.left {
    display: flex;
    flex-direction: column; 
	position: relative;

}
 .address {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.title {
    color: #ffbe4a;
    font-family: 'BluuNext', 'Yusei Magic', Helvetica;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
}
.content {
    color: #ffffff;
    font-family: 'Yusei Magic', Helvetica;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
}
.rectangle{
		width: 14%; 
		min-width: 196px;
		height: 196px; 
}
.logo{
	width: 100%;
	height: 100%;
	transform: scale(1.3);
}

.group{
		flex-direction: row;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 2.5vw;
		align-items: center;
}

	.copyright {
		display: block;
		height: auto;
		align-content: center;
		border-top:solid;

	}
	.text-wrapper-3 {
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
	.text-wrapper-6 {
		color: #e0e0e0;
		font-family: 'Yusei Magic', Helvetica;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0;
		line-height: normal;
		position: relative;
		text-align: center;
	}
	.nav {
    height: auto;
    display: flex;
    direction: row;
	flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
	font-size: large;
	padding: 5%;
	margin-left: 10%; 
	margin-right: 10%;
		
}

a {
    color: #bfbfbf;
    font-family: var(--navbar-font-family);
    font-size: var(--navbar-font-size);
    font-style: var(--navbar-font-style);
    font-weight: var(--navbar-font-weight);
    letter-spacing: var(--navbar-letter-spacing);
    line-height: var(--navbar-line-height);
    position: relative;
    width: fit-content;
    text-decoration: none;
    margin: 0 10px; 
}

a:hover {
    color: #ffffff;
}
.block-1 {
  position: relative;
  width: 93px; 
  height: 112px;
}
.image-6,
.image-7 {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 0.4s ease-in-out; 
}

.image-7 {
  opacity: 0;
  transform: scale(1.2);
}

.block-1:hover .image-7 {
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.4s ease-in-out; 
}

.block-1:hover .image-6 {
  opacity: 0;
  transform: scale(1); 
}

</style>
