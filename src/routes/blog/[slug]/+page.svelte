<script lang="ts">
	import { formatDate } from '$lib/utils';
	// import './../../../app.css';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="mt-20 w-full text-[20px]">
	<article class="mx-auto mt-10 w-full max-w-[69ch] text-text">
		<div class="mb-5 mt-5 flex flex-col gap-2">
			<hgroup>
				<h1 class="text-5xl font-black">{data.meta.title}</h1>
				<p>Published at {formatDate(data.meta.date)}</p>
			</hgroup>

			<div class="flex gap-4">
				{#each data.meta.categories as category}
					<span>&num;{category}</span>
				{/each}
			</div>
		</div>

		<div class="prose dark:prose-dark text-[#5c5f77] dark:text-[#bac2de]">
			<data.content />
		</div>
	</article>
</div>

<style>
</style>
