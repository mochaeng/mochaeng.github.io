<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';

	import blogbg from '$lib/assets/blog1.avif';
	import LazyImg from '$lib/components/ui/LazyImg.svelte';
	import { Calendar } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<main class="mb-10 mt-20 w-full max-w-screen-xl px-4 pt-4 text-text dark:text-[#a6adc8]">
	<hgroup>
		<h1 class="py-3 font-black text-[#7287fd] dark:text-[#89b4fa]">Blog</h1>
		<p>Just me, exploring, experimenting, and sharing what I learn along the way.</p>
	</hgroup>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
		<section
			class="mt-[3.25em] aspect-video border-2 border-border bg-[#e6e9ef] shadow-brute transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:bg-[#181825]"
		>
			<ul>
				{#each data.posts as post}
					<a href={`blog/${post.slug}`} class="group">
						<li>
							<LazyImg
								class="aspect-[16/5] h-[50%] object-cover"
								path={post.background}
							/>
							<div class="flex flex-col gap-4 px-4 py-2">
								<h3
									class="font-bold text-[#7287fd] group-hover:underline dark:text-[#89b4fa]"
								>
									{post.title}
								</h3>
								<p>{post.description}</p>
								<div class="flex gap-2">
									{#each post.categories as category}
										<span
											class="rounded-full border border-border p-1 text-[80%] dark:bg-[#393B4D]"
											>&num;{category}</span
										>
									{/each}
								</div>
								<p class="flex items-center gap-2">
									<Calendar />
									{formatDate(post.date)}
								</p>
							</div>
						</li>
					</a>
				{/each}
			</ul>
		</section>
	</div>
</main>
