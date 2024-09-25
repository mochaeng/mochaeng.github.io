<script lang="ts">
  import { annotate, annotationGroup } from "rough-notation";
  import type {RoughAnnotationGroup, RoughAnnotation} from 'rough-notation/lib/model'
  import { onMount } from "svelte";

  let isDark: boolean = document.documentElement.classList.contains('dark');
  let job: HTMLSpanElement;
  let place: HTMLSpanElement;
  let group: RoughAnnotationGroup;
  let a1: RoughAnnotation;
  let a2: RoughAnnotation;
  let annotations: RoughAnnotation[] = [];

  $:{
    // if (isDark) {
    //   console.log(a1)
    //   a1.color = 'blue'
    // } else if(a1.isShowing()) {
    //   a1.color = 'pink'
    // }
  }

  function onTriggerAnnotation() {
    a1 = annotate(job, { type: "highlight", color: "#159393" });
    a2 = annotate(place, {type: 'underline'})
    annotations.push(a1, a2);
    group = annotationGroup(annotations);
    group.show();
    return group;
  }

  onMount(() => {
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    group = onTriggerAnnotation()

    return () => {
      observer.disconnect();
      group.hide();
      annotations.forEach(annotation => annotation.hide());
      annotations.forEach(annotation => annotation.remove());
    }
  });
</script>

<div class="w-full text-xl">
    Hello, I'm Luiz Campos, a <span bind:this={job}>software developer</span>
    based in <span bind:this={place}>Brazil</span>.
</div>

<p>{isDark}</p>
