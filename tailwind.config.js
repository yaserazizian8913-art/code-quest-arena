module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(168, 85, 247, 0.35)',
      },
      colors: {
        night: '#070d1f',
        panel: '#0d1528',
        prism: '#7c3aed',
        aqua: '#22d3ee',
      },
    },
  },
  plugins: [],
};
