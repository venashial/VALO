<script lang="ts">
    import {
        Breakpoint,
        Button,
        Column,
        DataTable,
        DataTableSkeleton,
        Form,
        Grid,
        Row,
        TextInput,
        Tile,
    } from 'carbon-components-svelte'
    import { ArrowRight20, Checkmark20, TrashCan16, Edit16 } from 'carbon-icons-svelte'
    import { page } from '$app/stores'
    import { headers, instanceUrl } from '$lib/store'
    import { onMount } from 'svelte'

    let rows = []

    onMount(async () => {
        rows = (await (await fetch($instanceUrl, {
            method: 'GET',
            ...$headers,
        })).json()).map(row => ({ ...row, actions: row.id }))
    })

    let newLink = {
        slug: '',
        destination: '',
    }

    $: if (newLink.slug) {
        // Remove characters that would break the URL path
        newLink.slug = newLink.slug.replace(/([\/?\\<>#%" {}^`\[\]:;])/g, '')
    }

    async function addLink(event) {
        const slug = event.target.elements.slug.value
        const destination = event.target.elements.destination.value

        await fetch($instanceUrl + slug, {
            method: 'POST',
            body: destination,
            ...$headers,
        })

        rows = rows.filter(row => row.id !== slug)
        rows = [{id: slug, destination, created: new Date().toISOString().split('T')[0], actions: slug }, ...rows]

        newLink = {
            slug: '',
            destination: '',
        }
    }

    async function deleteLink(slug) {
        await fetch($instanceUrl + slug, {
            method: 'DELETE',
            ...$headers,
        })

        rows = rows.filter(row => row.id !== slug)
    }

    let displaySize = 'lg'
</script>

<svelte:head>
    <title>Dashboard | VALO</title>
</svelte:head>

<Breakpoint bind:size={displaySize}/>

<Grid>
    <Row>
        <Column>
            <Tile>
                <Form on:submit={addLink} style="display: flex; align-items: center; grid-gap: 1rem; flex-wrap: wrap; overflow: hidden;">
                    <TextInput
                            bind:value={newLink.slug}
                            labelText="Slug"
                            helperText="{$page.url.protocol}//{$page.url.host}/{newLink.slug || '...' }"
                            placeholder="Enter a new slug..."
                            style="overflow: hidden"
                            name="slug"
                    />
                    {#if !["sm"].includes(displaySize)}
                        <ArrowRight20 style=""/>
                    {/if}
                    <TextInput
                            bind:value={newLink.destination}
                            labelText="Destination"
                            helperText="The destination URL of your link"
                            placeholder="Enter a destination..."
                            name="destination"
                    />
                    <Button icon={Checkmark20} size="field" type="submit">Add</Button>

                </Form>

            </Tile>

            {#if rows.length === 0}
                <DataTableSkeleton
                        showHeader={false} showToolbar={false}
                        headers={[{ value: 'Slug' }, { value: 'Destination' }, { value: 'Created' }, { value: '' }]}
                        rows={8}
                />
            {:else}
                <DataTable
                        sortable
                        headers={[{ key: 'id', value: 'Slug' }, { key: 'destination', value: 'Destination'}, {key: 'created', value: 'Created', display: (date) => new Date(date).toLocaleString() }, { key: 'actions', value: ''}]}
                        {rows}
                >
                    <span slot="cell" let:cell>
                        {#if cell.key === 'actions'}
                            <Button kind="danger-tertiary" iconDescription="Delete" icon={TrashCan16} on:click={async () =>  await deleteLink(cell.value)} />
                            <Button iconDescription="Edit" icon={Edit16} on:click={() => newLink.slug = cell.value } />
                        {:else}
                            {cell.value}
                        {/if}
                    </span>
                </DataTable>
            {/if}
        </Column>
    </Row>
</Grid>