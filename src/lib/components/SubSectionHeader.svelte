<script>
	/** @type {string} */
	export let name = '';
	export let padding = 1;
</script>

<div class="root">
	<div class="heading-text" style="padding-left:{padding}rem;">
		{name}
    </div>
</div>

<style lang="scss">
	.root {
		position: relative;
		display: flex;
		justify-content: center;
		font-family: 'Yusei Magic';
		max-width: 100vw;
		color: #ffbe4a;
	}


	.heading-text {
        font-size: 3rem;
		justify-content: center;
		align-items: center;
	}

    @media (max-width: 768px) {
		.heading-text {
			font-size: 2.7rem;
		}
	}

	@media (max-width: 480px) {
		.heading-text {
			font-size: 2.5rem;
		}
	}

</style>
