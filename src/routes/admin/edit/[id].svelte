<script context="module">
	import { send } from '$lib/api';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch, session, context }) {
		try {
			const origin = (await fetch(`/api/origin/${page.params.id}`)).json;

			return {
				props: {
					origin
				}
			};
		} catch (e) {
			console.error('404 on ' + page.params.id);
		}
	}
</script>

<script>
	import Origin from './_Origin.svelte';

	import { send } from '$lib/api';
	import { goto } from '$app/navigation';

	export let origin;

	async function remove() {
		const response = await send({ url: 'create', method: 'POST', data: origin });

		if (response.ok) {
			goto('/admin/manage');
		}
	}
</script>

<Origin bind:origin buttons={['remove']} on:create={remove} />
