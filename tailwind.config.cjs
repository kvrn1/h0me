/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.md", "./.vitepress/theme/**/*.{vue,js}"],
  plugins: [require("@tailwindcss/typography")],
  // ...
};
