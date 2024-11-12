/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--color-background))',
				main: 'hsl(var(--color-main))',
				border: 'hsl(var(--color-border))',
				cardBorder: 'hsl(var(--card-border))',
				text: 'hsl(var(--color-text))',
				mainAccent: 'hsl(var(--main-accent))',
				header: 'hsl(var(--header-bg))',
				secondaryBlack: 'hsl(var(--secondary-black))',
				card_1: 'hsl(var(--card-1))',
				card_2: 'hsl(var(--card-2))',
				card_3: 'hsl(var(--card-3))',
				postBg: 'hsl(var(--post-bg))',
				blogBg: 'hsl(var(--blog-bg))',
				blog: 'hsl(var(--text-blog))',
				index: 'hsl(var(--color-index))',
				project: 'hsl(var(--text-project))',
				buttons: 'hsl(var(--buttons-bg))',
				buttonsIdx: 'hsl(var(--buttons-index))',
				cardBg: 'hsl(var(--card-bg))',
				buttonIndex: 'hsl(var(--text-button-index))'
			},
			borderRadius: {
				base: '5px'
			},
			boxShadow: {
				brute: 'var(--shadow)'
			},
			translate: {
				boxShadowX: '4px',
				boxShadowY: '4px',
				reverseBoxShadowX: '-4px',
				reverseBoxShadowY: '-4px'
			},
			fontWeight: {
				base: '500',
				heading: '700'
			}
		}
	},
	plugins: [],
	darkMode: 'selector'
};
