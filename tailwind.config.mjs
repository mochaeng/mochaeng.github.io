/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background))",
        main: "hsl(var(--color-main))",
        border: "hsl(var(--color-border))",
        cardBorder: "hsl(var(--card-border))",
        text: "hsl(var(--color-text))",
        mainAccent: "hsl(var(--main-accent))",
        header: "hsl(var(--header-bg))",
        secondaryBlack: "hsl(var(--secondary-black))",
        card_1: "hsl(var(--card-1))",
        card_2: "hsl(var(--card-2))",
        card_3: "hsl(var(--card-3))",
        index: "hsl(var(--color-index))",
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        brute: "4px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
