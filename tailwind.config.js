/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#edf0e3",
        purple: "#5f41e2",
        "purple-dark": "#412c9b",
        placeholder: "#666666",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
      },
      gridTemplateColumns: {
        footer: "2fr repeat(2, 1fr)",
      },
    },
  },
  plugins: [],
};
