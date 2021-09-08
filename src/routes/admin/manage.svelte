<script context="module">
  import { send } from '$lib/api'

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		try {
			const origins = (await send({ url: 'origins' }, fetch)).json;

      console.log(origins);

			return {
				props: {
					origins
				}
			};
		} catch (error) {
      throw error
    }
	}
</script>

<script>
	import Button from '$lib/components/Button.svelte';

  export let origins;

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
			{#each origins as origin}
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
