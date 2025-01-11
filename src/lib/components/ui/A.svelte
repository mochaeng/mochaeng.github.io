<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { class: className, children, ...rest }: HTMLAnchorAttributes = $props();
</script>

<a
	class={cn(
		'bg-buttons text-center rounded-base border-border text-text border-2 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none cursor-pointer',
		className
	)}
	{...rest}
>
	{@render children?.()}
</a>
