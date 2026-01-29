module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Helvetica',
          'Arial'
        ]
      },
      colors: {
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#7c3aed',
          600: '#6d28d9'
        }
      },
      boxShadow: {
        'md-soft': '0 8px 24px rgba(99,102,241,0.08)'
      }
    }
  },
  plugins: [],
};
