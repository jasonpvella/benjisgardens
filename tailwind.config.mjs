/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-deep': '#1e3d2f',
        'green-mid': '#2d5c42',
        'green-light': '#4a7c6b',
        'green-pale': '#d4e6de',
        'ivory': '#f5f0e8',
        'ivory-dark': '#ede8df',
        'brass': '#b8965a',
        'brass-light': '#cca96e',
        'charcoal': '#1a1a1a',
        'warm-gray': '#e8e4dc',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
