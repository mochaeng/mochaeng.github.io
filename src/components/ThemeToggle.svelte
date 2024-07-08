<script lang="ts">
  import { Moon, Sun } from "lucide-svelte";
  import { onMount } from "svelte";
  import IconButton from "./ui/IconButton.svelte";

  let theme: "light" | "dark" | "system" = "light";

  onMount(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (isDarkMode) {
      theme = "dark";
    } else {
      theme = "light";
    }
  });

  $: {
    console.log("i m recalled");
    if (theme == "dark") {
      document.documentElement.classList["add"]("dark");
    } else {
      document.documentElement.classList["remove"]("dark");
    }
  }

  function onToggleTheme() {
    if (theme == "dark") {
      theme = "light";
    } else {
      theme = "dark";
    }
  }
</script>

<IconButton onclick={onToggleTheme} isAriaHidden={true}>
  {#if theme == "light"}
    <Moon />
  {:else}
    <Sun />
  {/if}
</IconButton>
