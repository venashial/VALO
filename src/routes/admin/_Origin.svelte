<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	export let method;

	export let id = '';

  export let origin = {}

	let buttons =
		method === 'edit'
			? [
					{
						label: 'Save',
						action: () => {
							send({
								url: `origin/${id}`
							});
						}
					},
					{
						label: 'Delete',
						action: function () {}
					}
			  ]
			: [
					{
						label: 'Create',
						action: function () {}
					}
			  ];

	let destinations = [
		{
			type: 'url',
			data: {
				url: 'https://www.google.com'
			},
			meta: {
				title: 'Google',
				description: 'Search the web'
			}
		},
		{
			type: 'url',
			data: {
				url: 'https://www.google.com'
			},
			meta: {
				title: 'Google',
				description: 'Search the web'
			}
		},
		{
			type: 'url',
			data: {
				url: 'https://www.google.com'
			},
			meta: {
				title: 'Google',
				description: 'Search the web'
			}
		}
	];

	async function send({ method, url, data }) {
		await fetch('/api/' + url, {
			method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}
</script>

<svelte:head>
	<title>Create | valo</title>
</svelte:head>

<div class="wrapper">
	<div class="flex flex-col p-2 gap-2">
		<Input name="Title" />
		<Input name="Description" />
		<Input name="Slug" placeholder="example-slug" />
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
		/>
	</div>

	<div class="flex flex-col p-2 gap-4 overflow-y-auto">
		<span>Destinations</span>
		<div class="flex flex-col overflow-y-auto destinations">
			{#each destinations as destination}
				<div class="destination rounded gap-2">
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
					{#if destination.type === 'url'}
						<Input placeholder="URL" bind:value={destination.data.url} />
					{:else}
						<Input placeholder="File" bind:value={destination.data.file} />
					{/if}
					<Input placeholder="Title" />
					<Input placeholder="Description" />
				</div>
			{/each}
		</div>
	</div>

	<div class="buttons">
		{#each buttons as button}
			<Button on:click={button.action}>{button.label}</Button>
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
		}

		.destination {
			display: flex;
			flex-direction: column;

			padding: 1rem;

			background-color: hsla(0, 0%, 40%, 0.5);

			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 3rem;
			}
		}

		.buttons {
			display: flex;
			gap: 0.5rem;
		}
	}
</style>
