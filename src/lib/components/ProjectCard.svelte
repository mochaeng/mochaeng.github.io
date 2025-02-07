<script lang="ts">
	// import type { Picture } from 'vite-imagetools';
	import A from '../components/ui/A.svelte';
	import { cn } from '$lib/utils';

	let {
		card,
		className
	}: {
		card: {
			img: {
				src: string;
				alt: string;
			};
			className: string;
			title: string;
			badges: string[];
			description: string;
			links: {
				url: string;
				name: string;
			}[];
		};
		className: string;
	} = $props();
</script>

<article class="max-w-[500px] wrapper flex flex-col border-2 border-border shadow-brute text-text">
	<div class={cn('w-full h-[240px] flex items-center justify-center p-10', className)}>
		<div
			class={cn(
				'w-[210px] h-[210px] rounded-full shadow-brute border-2 border-border bg-gray-100',
				card.className
			)}
		>
			<img
				class="h-full w-full rounded-full object-center object-contain"
				src={card.img.src}
				alt="Son Chaeyoung from the kpop grup TWICE"
			/>
		</div>
	</div>

	<div
		class="bg-cardBg p-2 h-full w-full flex flex-col justify-center items-center border-t-2 border-cardBorder"
	>
		<p class="font-bold text-2xl">{card.title}</p>

		<div class="flex justify-center items-center text-wrap flex-wrap gap-1">
			{#each card.badges as badge, idx}
				<p class="text-lg">
					{badge}
				</p>
				{#if idx < card.badges.length - 1}
					<p class="text-4xl">&#183;</p>
				{/if}
			{/each}
		</div>

		<p class="text-xl flex-1">{card.description}</p>

		<div class="p-2 flex gap-4 w-full">
			{#each card.links as link}
				<A
					class="p-2 flex-1 font-bold bg-buttonsIdx text-buttonIndex"
					href={link.url}
					target="_blank"
					>{link.name}
				</A>
			{/each}
		</div>
	</div>
</article>
