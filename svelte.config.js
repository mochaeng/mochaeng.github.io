import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['catppuccin-mocha', 'catppuccin-latte'],
				langs: ['javascript', 'typescript', 'go', 'rust', 'ocaml', 'sh', 'python', 'c++']
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					themes: { light: 'catppuccin-latte', dark: 'catppuccin-mocha' }
				})
			);
			return `{@html \`${html}\` }`;
		}
	}
	// remarkPlugins: [remarkGfm]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : ''
		},
		csp: {
			mode: 'hash',
			directives: {
				'script-src': ['self', 'unsafe-inline'],
				'object-src': ['none']
			},
			reportOnly: {
				'script-src': ['self'],
				'report-to': ["'csp-endpoint'"]
			}
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s for image files during prerender
				if (path.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
					console.warn(`Image not found during prerender: ${path}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
