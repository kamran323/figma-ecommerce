import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screen: {
        "sm": "100px",
        // => @media (min-width: 640px) { ... }

        "md": "768px",
        // => @media (min-width: 640px) { ... }

        "lg": "1024px",
        // => @media (min-width: 640px) { ... }

        "xl": "1280px",
        // => @media (min-width: 640px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 640px) { ... }

      }
    },
  },
  plugins: [],
} satisfies Config;
