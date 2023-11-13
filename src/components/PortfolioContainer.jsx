import { useState } from "react";
import React from "react";
import Header from './Header';
import Footer from './Footer';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";

export default function PortfolioContainer() {
    const [ currentPage, setCurrentPage ] = useState('AboutPage');

    const renderPage = () => {
        if (currentPage === 'AboutPage') {
            return <AboutPage />
        }
        if (currentPage === 'ContactPage') {
            return <ContactPage />
        }
        if (currentPage === 'PortfolioPage') {
            return <PortfolioPage />
        }
            return <ResumePage />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="antialiased">
            <div className="wrapper bg-slate-300 w-full">
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
                <main className="main min-h-screen bg-slate-100">{renderPage()}</main>
            <div className="bg-slate-300 bottom-0 w-full mt-auto">
                <Footer />
            </div>
        </div>
    );
}
