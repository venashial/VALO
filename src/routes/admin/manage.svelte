<script>
	import Button from '$lib/components/Button.svelte';

	let origins = [
		{
			id: '123123',
			slug: 'example-slug',
			display_as: 'redirect',
			visits: 0,
			destinations: [
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
			],
			meta: {
				title: 'Search engines',
				description: 'Search engines that I like to use'
			},
			timestamps: {
				updated: '2020-01-01T00:00:00.000Z',
				created: '2020-01-01T00:00:00.000Z'
			}
		},
		{
			id: '234234',
			slug: 'example-slug',
			display_as: 'redirect',
			visits: 0,
			destinations: [
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
			],
			meta: {
				title: 'Search engines',
				description: 'Search engines that I like to use'
			},
			timestamps: {
				updated: '2020-01-01T00:00:00.000Z',
				created: '2020-01-01T00:00:00.000Z'
			}
		}
	];

	function formatDate(date) {
		return new Date(date).toLocaleDateString();
	}
</script>

<div class="wrapper">
	<table class="rounded">
		<thead>
			<tr>
				<th>ID</th>
				<th>Slug</th>
				<th>Title</th>
				<th>Display</th>
				<th>Updated</th>
				<th>Created</th>
				<th>Visits</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#each origins as origin (origin.id)}
				<tr class="p-2">
					<td>{origin.id}</td>
					<td>{origin.slug}</td>
					<td>{origin.meta.title}</td>
					<td>{origin.display_as}</td>
					<td>{formatDate(origin.timestamps.updated)}</td>
					<td>{formatDate(origin.timestamps.created)}</td>
					<td>{origin.visits}</td>
					<td><Button href="/admin/edit/{origin.id}">Edit</Button></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="scss">
	.wrapper {
		max-height: 70vh;
		overflow-y: auto;
	}
  
	table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0 1em;

		th,
		td {
			text-align: left;
			padding: 0.4rem 1rem;

			--radius: 0.5rem;

			&:first-child {
				border-radius: var(--radius) 0 0 var(--radius);
			}

			&:last-child {
				border-radius: 0 var(--radius) var(--radius) 0;
			}
		}

		td {
			background-color: hsl(0, 0%, 40%);
		}
	}
</style>
