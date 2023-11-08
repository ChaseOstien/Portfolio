import React from "react";
import { Outlet } from "react-router-dom";
import './assets/main.css'

import Header from "./components/Header";
import Footer from "./components/Footer";

// import './assets/img/ProfilePicSmall.png';

export default function App() {
    return (
    <div className="flex-column justify-flex-start min-100-vh shadow-lg">
        <Header />
        <Footer />
        </div>
    );
}

