<script lang="ts">
  export let onclick = () => {};
  export let ariaHidden = false;
  export let ariaExpanded = false;
  export let ariaControls = "";
  export let variant: "icon" | "text" = "icon";

  let iconClass =
    "bg-white rounded-base border-border text-black border-2 p-2 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none sm:p-1";
</script>

<button
  class={variant === "text" ? "" : iconClass}
  on:click={onclick}
  aria-hidden={ariaHidden}
  aria-expanded={ariaExpanded}
  aria-controls={ariaControls}
>
  <slot />
</button>
