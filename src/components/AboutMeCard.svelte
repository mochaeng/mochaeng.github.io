<script lang="ts">
  import { annotate, annotationGroup } from "rough-notation";
  import { onMount } from "svelte";

  let myName: HTMLSpanElement;

  onMount(() => {
    const a1 = annotate(myName, { type: "highlight", color: "purple" });
    const group = annotationGroup([a1]);
    group.show();
  });
</script>



<div class="w-full">
  My name is <span bind:this={myName}>Luiz Campos</span>
</div>
