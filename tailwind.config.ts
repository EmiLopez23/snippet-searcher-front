import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "ds-background-200": "#000000",
        "ds-background-100": "#0a0a0a",
        "ds-gray-1000": "#ededed",
        "ds-gray-900": "#a1a1a1",
        "ds-gray-800": "#7d7d7d",
        "ds-gray-700": "#8f8f8f",
        "ds-gray-600": "#878787",
        "ds-gray-500": "#454545",
        "ds-gray-400": "#2e2e2e",
        "ds-gray-300": "#292929",
        "ds-gray-200": "#1f1f1f",
        "ds-gray-100": "#1a1a1a",
        "ds-gray-alpha-1000": "#ebebeb",
        "ds-gray-alpha-900": "#9c9c9c",
        "ds-gray-alpha-800": "#787878",
        "ds-gray-alpha-700": "#8a8a8a",
        "ds-gray-alpha-600": "#828282",
        "ds-gray-alpha-500": "#3d3d3d",
        "ds-gray-alpha-400": "#242424",
        "ds-gray-alpha-300": "#212121",
        "ds-gray-alpha-200": "#171717",
        "ds-gray-alpha-100": "#0f0f0f",
        "ds-blue-1000": "#ebf6ff",
        "ds-blue-900": "#48a7ff",
        "ds-blue-800": "#005be8",
        "ds-blue-700": "#006ffe",
        "ds-blue-600": "#008fff",
        "ds-blue-500": "#00418c",
        "ds-blue-400": "#003675",
        "ds-blue-300": "#012f62",
        "ds-blue-200": "#032149",
        "ds-blue-100": "#05193a",

      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "share-tech-mono": ["Share Tech Mono", "monospace"],
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
