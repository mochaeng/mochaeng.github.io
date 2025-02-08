<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let { class: className, children, ...rest }: HTMLAnchorAttributes = $props();
</script>

<a
	class={cn(
		'cursor-pointer rounded-base border-2 border-border bg-buttons text-center text-text shadow-brute transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none',
		className
	)}
	{...rest}
>
	{@render children?.()}
</a>
