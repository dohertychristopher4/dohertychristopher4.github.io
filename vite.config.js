import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	vite: {
		server: {
		  fs: {
			allow: ['*']  // Adjust the path as needed
		  }
		}
	  }
});
