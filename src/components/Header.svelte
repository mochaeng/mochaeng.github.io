<script lang="ts">
  import "@fontsource/homemade-apple";
  import { Menu, Moon, Sun, X } from "lucide-svelte";
  import { onMount } from "svelte";
  import Button from "./ui/Button.svelte";

  let isAriaExpanded = false;
  let isDark = document.documentElement.classList.contains("dark");
  let media = window.matchMedia("(width < 43em)");

  onMount(() => {
    media.addEventListener("change", function (event) {
      setupNavbar(event);
    });
  });

  function setupNavbar(event: MediaQueryListEvent) {
    if (!event.matches) {
      isAriaExpanded = false;
    }
  }

  function openHamburguer() {
    isAriaExpanded = true;
  }

  function closeHamburguer() {
    isAriaExpanded = false;
  }

  function toggleTheme() {
    const element = document.documentElement;
    element.classList.toggle("dark");

    isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
</script>

<header class="fixed top-0 bg-white h-16 border-2 border-border w-full">
  <div class="wrapper max-w-screen-xl h-full mx-auto flex items-center p-2">
    <div class="hamburguer-open z-10" aria-expanded={isAriaExpanded}>
      <Button on:click={openHamburguer}>
        <span class="sr-only">Open Menu</span>
        <Menu size={32} />
      </Button>
    </div>

    <div class="hamburguer-close z-10" aria-expanded={isAriaExpanded}>
      <Button on:click={closeHamburguer}>
        <span class="sr-only">Close Menu</span>
        <X size={32} />
      </Button>
    </div>

    <div class="logo w-full">
      <a href="/" class="text-3xl font-bold">L. C.</a>
    </div>

    <div class="overlay" data-visible={isAriaExpanded}></div>

    <nav class="text-text">
      <ul class="z-50" data-visible={isAriaExpanded}>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>

    <div class="theme-toggle z-10" data-visible={isAriaExpanded}>
      <Button on:click={toggleTheme}>
        <span class="sr-only">Toggle Theme</span>
        {#if isDark}
          <Moon size={32} />
        {:else}
          <Sun size={32} />
        {/if}
      </Button>
    </div>
  </div>
</header>

<style lang="less">
  header {
    .hamburguer-open {
      position: relative;
      z-index: 9999;
    }

    .hamburguer-open[aria-expanded="true"] {
      display: none;
    }

    .hamburguer-close {
      position: absolute;
      top: 1rem;
      right: 2rem;
    }

    .hamburguer-close[aria-expanded="false"] {
      display: none;
    }

    .logo {
      text-align: center;
      a {
        font-family: "Homemade Apple", "Arial";
      }
    }

    .overlay {
      display: none;
      position: fixed;
      inset: 0 0 0 0;
      background-color: hsl(0 0% 0% / 0.7);
    }

    .overlay[data-visible="true"] {
      display: block;
    }

    .theme-toggle[data-visible="true"] {
      position: absolute;
      top: 6rem;
      right: 2rem;
    }

    nav {
      ul {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        inset: 0 30% 0 0;
        padding-top: 10rem;
        font-size: 2rem;
        border: 4px solid black;
        background-color: hsl(var(--color-background));
        transform: translate(-100%);
      }

      ul[data-visible="true"] {
        transform: translate(0);
      }

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
  }

  @media (min-width: 43em) {
    header {
      .wrapper {
        gap: 2rem;
        padding: 0 1rem;
      }

      .hamburguer-close,
      .hamburguer-open {
        display: none;
      }

      .logo {
        text-align: start;
      }

      nav {
        ul {
          position: static;
          flex-direction: row;
          padding-top: 0;
          transform: translate(0);
          background-color: white;
          border: none;
          color: black;
        }

        li {
          a::after {
            background-color: black;
          }
        }
      }
    }
  }
</style>
