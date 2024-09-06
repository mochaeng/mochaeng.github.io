<script lang="ts">
  import { Calendar } from "lucide-svelte";
  import { formatDate } from "../scripts/utils";

  export let title;
  export let url;
  export let description;
  export let date;
</script>

<li class="text-black max-w-[430px]">
  <a href={url}>
    <div
      class="bg-blogBg p-4 flex flex-col gap-2 rounded-base border-2 shadow-brute border-border"
    >
      <p class="text-2xl font-medium">{title}</p>
      <p class="text-base">{description}</p>
      <div class="flex gap-2">
        <Calendar />
        <p>{formatDate(date)}</p>
      </div>
    </div>
  </a>
</li>
