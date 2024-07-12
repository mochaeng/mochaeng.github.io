<script lang="ts">
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
</script>

<div
  class="bg-main max-w-[500px] p-4 wrapper flex flex-col gap-2 border-2 border-border rounded-base shadow-brute"
>
  <div class="border-2 rounded-base border-border shadow-brute bg-black">
    <img
      class="border-2 rounded-base border-border shadow-brute bg-black"
      src={card.img.src}
      alt="Son Chaeyoung from the kpop grup TWICE"
    />
  </div>

  <p class="font-bold text-2xl">{card.title}</p>
  <div class="flex justify-center items-center gap-2">
    {#each card.badges as badge, idx}
      <p class="text-md">{badge}</p>
      {#if idx < card.badges.length - 1}
        <p class="text-4xl">&#183;</p>
      {/if}
    {/each}
  </div>
  <p class="text-xl">{card.description}</p>

  <div class="p-2 flex w-full">
    {#each card.links as link}
      <A className="p-2 flex-1" href={link.url} target="_blank">{link.name}</A>
    {/each}
  </div>
</div>

<style lang="less">
</style>
