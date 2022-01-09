import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {optimizeCss, optimizeImports} from "carbon-preprocess-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [preprocess(), optimizeImports()],

    kit: {
        adapter: adapter(),
        target: '#svelte',
        vite: {
            plugins: [
                process.env.NODE_ENV === "production" && optimizeCss()
            ],
        },
    }
};

export default config;
