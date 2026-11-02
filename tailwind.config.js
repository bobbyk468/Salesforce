/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx,json}',
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
