<script>
  export let href = ''
  export let color = ''
</script>

{#if href != ''}
    <a href="{href}" class={color}><slot /></a>
{:else}
  <button class={color}>
    <slot />
  </button>
{/if}

<style lang="scss">
  button, a {
    display: flex;
    align-items: center;

    padding: 0.5rem 1.5rem;

    background-color: hsl(0, 0%, 40%);
    border: none;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    
    &.blue {
      background-color: hsl(220, 50%, 40%);
    }

    &:hover {
      background-color: hsl(0, 0%, 60%);
    }
  }
</style>