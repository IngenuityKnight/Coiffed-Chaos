import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF7F2',
        canvasAlt: '#F8F1E8',
        cream: '#FFFDF8',
        ink: '#1F1A17',
        muted: '#5F5148',
        cocoa: '#7A5542',
        deep: '#3A2418',
        gold: '#C49A5A',
        goldDeep: '#A87E3F',
        line: '#E7D8C7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        wider2: '0.18em',
      },
      maxWidth: {
        prose2: '62ch',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31,26,23,0.04), 0 8px 24px -12px rgba(58,36,24,0.12)',
        lift: '0 2px 4px rgba(31,26,23,0.06), 0 20px 40px -20px rgba(58,36,24,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
