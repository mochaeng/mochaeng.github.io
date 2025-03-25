<script lang="ts">
	import '@fontsource/pacifico';
	import { Menu, Moon, Sun, X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
	import Button from '$lib/components/ui/Button.svelte';
	import { browser } from '$app/environment';

	let isAriaExpanded = $state(false);
	let isDark = $state(false);
	let media: MediaQueryList;
	let header: HTMLHeadElement;
	let body: HTMLBodyElement;
	let prevScrollpos = $state(0);

	onMount(() => {
		isDark = document.documentElement.classList.contains('dark');
		media = window.matchMedia('(width < 48em)');
		media.addEventListener('change', function (event) {
			setupNavbar(event);
		});
		body = document.querySelector('body')!;
	});

	$effect(() => {
		if (isAriaExpanded) {
			disableBodyScroll(body);
		} else {
			enableBodyScroll(body);
		}
	});

	function setupNavbar(event: MediaQueryListEvent) {
		if (!event.matches) {
			isAriaExpanded = false;
		}
	}

	function openHamburguer() {
		isAriaExpanded = true;
	}

	function closeHamburguer() {
		isAriaExpanded = false;
	}

	function closeAriaExpanded() {
		if (isAriaExpanded) {
			isAriaExpanded = false;
		}
	}

	function toggleTheme() {
		isDark = !isDark;
		localStorage.setItem('theme', isDark ? 'dark' : 'light');

		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	if (browser) {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<svelte:window
	onscroll={() => {
		if (!header) {
			return;
		}

		if (window.innerWidth >= 768) {
			header.style.top = '0';
			header.style.transition = 'top 0.35s ease-out';
			return;
		}

		let currentScrollPos = window.scrollY;
		console.log(currentScrollPos);
		if (prevScrollpos > currentScrollPos || currentScrollPos < 43) {
			header.style.top = '0';
			header.style.transition = 'top 0.35s ease-out';
		} else {
			header.style.transition = 'top 0.35s ease-out';
			header.style.top = '-80px';
		}
		prevScrollpos = currentScrollPos;
	}}
/>

<header class="fixed z-[999] h-20 w-full border-b-2 border-border bg-header p-2" bind:this={header}>
	<div class="wrapper mx-auto flex h-full max-w-screen-xl items-center justify-between gap-2 p-2">
		<div
			class="hamburguer-open z-10"
			aria-expanded={isAriaExpanded}
			role="button"
			aria-label="Open menu"
			aria-controls="menu"
		>
			<Button onclick={openHamburguer}>
				<span class="sr-only">Open Menu</span>
				<Menu size={32} />
			</Button>
		</div>

		<div class="hamburguer-close z-10" aria-expanded={isAriaExpanded}>
			<Button onclick={closeHamburguer}>
				<span class="sr-only">Close Menu</span>
				<X size={32} />
			</Button>
		</div>

		<div class="logo text-text">
			<a href="/" class="text-center text-3xl font-bold">L. C.</a>
		</div>

		<div class="overlay" data-visible={isAriaExpanded}></div>

		<nav class="flex-1 text-text" data-visible={isAriaExpanded}>
			<ul class="z-50 bg-header" data-visible={isAriaExpanded}>
				<li>
					<a class="text-2xl" href="/" onclick={closeAriaExpanded}>Home</a>
				</li>
				<li><a class="text-2xl" href="/blog" onclick={closeAriaExpanded}>Blog</a></li>
				<li><a class="text-2xl" href="/about" onclick={closeAriaExpanded}>About</a></li>
				<li>
					<a class="text-2xl" href="/projects" onclick={closeAriaExpanded}>Projects</a>
				</li>
			</ul>
		</nav>

		<div class="theme-toggle z-10" data-visible={isAriaExpanded}>
			<Button onclick={toggleTheme}>
				<span class="sr-only">Toggle Theme</span>
				{#if isDark}
					<Moon size={32} />
				{:else}
					<Sun size={32} />
				{/if}
			</Button>
		</div>
	</div>
</header>

<style lang="less">
	header {
		view-transition-name: header;
		.hamburguer-open {
			position: relative;
			z-index: 9999;
		}

		.hamburguer-open[aria-expanded='true'] {
			display: none;
		}

		.hamburguer-close {
			position: absolute;
			top: 1rem;
			right: 2rem;
		}

		.hamburguer-close[aria-expanded='false'] {
			display: none;
		}

		.logo {
			text-align: center;
			a {
				font-family: 'Pacifico', 'Arial';
			}
		}

		.overlay {
			display: none;
			position: fixed;
			inset: 0 0 0 0;
			background-color: hsl(0 0% 0% / 0.7);
		}

		.overlay[data-visible='true'] {
			display: block;
		}

		.theme-toggle[data-visible='true'] {
			position: absolute;
			top: 6rem;
			right: 2rem;
		}

		nav[data-visible='true'] {
			display: block;
		}

		nav {
			display: none;
			ul {
				position: fixed;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 2.4rem;
				inset: 0 30% 0 0;
				padding-top: 8rem;
				font-size: 1.25rem;
				border: 4px solid hsl(var(--color-text));
				transform: translate(-100%);
			}

			ul[data-visible='true'] {
				transform: translate(0);
			}

			li {
				a {
					position: relative;
				}

				a::after {
					content: '';
					position: absolute;
					width: 100%;
					height: 2px;
					background-color: hsl(var(--color-main));
					transform: scaleX(0);
					bottom: 0;
					left: 0;
					transform-origin: left;
					transition: transform 0.3s ease-out;
				}

				a:hover::after {
					width: 100%;
					transform: scaleX(1);
					transform-origin: bottom left;
				}
			}
		}
	}

	@media (min-width: 48em) {
		header {
			.wrapper {
				gap: 1rem;
				padding: 0 1rem;
			}

			.hamburguer-close,
			.hamburguer-open {
				display: none;
			}

			.logo {
				text-align: start;
			}

			nav {
				display: block;
				height: 100%;
				ul {
					height: 100%;
					position: static;
					flex-direction: row;
					padding-top: 0;
					transform: translate(0);
					border: none;
					justify-content: center;
				}

				li {
					a::after {
						background-color: hsl(var(--color-text));
					}
				}
			}
		}
	}
</style>
