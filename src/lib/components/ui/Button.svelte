<script lang="ts">
	import { cn } from '$lib/utils';

	export let className = $$restProps.class;
</script>

<button
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:focus
	class={cn(
		'bg-buttons rounded-base border-border text-text border-2 p-1 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none',
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
