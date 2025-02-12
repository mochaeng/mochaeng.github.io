<script lang="ts" module>
	import LazyImg from '$lib/components/ui/LazyImg.svelte';
	import { a, code } from '$lib/components/ui';

	export { a, code };
</script>

<script lang="ts">
	let props = $props();
</script>

{@render props.children?.()}
