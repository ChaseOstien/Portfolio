/* eslint-disable no-undef */
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        require("@fullhuman/postcss-purgecss")({
            content: ['./src/main.jsx', './src/App.jsx', './index.html', 
            './src/components/Footer.jsx',
            './src/components/Header.jsx', 
            './src/components/NavBar.jsx', 
            './src/components/Project.jsx',
            './src/pages/AboutPage.jsx',
            './src/pages/ContactPage.jsx',
            './src/pages/PortfolioPage.jsx',
            './src/pages/ResumePage.jsx',
            './src/components/PortfolioContainer.jsx'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)|| [],
          }),
    ],
};
