<script>
	import Origin from './_Origin.svelte';

	import { send } from '$lib/api';
	import { goto } from '$app/navigation';

	let origin = {
		slug: '',
		display_as: 'redirect',
		destinations: [
			{
				type: 'url',
				data: {
					url: ''
				},
				meta: {
					title: '',
					description: ''
				}
			}
		],
		meta: {
			title: '',
			description: ''
		}
	};

	async function create() {
		const response = await send({ url: 'create', method: 'POST', data: origin });

		if (response.ok) {
			goto('/admin/manage');
		}
	}
</script>

<Origin bind:origin buttons={['create']} on:create={create} />
