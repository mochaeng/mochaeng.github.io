<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let { children, ...rest }: { children: Snippet } & HTMLAttributes<HTMLElement> = $props();
</script>

<code class="p-1 before:content-none after:content-none" {...rest}>
	{@render children()}
</code>
