<script lang="ts">
	import LazyImg from '$lib/components/ui/LazyImg.svelte';
	import { DOMAIN, formatDate } from '$lib/utils';
	import { page } from '$app/state';

	let { data } = $props();

	const siteUrl = page.url.origin === 'http://sveltekit-prerender' ? DOMAIN : page.url.origin;
	const imageUrl = data.meta.background ? `${siteUrl}/${data.meta.background}` : null;
	console.log(imageUrl);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:url" content={page.url.href} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={data.meta.description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>

<div class="mt-20 w-full max-w-screen-xl px-4">
	<LazyImg
		class="mt-8 aspect-[16/5] w-full rounded-3xl object-cover"
		path={data.meta.background}
	/>
	<article class="mx-auto mt-10 w-full max-w-[69ch] text-text">
		<div class="mb-5 mt-5 flex flex-col gap-2">
			<hgroup class="flex flex-col gap-2">
				<h1 class="font-[900] leading-[1.2] text-[#df8e1d] dark:text-[#a6e3a1]">
					{data.meta.title}
				</h1>
				<div>
					<p>Published on {formatDate(data.meta.date)}</p>
					<p>Edited on {formatDate(data.meta.editDate)}</p>
				</div>
			</hgroup>

			<div class="flex gap-4">
				{#each data.meta.categories as category}
					<span>&num;{category}</span>
				{/each}
			</div>
		</div>

		<div class="prose mb-6 mt-4 text-[#5c5f77] dark:prose-dark dark:text-[#bac2de]">
			<data.content />
		</div>
	</article>
</div>

<style>
</style>
