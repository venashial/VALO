<script>
	import '../app.scss';
  import '$lib/favicon.js'
</script>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
    align-items: center;
		width: 100%;
		margin: 0 0;
		box-sizing: border-box;
	}
</style>
