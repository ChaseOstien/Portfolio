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
  './src/pages/AboutPage.jsx',
  './src/pages/ContactPage.jsx',
  './src/pages/PortfolioPage.jsx',
  './src/pages/ResumePage.jsx',
  './src/components/PortfolioContainer.jsx',
 ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      }
    },
  },
  plugins: [],
}

