<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { children, href }: { children: Snippet } & HTMLAnchorAttributes = $props();
</script>

<a {href} target="_blank" rel="noopener noreferrer">
	{@render children()}
</a>
