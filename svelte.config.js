import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
    vite: {
      plugins: [svg()]
    }
	},

	preprocess: [preprocess({
        "postcss": true
    })]
};

export default config;
