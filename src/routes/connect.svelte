<script lang="ts">
    import {
        Grid,
        Row,
        Column, Tile, FluidForm, TextInput, PasswordInput, Button, InlineNotification,
    } from 'carbon-components-svelte'

    import Login16 from "carbon-icons-svelte/lib/Login16";
    import { goto } from '$app/navigation'
    import { instanceUrl, accessKeyId, secretAccessKey } from '$lib/store'

    let showError = false

    async function submit(event) {

        const instanceUrlValue = event.target.elements.instanceUrl.value
        const accessKeyIdValue = event.target.elements.accessKeyId.value
        const secretAccessKeyValue = event.target.elements.secretAccessKey.value

        const response = await fetch(instanceUrlValue, {
            headers: {
                'x-accessKeyId': accessKeyIdValue,
                'x-secretAccessKey': secretAccessKeyValue,
            }
        })

        if (response.ok) {
            $instanceUrl = instanceUrlValue
            $accessKeyId = accessKeyIdValue
            $secretAccessKey = secretAccessKeyValue

            await goto('/')
        } else {
            showError = true
        }
    }
</script>

<svelte:head>
    <title>Connect | VALO</title>
</svelte:head>

<Grid>
    <Row>
        <Column>
            <Tile>
                <h2>Connect</h2>
                <p>Missing S3-compatible keys or an instance URL? Check the guide.</p>
                {#if showError}
                    <InlineNotification
                            hideCloseButton
                            title="Error:"
                            subtitle="Incorrect access ID or secret key."
                    />
                {/if}
                <FluidForm on:submit={submit}>
                    <TextInput labelText="Instance URL" name="instanceUrl" placeholder="https://example.com/" required />
                    <TextInput labelText="Access ID Key" name="accessKeyId" placeholder="00000000" required />
                    <PasswordInput
                            required
                            name="secretAccessKey"
                            type="password"
                            labelText="Secret Access Key"
                            placeholder="00000000"
                    />
                    <Button type="submit" icon={Login16} size="lg">Submit</Button>
                </FluidForm>
            </Tile>
        </Column>
    </Row>
</Grid>

<style global>
    .bx--form--fluid {
        margin: 1rem -1rem -1rem -1rem;
        text-align: right;
    }

    .bx--form--fluid > *:last-child {
        margin-top: 3rem;
    }
</style>