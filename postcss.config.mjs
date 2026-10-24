import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(124, 58, 237, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;

