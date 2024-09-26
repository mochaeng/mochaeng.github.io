<script lang="ts">
    import '@fontsource/pacifico'
    import { Menu, Moon, Sun, X } from 'lucide-svelte'
    import { onMount } from 'svelte'
    import Button from './ui/Button.svelte'
    import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

    let isAriaExpanded = false
    let isDark = document.documentElement.classList.contains('dark')
    let media = window.matchMedia('(width < 48em)')
    let header: HTMLHeadElement
    let body: HTMLBodyElement
    let prevScrollpos = 0

    onMount(() => {
        media.addEventListener('change', function (event) {
            setupNavbar(event)
        })
        body = document.querySelector('body')!
    })

    $: {
        if (isAriaExpanded) {
            disableBodyScroll(body)
        } else {
            enableBodyScroll(body)
        }
    }

    function setupNavbar(event: MediaQueryListEvent) {
        if (!event.matches) {
            isAriaExpanded = false
        }
    }

    function openHamburguer() {
        isAriaExpanded = true
    }

    function closeHamburguer() {
        isAriaExpanded = false
    }

    function toggleTheme() {
        const element = document.documentElement
        element.classList.toggle('dark')

        isDark = document.documentElement.classList.contains('dark')
        if (isDark) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
        }
    }
</script>

<svelte:window
    on:scroll={() => {
        if (!header) {
            return
        }

        if (window.innerWidth >= 768) {
            header.style.top = '0'
            header.style.transition = 'top 0.35s ease-out'
            return
        }

        let currentScrollPos = window.scrollY
        console.log(currentScrollPos)
        if (prevScrollpos > currentScrollPos || currentScrollPos < 43) {
            header.style.top = '0'
            header.style.transition = 'top 0.35s ease-out'
        } else {
            header.style.transition = 'top 0.35s ease-out'
            header.style.top = '-80px'
        }
        prevScrollpos = currentScrollPos
    }}
/>

<header
    class="bg-header fixed h-20 border-b-2 border-border w-full p-2 z-[999]"
    bind:this={header}
>
    <div
        class="wrapper max-w-screen-xl h-full mx-auto flex items-center justify-between p-2 gap-2"
    >
        <div class="hamburguer-open z-10" aria-expanded={isAriaExpanded}>
            <Button on:click={openHamburguer}>
                <span class="sr-only">Open Menu</span>
                <Menu size={32} class="dark:invert" />
            </Button>
        </div>

        <div class="hamburguer-close z-10" aria-expanded={isAriaExpanded}>
            <Button on:click={closeHamburguer}>
                <span class="sr-only">Close Menu</span>
                <X size={32} class="dark:invert" />
            </Button>
        </div>

        <div class="logo text-text">
            <a href="/" class="text-3xl font-bold text-center">L. C.</a>
        </div>

        <div class="overlay" data-visible={isAriaExpanded}></div>

        <nav class="text-text flex-1" data-visible={isAriaExpanded}>
            <ul class="z-50 bg-header" data-visible={isAriaExpanded}>
                <li><a class="text-2xl" href="/">Home</a></li>
                <li><a class="text-2xl" href="/blog">Blog</a></li>
                <li><a class="text-2xl" href="/about">About</a></li>
                <li><a class="text-2xl" href="/projects">Projects</a></li>
            </ul>
        </nav>

        <div class="theme-toggle z-10" data-visible={isAriaExpanded}>
            <Button on:click={toggleTheme}>
                <span class="sr-only">Toggle Theme</span>
                {#if isDark}
                    <Moon size={32} class="" />
                {:else}
                    <Sun size={32} class='' />
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

        .hamburguer-open[aria-expanded='true'] {
            display: none;
        }

        .hamburguer-close {
            position: absolute;
            top: 1rem;
            right: 2rem;
        }

        .hamburguer-close[aria-expanded='false'] {
            display: none;
        }

        .logo {
            text-align: center;
            a {
                font-family: 'Pacifico', 'Arial';
            }
        }

        .overlay {
            display: none;
            position: fixed;
            inset: 0 0 0 0;
            background-color: hsl(0 0% 0% / 0.7);
        }

        .overlay[data-visible='true'] {
            display: block;
        }

        .theme-toggle[data-visible='true'] {
            position: absolute;
            top: 6rem;
            right: 2rem;
        }

        nav[data-visible='true'] {
            display: block;
        }

        nav {
            display: none;
            ul {
                position: fixed;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2.4rem;
                inset: 0 30% 0 0;
                padding-top: 8rem;
                font-size: 1.25rem;
                border: 4px solid hsl(var(--color-text));
                transform: translate(-100%);
            }

            ul[data-visible='true'] {
                transform: translate(0);
            }

            li {
                a {
                    position: relative;
                }

                a::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: hsl(var(--color-main));
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

    @media (min-width: 48em) {
        header {
            .wrapper {
                gap: 1rem;
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
                display: block;
                height: 100%;
                ul {
                    height: 100%;
                    position: static;
                    flex-direction: row;
                    padding-top: 0;
                    transform: translate(0);
                    border: none;
                    justify-content: center;
                }

                li {
                    a::after {
                        background-color: hsl(var(--color-main));
                    }
                }
            }
        }
    }
</style>
