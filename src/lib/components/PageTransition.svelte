<script>
	import { fly } from 'svelte/transition';
	export let refresh = '';
</script>

{#key refresh}
	<div in:fly={{ x: -500, duration: 400, delay: 500 }} out:fly={{ x: 700, duration: 500 }}>
		<slot />
	</div>
{/key}