<script>
	import { createEventDispatcher } from 'svelte';
	const dispacher = createEventDispatcher();

	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	export let origin;

	export let buttons;

	function addDestination() {
		origin.destinations = [
			...origin.destinations,
			{
				type: 'url',
				data: {
					url: ''
				},
				meta: {
					title: 'Google',
					description: 'Search the web'
				}
			}
		];
	}
</script>

<svelte:head>
	<title>Create | valo</title>
</svelte:head>

<div class="wrapper">
	<div class="flex flex-col p-2 gap-2">
		<Input name="Title" bind:value={origin.meta.title} />
		<Input name="Description" bind:value={origin.meta.description} />
		<Input name="Slug" placeholder="example-slug" bind:value={origin.slug} />
		<Input
			name="Display as"
			type="select"
			required
			options={[
				{ name: 'Redirect', value: 'redirect' },
				{ name: 'Image', value: 'image' },
				{ name: 'Document', value: 'pdf' },
				{ name: 'Download', value: 'download' }
			]}
			bind:value={origin.display_as}
		/>
	</div>

	<div class="flex flex-col p-2 gap-4 overflow-y-auto">
		<span>Destinations</span>
		<div class="flex flex-col overflow-y-scroll destinations">
			{#each origin.destinations as destination, index}
				<div class="destination rounded gap-2">
					<div class="flex justify-between">
						<Input
							placeholder="Type"
							type="select"
							options={[
								{ name: 'Link', value: 'url' },
								{ name: 'File', value: 'file' }
							]}
							bind:value={destination.type}
							required
						/>
						{#if origin.destinations.length > 1}
							<Button
								on:click={() => {
									origin.destinations.splice(index, 1);
									origin.destinations = origin.destinations;
								}}>✕</Button
							>
						{/if}
					</div>
					{#if destination.type === 'url'}
						<Input placeholder="URL" bind:value={destination.data.url} />
					{:else}
						<Input placeholder="File" bind:value={destination.data.file} />
					{/if}
					<Input placeholder="Title" bind:value={destination.meta.title} />
					<Input placeholder="Description" bind:value={destination.meta.description} />
				</div>
			{/each}
			<Button on:click={addDestination}>Add another destination</Button>
			<div class="spacer" />
		</div>
	</div>

	<div class="buttons">
		{#each buttons as button}
			<Button
				on:click={() => {
					dispacher(button);
				}}>{button}</Button
			>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: grid;
		max-height: 70vh;
		width: 100%;

		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr auto;

		@media (max-width: 600px) {
			grid-template-columns: 1fr;
			overflow-y: auto;
		}

		gap: 2vw;

		.destinations {
			mask-image: linear-gradient(
				180deg,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 1) 80%,
				rgba(0, 0, 0, 0) 100%
			);

			> .spacer {
				margin-bottom: 4rem;
			}
		}

		.destination {
			display: flex;
			flex-direction: column;

			padding: 1rem;

			background-color: hsla(0, 0%, 40%, 0.5);

			margin-bottom: 1rem;
		}

		.buttons {
			display: flex;
			gap: 0.5rem;
		}
	}
</style>
