<script lang="ts">
  let buttonProps = {
    class: [$$restProps.class],
  };
</script>

<button
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:focus
  {...buttonProps}
  class="bg-white rounded-base border-border text-black border-2 p-1 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none"
>
  <slot />
</button>
