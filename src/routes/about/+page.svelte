<script lang="ts">
	import TechStack from '$lib/components/TechStack.svelte';
	import type { technology } from '$lib/components/TechStack.svelte';
	import AboutMeCard from '$lib/components/AboutMeCard.svelte';
	import {
		SiPython,
		SiGo,
		SiPytorch,
		SiReact,
		SiRust,
		SiRabbitmq,
		SiTypescript,
		SiOcaml,
		SiTailwindcss,
		SiSvelte,
		SiAstro,
		SiPostgresql,
		SiDocker,
		SiRedis,
		SiPandas
	} from 'svelte-icons-pack/si';

	const languages = [
		{ name: 'TypeScript', icon: SiTypescript, color: '#1e66f5' },
		{ name: 'Python', icon: SiPython, color: '#df8e1d' },
		{ name: 'Golang', icon: SiGo, color: '#04a5e5' },
		{ name: 'Rust', icon: SiRust, color: '#dd7878' },
		{ name: 'Ocaml', icon: SiOcaml }
	];

	const frontend = [
		{ name: 'ReactJS', icon: SiReact, color: '#74c7ec' },
		{ name: 'Svelte', icon: SiSvelte, color: '#d20f39' },
		{ name: 'Astro', icon: SiAstro, color: '#494d64' },
		{ name: 'Tailwind', icon: SiTailwindcss, color: '#89dceb' }
	];

	const backend = [
		{ name: 'PostgreSQL', icon: SiPostgresql, color: '#1e66f5' },
		{ name: 'Docker', icon: SiDocker, color: '#1e66f5' },
		{ name: 'RabbitMQ', icon: SiRabbitmq, color: '#fe640b' },
		{ name: 'Redis', icon: SiRedis, color: '#d20f39' }
	];
	const ml = [
		{ name: 'PyTorch', icon: SiPytorch, color: '#fe640b' },
		{ name: 'Pandas', icon: SiPandas, color: '#7287fd' }
	];
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

{#snippet stack(name: string, technologies: technology[])}
	<p class="py-6 text-3xl font-bold">{name}</p>
	<TechStack {technologies} color="#dc8a78" />
{/snippet}

<main class="mb-10 mt-8 flex w-full max-w-screen-xl justify-center px-4 pt-4 text-text">
	<section class="about mt-10 flex flex-col gap-2">
		<h1 class="py-6 text-5xl font-bold text-[#7287fd] dark:text-[#89b4fa]">About me</h1>
		<AboutMeCard />

		<p class="mt-6 py-6 text-5xl font-bold text-[#7287fd] dark:text-[#89b4fa]">Technologies</p>
		<p class="pb-6 text-3xl font-bold">Languages</p>
		<TechStack technologies={languages} color="#dc8a78" />
		{@render stack('Frontend', frontend)}
		{@render stack('Backend', backend)}
		{@render stack('ML', ml)}
	</section>
</main>
