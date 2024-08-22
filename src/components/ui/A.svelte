<script lang="ts">
  import { cn } from "../../scripts/utils";

  export let className = $$restProps.class;
  export let href = $$restProps.href;
  export let target = $$restProps.target;
</script>

<a
  {href}
  {target}
  class={cn(
    "bg-header text-center rounded-base border-border text-black border-2 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none cursor-pointer",
    className
  )}
  {...$$restProps}
>
  <slot />
</a>
