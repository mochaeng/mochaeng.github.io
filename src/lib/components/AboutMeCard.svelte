<script lang="ts">
	import { annotate, annotationGroup } from 'rough-notation';
	import type { RoughAnnotationGroup, RoughAnnotation } from 'rough-notation/lib/model';
	import { onMount } from 'svelte';

	let job: HTMLSpanElement;
	let place: HTMLSpanElement;
	let webDev: HTMLSpanElement;
	let linux: HTMLSpanElement;
	let hire: HTMLElement;
	let first: HTMLElement;

	let group: RoughAnnotationGroup;
	let annotations: RoughAnnotation[] = [];

	function onTriggerAnnotation() {
		const a1 = annotate(job, { type: 'box' });
		const a2 = annotate(place, { type: 'underline' });
		const a3 = annotate(linux, { type: 'underline' });
		// const a4 = annotate(webDev, { type: 'underline' });
		const a5 = annotate(first, { type: 'underline' });
		const a6 = annotate(hire, { type: 'circle', padding: 10 });
		annotations = [a1, a2, a3, a5, a6];
		group = annotationGroup(annotations);
		group.show();
		return group;
	}

	onMount(() => {
		group = onTriggerAnnotation();
		return () => {
			group.hide();
			annotations.forEach((annotation) => annotation.hide());
			annotations.forEach((annotation) => annotation.remove());
			annotations = [];
		};
	});
</script>

<div class="flex w-full flex-col gap-4 text-wrap text-justify">
	<p>
		Hello, I'm Luiz Campos, a software <span bind:this={job}>developer</span>
		based in <span bind:this={place}>Brazil</span>.
	</p>

	<p>
		I'm a recent graduate in the computing field. I'm especially interested in web development,
		federated learning, distributed systems, and networks. Lately, I've been exploring
		blockchain development too. I'm also a huge <span bind:this={linux}>linux</span> geek &mdash;
		I'm not afraid of terminals or digging through obscure documentation.
	</p>

	<p>
		I want to learn from experienced developers and grow by working on real projects. I'm
		currently looking for my <span bind:this={first}>first</span> opportunity to contribute, improve,
		and keep pushing my skills forward.
	</p>

	<p><span bind:this={hire}>Hire-me?</span></p>
</div>
