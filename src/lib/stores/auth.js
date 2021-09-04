import { writable } from 'svelte/store'
import { browser } from '$app/env'

let stored = ''

if (browser) {
  stored = localStorage.authorization
}

export const authorization = writable(stored || '')

authorization.subscribe((value) => {
  if (browser) {
    localStorage.authorization = value
  }
})