<script>
	import uniqueId from 'lodash.uniqueid';

	export let type = 'text';
	export let name = '';
	export let required = false;
	export let options = [];
	export let placeholder = '...';

	export let value = undefined;

	const input_id = uniqueId('input-');
</script>

<div>
	{#if name !== ''}
		<label for={input_id} class="label" class:required>{name}</label>
	{/if}

	{#if type === 'text'}
		<input class="rounded" type="text" bind:value name={input_id} {placeholder} />
	{:else if type === 'select'}
		<select class="rounded" name={input_id} bind:value>
			{#each options as { value, name }}
				<option {value}>{name}</option>
			{/each}
		</select>
	{/if}
</div>

<style lang="scss">
	input {
		width: 100%;
	}

	label {
		display: flex;
	}
</style>
