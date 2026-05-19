import adapter from '@sveltejs/adapter-static';

/** Base path per GitHub Pages (es. `/erba-e-pelle`). Vuoto in sviluppo locale. */
const rawBase = process.env.BASE_PATH ?? '';
const base = rawBase === '/' ? '' : rawBase.replace(/\/$/, '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		paths: { base }
	}
};

export default config;
