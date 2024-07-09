<script lang="ts">
  import { Menu, X } from "lucide-svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import Button from "./ui/Button.svelte";
  import { onMount } from "svelte";

  let isAriaExpanded = false;
  const media = window.matchMedia("(width < 40em)");

  onMount(() => {
    media.addEventListener("change", function (e) {
      setupTopNav(e);
    });
  });

  function setupTopNav(event: MediaQueryListEvent) {
    if (!event.matches) {
      isAriaExpanded = false;
    }
  }

  function toggleHamburguer() {
    isAriaExpanded = !isAriaExpanded;
  }
</script>

<div
  class="bg-white border-b-4 border-black w-full sticky top-0 text-text font-base"
>
  <header
    class="flex justify-between max-w-screen-xl mx-auto h-16 items-center z-50"
  >
    <div class="hamburguer-toggle z-50">
      <Button
        onclick={toggleHamburguer}
        variant="icon"
        ariaExpanded={isAriaExpanded}
      >
        <span class="sr-only">Menu</span>
        {#if isAriaExpanded}
          <X />
        {:else}
          <Menu />
        {/if}
      </Button>
    </div>

    <div class="logo w-full text-center">
      <a href="/" class="text-3xl">
        <span class="font-heading text-black">Mochaeng</span>
      </a>
    </div>

    <nav class="text-3xl">
      <ul
        class="bg-background border-2 border-border"
        data-visible={isAriaExpanded}
      >
        <li>
          <a href="/">Projects</a>
        </li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </nav>

    <div class="theme-toggle">
      <ThemeToggle />
    </div>
  </header>
</div>

<style lang="less">
  header {
    padding: 0.5rem;
    nav {
      ul {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5rem;
        transform: translate(-100%);
        gap: 1.5rem;
        inset: 0 30% 0 0;
        li {
          a {
            position: relative;
          }

          a::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: hsl(var(--color-text));
            transform: scaleX(0);
            bottom: 0;
            left: 0;
            transform-origin: left;
            transition: transform 0.3s ease-out;
          }

          a:hover::after {
            width: 100%;
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        }
      }

      ul[data-visible="true"] {
        transform: translate(0);
      }
    }
  }

  @media (min-width: 40em) {
    header {
      padding: 1rem;
      nav {
        display: flex;
        height: 100%;
        ul {
          font-size: 1.875rem;
          position: static;
          display: flex;
          flex-direction: row;
          padding-top: 0;
          transform: translate(0);
          border: none;
          padding: 0 1rem;
          background-color: white;
          color: black;
        }
      }

      .hamburguer-toggle {
        display: none;
      }

      .logo {
        text-align: start;
      }

      nav {
        display: block;
      }

      .theme-toggle {
        display: block;
      }
    }
  }
</style>
