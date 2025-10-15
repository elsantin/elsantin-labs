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
        'dev-hub-bg': 'var(--color-dev-hub-bg)',
        'dev-hub-surface': 'var(--color-dev-hub-surface)',
        'dev-hub-text-primary': 'var(--color-dev-hub-text-primary)',
        'dev-hub-text-secondary': 'var(--color-dev-hub-text-secondary)',
        'dev-hub-border': 'var(--color-dev-hub-border)',
        'accent-gold': 'var(--color-accent-gold)',
        'accent-gold-hover': 'var(--color-accent-gold-hover)',
        'text-on-gold': 'var(--color-text-on-gold)',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
}

