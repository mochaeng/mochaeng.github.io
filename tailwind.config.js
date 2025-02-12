/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				'fluid-sm': 'clamp(15px, 4vw, 1.15rem)',
				'fluid-md': 'clamp(15px, 4vw, 1.25rem)'
			},
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
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '69 ch',
						h1: {
							fontSize: 'clamp(28px, 6vw, 250%)',
							lineHeight: '1.2',
							fontWeight: '900'
						},
						h2: {
							color: '#4c4f69',
							fontSize: 'clamp(24px, 5vw, 200%)',
							marginBlock: '1.5em .5em',
							paddingBlock: '.5em 0',
							lineHeight: '1.2',
							fontWeight: '600',
							marginInlineStart: '0'
						},
						p: {
							fontSize: 'clamp(15px, 4vw, 1.25rem)',
							lineHeight: '1.5',
							margin: '1.25rem 0',
							hyphens: 'auto',
							wordWrap: 'break-word'
						},
						ol: {
							// fontSize: 'clamp(15px, 4vw, 1.25rem)',
							lineHeight: '1.5 rem'
						},
						li: {
							margin: 0,
							fontSize: 'clamp(15px, 4vw, 1.25rem)'
						},
						pre: {
							backgroundColor: '#e6e9ef !important'
						},
						img: {
							borderRadius: '0.375rem',
							objectFit: 'cover',
							aspectRatio: '21/9'
						},
						a: {
							fontSize: 'clamp(15px, 4vw, 1.25rem)',
							color: '#7287fd',
							target: '_blank',
							rel: 'noopener noreferrer'
						},
						code: {
							backgroundColor: '#dce0e8',
							borderRadius: '0.2rem',
							padding: '0.1rem',
							color: '#7287fd'
						},
						strong: {
							color: '#5c5f77',
							fontWeight: '800'
						}
					}
				},
				dark: {
					css: {
						h2: {
							color: '#cdd6f4'
						},
						pre: {
							backgroundColor: '#181825 !important'
						},
						a: {
							color: '#b4befe'
						},
						code: {
							backgroundColor: '#181825',
							color: '#b4befe'
						},
						strong: {
							color: '#bac2de',
							fontWeight: '800'
						}
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'selector'
};
