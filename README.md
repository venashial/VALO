# VALO

## Set up

VALO isn't easy to set up, but it can be done.

1. Deploy `worker/index.js` to Cloudflare
2. Visit [the admin panel](https://valo.vercel.app/)
3. 

## Developing

### Worker

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/worker-template
```

### SvelteKit

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```