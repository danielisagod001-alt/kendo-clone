/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#F7F8FA',
        'card-bg': '#FFFFFF',
        'border': '#E5E7EB',
        'primary': '#6D31ED',
        'primary-hover': '#5E28D0',
        'primary-light': '#F3EFFF',
        'text-dark': '#1F2937',
        'text-light': '#6B7280',
      }
    },
  },
  plugins: [],
}
