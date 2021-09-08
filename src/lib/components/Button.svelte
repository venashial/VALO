<script>
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let href = '';
	export let in_nav = false;

	$: active = $page.path === href;
</script>

{#if href != ''}
	<a {href} class="rounded capitalize" class:active class:in_nav><slot /></a>
{:else}
	<button
		class="rounded capitalize"
		class:active
		on:click={() => {
			dispatch('click');
		}}
	>
		<slot />
	</button>
{/if}

<style lang="scss">
	button,
	a {
		display: flex;
		align-items: center;

		padding: 0.5rem 1rem 0.4rem 1rem;

		background-color: hsl(0, 0%, 40%);
		border: none;
		text-decoration: none;
		color: hsl(0, 0%, 100%);

		&.active {
			background-color: hsl(220, 50%, 40%);
		}

		&:not(.active) {
			&:hover {
				background-color: hsl(0, 0%, 60%);
			}
		}

		&:nth-child(2).in_nav {
			--border: 0.15rem solid hsl(0, 0%, 50%);
			border-left: var(--border);
			border-right: var(--border);
		}
	}
</style>
