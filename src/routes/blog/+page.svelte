<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main class="mb-10 mt-20 px-4 pt-4 text-text">
	<section>
		<ul>
			{#each data.posts as post}
				<li>
					<a href={`blog/${post.slug}`}>{post.title}</a>
					<p>{formatDate(post.date)}</p>
				</li>
			{/each}
		</ul>
	</section>
</main>
