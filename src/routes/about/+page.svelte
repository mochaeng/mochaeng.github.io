<script lang="ts">
	import AboutMeCard from '$lib/components/AboutMeCard.svelte';
</script>

<svelte:head>
	<title>About me</title>
</svelte:head>

<main class="mt-20 pt-4 w-full max-w-screen-xl px-4 text-text flex justify-center">
	<section class="about flex flex-col gap-2 mt-10">
		<AboutMeCard />
	</section>
</main>
