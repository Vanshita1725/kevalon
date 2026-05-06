export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'glow-lg': '0 24px 80px rgba(15, 23, 42, 0.24)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 20%), radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.14), transparent 22%)',
      },
      colors: {
        'hero-teal': '#1d7878',
      },
    },
  },
  plugins: [],
};
