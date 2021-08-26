<script>
	import { onMount } from 'svelte';

	import Title from './layers/Title.svelte';
	import Signs from './layers/Signs.svelte';
	import Rocks from './layers/Rocks.svelte';
	import Treeline1 from './layers/Treeline1.svelte';
	import Treeline2 from './layers/Treeline2.svelte';
	import Treeline3 from './layers/Treeline3.svelte';
	import Birds from './layers/Birds.svelte';
	import Mountains1 from './layers/mountains1.svelte';
	import Mountains2 from './layers/mountains2.svelte';
	import Mountains3 from './layers/mountains3.svelte';
	import Sun from './layers/Sun.svelte';

	let parallax;
	let baseOrientation;

	const SCALE = '1.2';

	onMount(() => {
		const children = parallax.children;

		for (const index in children) {
			const child = children[index];

			if (child.classList && !child.classList.contains('no-scale')) {
				// Scale children
				child.style.transform = `scale(${SCALE})`;

				// Add event to update children when mouse moves
				document.addEventListener('mousemove', (e) => {
					let { innerWidth, innerHeight } = window;
					let offX = e.pageX - innerWidth * 0.5;
					let offY = e.pageY - innerHeight * 0.5;

					const speed = (index) * 2.1;
					const x = (offX * speed) / 100;
					const y = (offY * speed) / 100;
					child.style.transform = `scale(${SCALE}) translateX(${x}px) translateY(${y}px)`;
				});
				document.addEventListener('mouseleave', (e) => {
					child.style.transform = `scale(${SCALE})`;
				});
				/*
        // Device orientation is too slow on andriod and requires permissions on iOS
				if (window.DeviceOrientationEvent) {
					window.addEventListener(
						'deviceorientation',
						(e) => {
							if (!baseOrientation) {
								baseOrientation = e;
							} else {
								let offX = e.alpha - baseOrientation.alpha * 0.5;
								let offY = e.beta - baseOrientation.beta * 0.5;

								const speed = (index + 1) * 0.2;
								const x = (offX * speed) / 100;
								const y = (offY * speed) / 100;
								child.style.transform = `scale(${SCALE}) translateX(${x}px) translateY(${y}px)`;
							}
						},
						true
					);
				}
        */
			}
		}
	});
</script>

<div class="parallax" style="--background: {'#FFE2D0'}" bind:this={parallax}>
	<div class="layer"><Sun /></div>
	<div class="layer no-scale"><Title /></div>
	<div class="layer"><Mountains3 /></div>
	<div class="layer"><Mountains2 /></div>
	<div class="layer"><Birds /></div>
	<div class="layer"><Mountains1 /></div>
	<div class="layer"><Treeline3 /></div>
	<div class="layer"><Treeline2 /></div>
	<div class="layer"><Treeline1 /></div>
	<div class="layer"><!-- <Rocks /> --></div>
	<div class="layer no-scale"><Signs /></div>
</div>

<style lang="scss">
	.parallax {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background-color: var(--background);
		overflow: hidden;

		.layer {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 100%;
			transition: transform 0.1s;

			@media (max-aspect-ratio: '1.2/1') {
				transform: none !important;
			}
			@media (orientation: portrait) {
				transform: none !important;
			}

			:global(svg) {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;

				@media (max-aspect-ratio: '1.2/1') {
					width: unset;
					left: 50%;
					transform: translateX(-50%);
					height: 100%;
				}
				@media (orientation: portrait) {
					width: unset;
					left: 50%;
					transform: translateX(-50%);
					height: 100%;
				}
			}
		}
	}
</style>
