/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/main.jsx', 
  './src/App.jsx', 
  './index.html', 
  './src/components/Footer.jsx',
  './src/components/Header.jsx', 
  './src/components/NavBar.jsx', 
  './src/components/Project.jsx',
  './src/components/pages/AboutPage.jsx',
  './src/components/pages/ContactPage.jsx',
  './src/components/pages/PortfolioPage.jsx',
  './src/components/pages/ResumePage.jsx',
  './src/components/PortfolioContainer.jsx',
 ],
  theme: {
    extend: {
      fontFamily: {
        'burtons': "burtons",
      },
      colors: {
        'gray': '#27272A'
      }
    },
  },
  plugins: [],
}

