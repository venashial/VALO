<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		return {
			props: {
				id: page.params.id
			}
		};
	}
</script>

<script>
	import Origin from '../_Origin.svelte';

  export let id;
</script>

<Origin method="edit" {id} />
