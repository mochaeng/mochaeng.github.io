<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { src, alt, class: className, ...rest }: HTMLImgAttributes = $props();
</script>

<img class={className} {src} {alt} {...rest} loading="lazy" />
