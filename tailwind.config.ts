import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary": "linear-gradient(180deg, #111E44 -11.11%, #1A2957 100%)",
      },
      fontSize: {
        "md": "1rem",
      },
      colors: {
        primary: "#111E44",
        secondary: "#253465",
        tertiary: "#005BDA",
        links: "#93BDF8",
        light: "#F7F7F7",
        dark: "#121212",
      },
    },
  },
  plugins: [],
};
export default config;
