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
        <div className="m-5">
            <div className="wrapper">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            <main className="">{renderPage()}</main>
            <Footer />
        </div>
    );
}
