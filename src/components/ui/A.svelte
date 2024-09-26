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
    "bg-buttons text-center rounded-base border-border text-text border-2 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none cursor-pointer",
    className
  )}
  {...$$restProps}
>
  <slot />
</a>
