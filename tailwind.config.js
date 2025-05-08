/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // use .dark class strategy :contentReference[oaicite:10]{index=10}
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // prevent JIT from purging dynamic utilities
    "bg-success-100",
    "bg-success-200",
    "bg-destructive-100",
    "bg-destructive-200",
    { pattern: /^btn-/ },
  ],
  important: "#__next", // scope !important to Next.js root :contentReference[oaicite:11]{index=11}
  theme: {
    extend: {
      borderWidth: { border: "1px" },
      colors: {
        border: "hsl(var(--border))",
        "light-400": "rgba(180,208,255,0.40)",
        "light-600": "rgba(180,208,255,0.60)",
        "light-800": "rgba(180,208,255,0.80)",
      },
    },
  },
  plugins: [
    /* eslint-disable @typescript-eslint/no-require-imports */
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"), // :contentReference[oaicite:12]{index=12}
    require("@tailwindcss/typography"), // :contentReference[oaicite:13]{index=13}
    require("@tailwindcss/aspect-ratio"), // :contentReference[oaicite:14]{index=14}
    /* eslint-enable @typescript-eslint/no-require-imports */
  ],
};
