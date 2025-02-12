<script lang="ts">
	// import chaeyoung from '$lib/assets/chaeyoung.webp';
	import farmcode from '$lib/assets/projects/farm-code.webp';
	import flscheme from '$lib/assets/projects/fl-scheme.webp';
	import phonixfl from '$lib/assets/projects/PhoenixDeploy.svg';

	import ProjectCard from '$lib/components/ProjectCard.svelte';

	const projectTopics = [
		{
			name: 'Machine Learning',
			description:
				'I have experience in machine learning and federated learning. I can work with libraries like  PyTorch, Pandas, Dask, and Flower.',
			cards: [
				{
					title: 'PhoenixFL',
					badges: ['PyTorch', 'Golang', 'RabbitMQ', 'ReactJS'],
					description:
						'An asynchronous solution for malicious traffic classification in heterogeneous IoT networks using federated learning"',
					img: { src: phonixfl, alt: 'Son chaeyoung from twice' },
					className: 'bg-white',
					links: [{ url: 'https://github.com/mochaeng/PhoenixFL', name: 'GitHub' }]
				},
				{
					title: 'BarbaraFL',
					badges: ['PyTorch', 'WebSockets'],
					description:
						'A Federated Learning simulation library for tabular data built on top of PyTorch and with native Python WebSockets.',
					img: { src: flscheme, alt: 'Son chaeyoung from twice' },
					className: 'bg-white',
					links: [{ url: 'https://github.com/mochaeng/FL-System', name: 'GitHub' }]
				}
			]
		},
		// {
		// 	name: 'Web Dev',
		// 	description: 'I will add web dev projects.',
		// 	cards: [
		// 		{
		// 			title: 'Emerald',
		// 			badges: ['Svelte', 'Drizzle', 'Supabase'],
		// 			description:
		// 				'A full-stack social media platform design to be a safe place in a modern web.',
		// 			img: { src: chaeyoung, alt: 'Son chaeyoung from twice' },
		// 			links: [{ url: 'https://github.com/mochaeng/Emerald', name: 'GitHub' }]
		// 		}
		// 	]
		// },
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
					className: 'dark:bg-white',
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

<main class="mt-4 flex max-w-screen-xl flex-col items-center justify-start pt-20 text-text">
	{#each projectTopics as topic}
		<section
			class="mt-2 flex w-full flex-col items-center justify-center gap-4 p-4 text-center"
		>
			<h1 class="text-6xl">{topic.name}</h1>
			<p class="max-w-prose text-xl">{topic.description}</p>
			<div class="mt-4 flex flex-wrap justify-center gap-4">
				{#each topic.cards as card}
					<ProjectCard {card} className="text-black bg-card_1" />
				{/each}
			</div>
		</section>
	{/each}
</main>
