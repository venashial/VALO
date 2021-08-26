<script>
  import { onMount } from 'svelte'
  import Cookies from 'js-cookie'

  let cookie;

  onMount(() => {
    cookie = Cookies.get('authorization')
  })

  function updateCookie() {
    Cookies.set('authorization', cookie, { sameSite: 'strict', expires: 3000 })
  }
</script>

<div class="huge">🍪</div>
<div class="form">
	<p>Change your authorization cookie:</p>
	<input type="text" placeholder="Snickerdoodle" bind:value={cookie} on:input={updateCookie} />
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