import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig(() => {
	return {
		server: {
			host: true,
			port: 3000
		},
		plugins: [
			sveltekit()
		]
	};
});
