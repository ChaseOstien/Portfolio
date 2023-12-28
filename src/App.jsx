import React from "react";
import PortfolioContainer from './components/PortfolioContainer';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () =>  
    <>
        <PortfolioContainer />
        <ToastContainer />
    </>
export default App;
