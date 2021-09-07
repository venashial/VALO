<script>
  import Origin from './_Origin.svelte';

  let origin = {
			slug: 'example-slug',
			display_as: 'redirect',
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
		}
</script>

<Origin bind:origin buttons={['create']}  />