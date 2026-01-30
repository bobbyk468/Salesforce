/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        salesforce: {
          blue: '#0176D3',
          dark: '#032D60',
          light: '#1B96FF',
          cloud: '#00A1E0',
        },
      },
    },
  },
  plugins: [],
}
