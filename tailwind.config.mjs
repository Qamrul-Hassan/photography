/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Path to all files in the `app` directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Path to all components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },
      colors: {
        ink: "#050505",
        ember: "#ff7a18",
        emberSoft: "#f7b35a",
      },
    },
  },
  plugins: [],
};
