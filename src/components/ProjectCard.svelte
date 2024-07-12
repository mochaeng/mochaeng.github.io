<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import A from "../components/ui/A.svelte";
  type Props = {
    img: {
      src: string;
      alt: string;
    };
    title: string;
    badges: string[];
    description: string;
    links: {
      url: string;
      name: string;
    }[];
  };

  export let card: Props;
  export let className: string;
</script>

<article
  class={twMerge(
    "max-w-[500px] p-4 wrapper flex flex-col justify-between items-center gap-2 border-2 border-border rounded-base shadow-brute",
    className
  )}
>
  <div
    class="max-w-[460px] max-h-[260px] border-2 rounded-base border-border shadow-brute bg-black"
  >
    <img
      class="h-full w-full object-top object-cover border-2 rounded-base border-border shadow-brute bg-black"
      src={card.img.src}
      alt="Son Chaeyoung from the kpop grup TWICE"
    />
  </div>

  <p class="font-bold text-2xl">{card.title}</p>
  <div
    class="flex justify-center items-center text-wrap flex-wrap gap-1 w-full"
  >
    {#each card.badges as badge, idx}
      <p class="text-lg">
        {badge}
      </p>
      {#if idx < card.badges.length - 1}
        <p class="text-4xl">&#183;</p>
      {/if}
    {/each}
  </div>
  <p class="text-xl flex-1">{card.description}</p>

  <div class="p-2 flex gap-4 w-full">
    {#each card.links as link}
      <A className="p-2 flex-1 font-bold" href={link.url} target="_blank"
        >{link.name}</A
      >
    {/each}
  </div>
</article>

<style lang="less">
</style>
