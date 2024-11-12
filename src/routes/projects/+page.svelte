<script lang="ts">
	import chaeyoung from '$lib/assets/chaeyoung.webp?enhanced';
	import farmcode from '$lib/assets/projects/farm-code.webp?enhanced';
	import flscheme from '$lib/assets/projects/fl-scheme.webp?enhanced';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projectTopics = [
		{
			name: 'Machine Learning',
			description:
				'I have experience in machine learning and federated learning. I can work with libraries like  PyTorch, Pandas, Dask, and Flower.',
			cards: [
				{
					title: 'PhoenixFL',
					badges: ['PyTorch', 'RabbitMQ', 'Pandas', 'Flower'],
					description:
						'A distributed intrusion detection system leveraging Federated Learning to detect malicious network packets through Neural Nets.',
					img: { src: chaeyoung, alt: 'Son chaeyoung from twice' },
					links: [{ url: 'https://github.com/mochaeng/PhoenixFL', name: 'GitHub' }]
				},
				{
					title: 'BarbaraFL',
					badges: ['PyTorch', 'WebSockets'],
					description:
						'A Federated Learning simulation library for tabular data built on top of PyTorch and with native Python WebSockets.',
					img: { src: flscheme, alt: 'Son chaeyoung from twice' },
					links: [{ url: 'https://github.com/mochaeng/FL-System', name: 'GitHub' }]
				}
			]
		},
		{
			name: 'Web Dev',
			description: 'I will add web dev projects.',
			cards: [
				{
					title: 'Emerald',
					badges: ['Svelte', 'Drizzle', 'Supabase'],
					description:
						'A full-stack social media platform design to be a safe place in a modern web.',
					img: { src: chaeyoung, alt: 'Son chaeyoung from twice' },
					links: [{ url: 'https://github.com/mochaeng/Emerald', name: 'GitHub' }]
				}
			]
		},
		{
			name: 'Game Dev',
			description:
				"I'm an amateur game developer, currently learning Godot. What I like about Game Dev is being able to apply both creative and analytical thinking to solve problems.",
			cards: [
				{
					title: 'FarmCode',
					badges: ['Godot', 'C#'],
					description:
						'A game to teach programming logic through a block-based approach. The game was tested by 30 students in a class and showed effective results.',
					img: {
						src: farmcode,
						alt: 'Starting screen from the FarmCode game.'
					},
					links: [
						{ url: 'https://github.com/mochaeng/IHM', name: 'GitHub' },
						{ url: 'https://mochaeng.itch.io/farmcode', name: 'Play' }
					]
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<main class="flex flex-col justify-start items-center text-text max-w-screen-xl pt-20 mt-4">
	{#each projectTopics as topic}
		<section
			class="mt-2 flex flex-col items-center justify-center p-4 gap-4 w-full text-center"
		>
			<h1 class="text-6xl">{topic.name}</h1>
			<p class="text-xl max-w-prose">{topic.description}</p>
			<div class="mt-4 flex justify-center gap-4 flex-wrap">
				{#each topic.cards as card}
					<ProjectCard {card} className="text-black bg-card_1" />
				{/each}
			</div>
		</section>
	{/each}
</main>
