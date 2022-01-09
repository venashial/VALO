<script lang="ts">
	import "carbon-components-svelte/css/g90.css";
	import {
		Header,
		SideNav,
		SideNavItems,
		SideNavLink,
		SideNavDivider,
		SkipToContent,
		Content, HeaderNav, HeaderNavItem,
	} from 'carbon-components-svelte'
	import { ListBulleted16, Analytics16, Folders16, Logout16 } from "carbon-icons-svelte"
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { onMount } from 'svelte'
	import { setup, instanceUrl, accessKeyId, secretAccessKey } from '$lib/store'

	let isSideNavOpen = true;

	onMount(() => {
		if (!$setup) goto("/connect")
	})
</script>

<Header company="VALO" platformName="Dashboard" bind:isSideNavOpen expandedByDefault>
	<svelte:fragment slot="skip-to-content">
		<img src="/icon.svg" alt="VALO logo icon" style="height: 50%; margin: 0 0.5rem 0 1rem" />
		<SkipToContent />
	</svelte:fragment>
</Header>

{#if !$page.url.pathname.endsWith('/connect')}
	<SideNav isOpen={isSideNavOpen} fixed>
		<SideNavItems>
			<SideNavLink icon={ListBulleted16} text="Manage" href="/" isSelected={$page.url.pathname === "/"} />
			<!-- <SideNavLink icon={Analytics16} text="Analytics" href="/analytics" isSelected={$page.url.pathname === "/analytics"} /> -->
			<SideNavDivider />
			<SideNavLink icon={Folders16} text="Files" on:click={() => {
				window.open("https://backblaze.com/b2_browse_files.htm", '_blank');
			}} />
			<SideNavDivider />
			<SideNavLink icon={Logout16} text="Disconnect" on:click={async () => {
				$instanceUrl = ''
				$accessKeyId = ''
				$secretAccessKey = ''
				await goto("/connect")
			}} />
		</SideNavItems>
	</SideNav>
{/if}

<Content>
	<slot />
</Content>

<style global>
	.bx--content {
		background: transparent;
	}

	.bx--side-nav ~ .bx--content {
		margin-left: 0;
	}

	@media screen and (max-width: 400px) {
		.bx--content {
			padding: 1rem 0;
		}
	}

	h2, p {
		margin-bottom: 1rem;
	}

	a {
		cursor: pointer;
	}

	.bx--form-item {
		flex: 1;
	}

	.bx--col {
		grid-gap: 2rem;
		display: flex;
		flex-direction: column;
	}

	td {
		padding: 0.2rem;
	}
</style>