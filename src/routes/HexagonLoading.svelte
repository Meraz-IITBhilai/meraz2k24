<script>
	export let percent;
	export let isPageLoaded;

	let disp = 'none';
	$: disp = isPageLoaded ? 'none' : 'block';
</script>

<div class="loader">
	<div id="wrapper" class="center">
		<svg class="progress hexagon noselect" viewBox="-10 -10 120 135">
			<polygon
				class="fill"
				style={`stroke-dasharray: ${percent * 3.04} 360;`}
				points="50,1 95,25 95,75 50,99 5,75 5,25"
			></polygon>
			<polygon
				class="blurry-boundary"
				style={`stroke-dasharray: ${percent * 3.04} 360;`}
				points="50,1 95,25 95,75 50,99 5,75 5,25"
			></polygon>
			<text class="value" x="42%" y="42%">{percent}%</text>
		</svg>
	</div>
	{#each { length: 150 } as _, i}
		<div class="firefly"></div>
	{/each}
</div>

<style lang="scss">
	.loader {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: grid;
		place-items: center;
		background-color: black;
		z-index: 9999;
	}

	#wrapper {
		position: relative;
	}

	.progress {
		width: 20rem;
		height: 22rem;
	}

	.progress .fill {
		fill: rgba(0, 0, 0, 0);
		stroke-width: 2;
		stroke: #f3c156;
		stroke-linecap: round;
		box-shadow: 10px 10px 10px 5px #f3c156;
		transition:
			stroke-dasharray 100ms,
			box-shadow 100ms;
	}
	.blurry-boundary {
		fill: none;
		stroke: rgba(243, 193, 86, 0.5);
		stroke-width: 6;
		filter: blur(4px); 
		animation: glow 1s infinite alternate;
	}

	@keyframes glow {
		0% {
			stroke-width: 6;
		}
		100% {
			stroke-width: 10;
		}
	}

	.progress .value {
		font-family: 'Open Sans';
		fill: white;
		text-anchor: middle;
		font-size: 16px;
	}

	.noselect {
		user-select: none;
		cursor: default;
	}

	$quantity: 150;

	.firefly {
		position: fixed;
		left: 50%;
		top: 50%;
		width: 0.4vw;
		height: 0.4vw;
		margin: -0.2vw 0 0 9.8vw;
		animation: ease 200s alternate infinite;
		pointer-events: none;

		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: 50%;
			transform-origin: -10vw;
		}

		&::before {
			background: black;
			opacity: 0.4;
			animation: drift ease alternate infinite;
		}

		&::after {
			background: white;
			opacity: 0;
			box-shadow: 0 0 0vw 0vw yellow;
			animation:
				drift ease alternate infinite,
				flash ease infinite;
		}
	}

	@for $i from 1 through $quantity {
		$steps: random(12) + 16;
		$rotationSpeed: random(10) + 8s;

		.firefly:nth-child(#{$i}) {
			animation-name: move#{$i};

			&::before {
				animation-duration: #{$rotationSpeed};
			}

			&::after {
				animation-duration:
					#{$rotationSpeed},
					random(6000) + 5000ms;
				animation-delay:
					0ms,
					random(8000) + 500ms;
			}
		}

		@keyframes move#{$i} {
			@for $step from 0 through $steps {
				#{$step * calc(100 / $steps)}% {
					transform: translateX(random(100) - 50vw)
						translateY(random(100) - 50vh)
						scale(random(75) / 100 + 0.25);
				}
			}
		}
	}

	@keyframes drift {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes flash {
		0%,
		30%,
		100% {
			opacity: 0;
			box-shadow: 0 0 0vw 0vw yellow;
		}
		5% {
			opacity: 1;
			box-shadow: 0 0 2vw 0.4vw yellow;
		}
	}
</style>
