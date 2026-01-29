const fs = require('fs');

const tailwindConfig = `
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

fs.writeFileSync('tailwind.config.js', tailwindConfig.trim());
fs.writeFileSync('postcss.config.js', postcssConfig.trim());

console.log('Tailwind config created!');
