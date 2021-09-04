<script>
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<div class="background" />

<div class="wrapper">
	<slot />

	<nav>
		<Button href="/admin/manage">Manage</Button>
		<Button href="/admin/create" color="blue">Create</Button>
		<Button href="/admin/settings">Settings</Button>
	</nav>

</div>

<style lang="scss">
	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		mask-image: radial-gradient(
			circle,
			rgba(2, 0, 36, 1) 0%,
			rgba(199, 199, 207, 0) 73%,
			rgba(255, 255, 255, 0) 100%
		);
		background-color: hsl(0, 0%, 20%);
		background-position: top 50px right 50px;
		background-size: 100px 100px;
		background-image: linear-gradient(to right, hsl(0, 0%, 30%) 4px, transparent 4px),
			linear-gradient(to bottom, hsl(0, 0%, 30%) 4px, transparent 4px);
	}

	.wrapper {
		display: grid;
		grid-template-rows: 1fr auto;
		max-width: 800px;
		width: 100%;
		padding: 4rem 0;
		flex-grow: 1;

		font-family: sans-serif;

		nav {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 2rem;
		}
	}
</style>
