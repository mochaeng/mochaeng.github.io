<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import type { IconType } from 'svelte-icons-pack';
	export type technology = {
		name: string;
		icon: IconType;
		color?: string;
	};

	let { technologies, color }: { technologies: technology[]; color: string } = $props();
</script>

<div class="flex flex-wrap gap-6">
	{#each technologies as tech}
		<div
			class="flex aspect-square w-[120px] flex-col items-center justify-center gap-1 rounded-base border-2 border-border bg-cardBg p-3 text-lg shadow-brute transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
		>
			<Icon src={tech.icon} size={48} color={tech.color ? tech.color : color} />
			<div class="tech-name font-bold">{tech.name}</div>
		</div>
	{/each}
</div>
