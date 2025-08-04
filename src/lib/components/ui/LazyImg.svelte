<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let { path, alt, ...rest }: { path: string } & HTMLImgAttributes = $props();

	const images: any = import.meta.glob(
		['$lib/assets/**.jpg', '$lib/assets/**.png', '$lib/assets/**.svg', '$lib/assets/**.avif'],
		{ eager: true, query: '?url', import: 'default' }
	);
</script>

<img src={images['/src/lib/assets/' + path]} {alt} {...rest} />

<!-- <img class="w-[200px]" src={imgSrc} {alt} {...rest} loading="lazy" /> -->
