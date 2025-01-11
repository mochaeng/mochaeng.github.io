<script lang="ts">
	import A from '$lib/components/ui/A.svelte';

	import '@fontsource/acme';
	import me from '$lib/assets/me.jpeg?enhanced';
</script>

<svelte:head>
	<title>Mochaeng</title>
</svelte:head>

<main class="flex-1 text-text text-balance max-w-screen-xl pt-4">
	<div class="first">
		<div class="presentation info flex flex-col items-center p-4 text-text">
			<h1 class="text-6xl text-center">
				<span class="presentation text-text">
					Hi, I'm Luiz Campos.
					<span class="at text-5xl font-bold">(@MochaEng)</span>
				</span>
			</h1>
			<p class="text-3xl mt-8 text-text text-wrap text-center">
				Software Developer based in Brazil, linux enjoyer, docs reader, and terminals lover.
			</p>
			<div class="p-4 flex gap-6">
				<A
					href="/projects"
					className="text-buttonIndex bg-buttonsIdx p-3 font-bold text-xl w-28"
				>
					Projects
				</A>
				<A
					href="/about"
					className="bg-buttonsIdx text-buttonIndex p-3 font-bold text-xl w-28"
				>
					About
				</A>
			</div>
		</div>
	</div>
	<div class="second">
		<enhanced:img
			class="photo rounded-base border-border border-2 object-contain shadow-brute"
			src={me}
			alt="Luna from sailor moon"
		/>
	</div>
</main>

<style lang="less">
	.presentation {
		font-family: 'Acme', 'DM Sans Variable', system-ui;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;
		margin-top: 5rem;

		.first {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.info {
				width: 93%;
				border-width: 2px;
				border-color: hsl(var(--color-border));
				border-radius: 5px;
				box-shadow: 2px 2px 0px 0px hsl(var(--color-border));
				background-color: hsl(var(--color-index));
				.at {
					font-size: 2.5rem;
				}
			}
		}

		.second {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.photo {
				max-width: 200px;
			}
		}
	}

	@media (min-width: 414px) {
		main {
			.first {
				.info {
					width: 90%;
					.at {
						font-size: 3rem;
					}
				}
			}
		}
	}

	@media (min-width: 840px) {
		main {
			align-items: center;
			display: grid;
			grid-template-columns: 2fr 1fr;

			.first {
				.info {
					max-width: 100%;
				}
			}

			.second {
				width: 100%;
				.photo {
					max-width: 250px;
				}
			}
		}
	}
</style>
