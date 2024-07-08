<script lang="ts">
  export let onclick = () => {};
  export let isAriaHidden = false;
</script>

<button
  class="rounded-base bg-white border-border border-2 p-2 shadow-brute hover:translate-x-boxShadowX hover:translate-y-boxShadowY transition-all hover:shadow-none"
  aria-hidden={isAriaHidden}
  on:click={onclick}
>
  <slot />
</button>
