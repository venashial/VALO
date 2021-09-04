<script>
  import { onMount } from 'svelte'
  import { authorization } from '$lib/stores/auth.js'
</script>

<div class="huge">🍪</div>
<div class="form">
	<p>Change your authorization cookie:</p>
	<input type="text" placeholder="Snickerdoodle" bind:value={$authorization} />
  <slot></slot>
</div>

<style lang="scss">
  .huge {
    margin-top: 2rem;
    user-select: none;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
</style>