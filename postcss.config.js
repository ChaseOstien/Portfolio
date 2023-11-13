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
            './src/components/pages/AboutPage.jsx',
            './src/components/pages/ContactPage.jsx',
            './src/components/pages/PortfolioPage.jsx',
            './src/components/pages/ResumePage.jsx',
            './src/components/PortfolioContainer.jsx'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)|| [],
          }),
    ],
};
