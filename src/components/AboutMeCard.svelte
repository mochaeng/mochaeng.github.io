<script lang="ts">
  import { annotate, annotationGroup } from "rough-notation";
  import type {RoughAnnotationGroup, RoughAnnotation} from 'rough-notation/lib/model'
  import { onMount } from "svelte";

  let isDark: boolean = document.documentElement.classList.contains('dark');
  let job: HTMLSpanElement;
  let place: HTMLSpanElement;
  let webDev: HTMLSpanElement;
  let linux: HTMLSpanElement;
  let hire: HTMLElement;

  let group: RoughAnnotationGroup;
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
    const a1 = annotate(job, { type: "highlight", color: "#159393" });
    const a2 = annotate(place, {type: 'underline'});
    const a3 = annotate(webDev, {type: 'underline'});
    const a4 = annotate(linux, {type: 'underline'});
    const a5 = annotate(hire, {type: 'circle'});
    group = annotationGroup([a1, a2, a3, a4, a5]);
    group.show();
    return group;
  }

  onMount(() => {
    group = onTriggerAnnotation()

    return () => {
      group.hide();
      annotations.forEach(annotation => annotation.hide());
      annotations.forEach(annotation => annotation.remove());
    }
  });
</script>

<div class="text-[1.125rem] leading-[1.6] w-full text-wrap text-center flex flex-col gap-4 max-w-prose">
    <p>Hello, I'm luiz campos, a software <span bind:this={job}>developer</span>
    based in <span bind:this={place}>Brazil</span>.</p>

    <p>I'm currently in my last semester as an undergrad, researching/working
    on my final project on the topic of federated learning and distributed systems.
    I'm also a huge <span bind:this={linux}>linux</span> geek - I'm not afraid of
    terminals or digging through obscure documentation.</p>

    <p>I have familiarity with <span bind:this={webDev}>web-development</span> and
    I'm looking to get my first opportunity. <span bind:this={hire}>Hire-me?</span></p>
</div>
