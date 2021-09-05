<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script>
	import Button from '$lib/components/Button.svelte';
  import PageTransition from "$lib/components/PageTransition.svelte"
  export let key
</script>

<div class="background" />

<div class="wrapper">
  <nav>
		<Button href="/admin/manage" in_nav={true}>Manage</Button>
		<Button href="/admin/create" in_nav={true}>Create</Button>
		<Button href="/admin" in_nav={true}>Home</Button>
	</nav>

  <div class="content">
    <PageTransition refresh={key}>
      <slot />
    </PageTransition>
  </div>
</div>

<style lang="scss">
	:global(body) {
		background-color: hsl(0, 0%, 20%);
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		mask-image: radial-gradient(
			circle,
			rgba(2, 0, 36, 1) 0%,
			rgba(199, 199, 207, 0) 73%,
			rgba(255, 255, 255, 0) 100%
		);
		background-color: hsl(0, 0%, 20%);
		--bg-size: min(10vw, 100px);
		--half-bg-size: calc(var(--bg-size) / 2);
		background-position: top var(--half-bg-size) right var(--half-bg-size);
		background-size: var(--bg-size) var(--bg-size);
		--line-width: min(0.6vw, 4px);
		background-image: linear-gradient(
				to right,
				hsl(0, 0%, 30%) var(--line-width),
				transparent var(--line-width)
			),
			linear-gradient(to bottom, hsl(0, 0%, 30%) var(--line-width), transparent var(--line-width));
	}

	.wrapper {
		display: flex;
		flex-direction: column-reverse;
    align-items: center;
		width: 100%;
		padding: 5rem;
		flex-grow: 1;

		color: white;
		font-family: sans-serif;

    .content {
      height: 100%;
      max-height: 70vh;
      margin-bottom: auto;
      width: 100%;
    }

		nav {
			display: flex;
			justify-content: center;
			align-items: flex-end;

      > :global(a) {
        &:not(:last-child):not(:first-child) {
          border-radius: 0;
        }

        &:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }

        &:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
		}
	}
</style>
