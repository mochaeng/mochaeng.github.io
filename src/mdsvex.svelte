<script lang="ts" module>
	import LazyImg from '$lib/components/ui/LazyImg.svelte';
	export { LazyImg };
</script>

<script lang="ts">
	let props = $props();
</script>

{@render props.children?.()}
