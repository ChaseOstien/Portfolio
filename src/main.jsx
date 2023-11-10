// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/main.css';


import App from './App';
import Error from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import Resume from './pages/ResumePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <AboutPage />,
            },
            {
                path: '/Portfolio',
                element: <PortfolioPage />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Resume',
                element: <Resume />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

