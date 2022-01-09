import { writable } from 'svelte-local-storage-store'

import { derived } from 'svelte/store'


export const instanceUrl = writable('instanceUrl', '')

export const accessKeyId = writable('accessKeyId', '')

export const secretAccessKey = writable('secretAccessKey', '')

export const setup = derived(
    [instanceUrl, accessKeyId, secretAccessKey],
    ($values, set) => {
        set($values[0] !== '' && $values[1] !== '' && $values[2] !== '' );
    }
)

export const headers = derived(
    [accessKeyId, secretAccessKey],
    ($values, set) => {
        set({
            headers: {
                'x-accessKeyId': $values[0],
                'x-secretAccessKey': $values[1],
            }
        });
    }
)
