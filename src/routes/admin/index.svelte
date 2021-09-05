<script>
	import DarkIcon from '$lib/images/dark-icon.svg';
</script>

<svelte:head>
	<title>valo</title>
</svelte:head>

<div>
	<DarkIcon />
</div>

<style lang="scss">
	div {
		padding-top: 3rem;

		:global(svg) {
			width: 100%;
			height: 100%;
			max-height: 60vh;
		}
	}
</style>
