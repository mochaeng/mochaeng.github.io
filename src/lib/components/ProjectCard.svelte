<script lang="ts">
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

<article class="wrapper flex max-w-[500px] flex-col border-2 border-border text-text shadow-brute">
	<div class={cn('flex h-[240px] w-full items-center justify-center p-10', className)}>
		<div
			class={cn(
				'h-[210px] w-[210px] rounded-full border-2 border-border bg-gray-100 shadow-brute',
				card.className
			)}
		>
			<img
				class="h-full w-full rounded-full object-contain object-center"
				src={card.img.src}
				alt="Son Chaeyoung from the kpop grup TWICE"
			/>
		</div>
	</div>

	<div
		class="flex h-full w-full flex-col items-center justify-center border-t-2 border-cardBorder bg-cardBg p-2"
	>
		<p class="text-2xl font-bold">{card.title}</p>

		<div class="flex flex-wrap items-center justify-center gap-1 text-wrap">
			{#each card.badges as badge, idx}
				<p class="text-fluid-sm">
					{badge}
				</p>
				{#if idx < card.badges.length - 1}
					<p class="">&#183;</p>
				{/if}
			{/each}
		</div>

		<p class="flex-1">{card.description}</p>

		<div class="flex w-full gap-4 p-2">
			{#each card.links as link}
				<A
					class="flex-1 bg-buttonsIdx p-2 font-bold text-buttonIndex"
					href={link.url}
					target="_blank"
					>{link.name}
				</A>
			{/each}
		</div>
	</div>
</article>
