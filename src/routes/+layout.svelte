<script lang="ts">
	import '@fontsource-variable/inter';
	import { navigating } from '$app/state';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="absolute inset-0 flex h-full w-full flex-col items-center justify-between gap-2">
	{#if navigating.to}
		<div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-80">
			<div
				class="size-20 animate-spin rounded-full border-t-[6px] border-buttonsIdx border-opacity-75"
			></div>
		</div>
	{/if}
	<Header />
	{@render children?.()}
	<Footer />
</main>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
		height: 100dvh;
		background-color: hsl(var(--color-background));
		overflow: auto;
		/* font-size: clamp(15px, 4vw, 2rem); */
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
