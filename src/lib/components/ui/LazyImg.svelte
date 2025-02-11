<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { src, alt, ...rest }: HTMLImgAttributes = $props();
</script>

<img {src} {alt} {...rest} loading="lazy" />
