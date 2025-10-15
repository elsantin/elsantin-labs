/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dev-hub-bg': '#0d1117',
        'dev-hub-surface': '#161b22',
        'dev-hub-text-primary': '#c9d1d9',
        'dev-hub-text-secondary': '#8b949e',
        'dev-hub-border': '#30363d',
        'accent-gold': '#a37e4f',
        'accent-gold-hover': '#b8915e',
        'text-on-gold': '#0d1117',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
}

