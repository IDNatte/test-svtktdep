/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-node'
// import adapter from '@sveltejs/adapter-static'

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		/*
		*
		* amp setting, uncomment if you want to enable amp mode.
		*
		*/

		// amp: true,
		
		/*
		*
		* node application adapter
		*
		* this adapter is used if you want to build full node application with backend-handler.
		* this adapter by default is used instead of SPA adapter / @sveltejs/adapter-static
		*
		* uncomment import { adapter as NAdapeter } from '@sveltejs/adapter-node' first to use this and then uncomment snippet bellow.
		*
		*/

		adapter: adapter({
			out: 'build',
			precompress: false,
			env: {}
		})

		// 
		/*
		*
		* static SPA adapter, uncomment this if you want a generating SPA application instead of node adapter
		*
		* In most situations this is not recommended: it harms SEO, tends to slow down perceived performance, and makes your app inaccessible
		* to users if JavaScript fails or is disabled (referring to this https://kryogenix.org/code/browser/everyonehasjs.html)
		* - https://github.com/sveltejs/kit/tree/master/packages/adapter-static
		*
		* uncomment import { adapter as SAdapter } from '@sveltejs/adapter-static' first to use this and then uncomment snippet bellow.
		*
		*/
		
		// adapter: adapter({
		// 	// fallback file can be changed as what you prefered, by default it will be index.html.
		// 	fallback: 'index.html',
			
		// 	// you can change pages and assets folder to anywhere you prefered, in this case will be in /build/
		// 	pages: 'build',
		// 	assets: 'build'
		// })
	}
};

export default config;
