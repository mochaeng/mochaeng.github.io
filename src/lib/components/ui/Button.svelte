<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let { class: className, children, ...rest }: HTMLButtonAttributes = $props();
</script>

<button
	class={cn(
		'bg-buttons rounded-base border-border text-text border-2 p-1 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none',
		className
	)}
	{...rest}
>
	{@render children?.()}
</button>
