/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        darkBg: '#000000',
        darkGradient: '#1C1C31',
        lightBg: '#ffffff',
        lightGradient: '#f1f1f1',
      }
    },
  },
  safelist: [
    'from-[#000000]',
    'to-[#1C1C31]',
    'from-[#ffffff]',
    'to-[#f3f4f6]',
  ],
  plugins: [],
};
