import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

export default function ResumePage () {
    injectStyle();
    
    // JS to download resume file hosted in public directory
        const resumeDownload = () => {

            toast('Resume Downloaded!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

            const pdfUrl = "/Resume.pdf";
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "Resume.pdf"; // specify the filename
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    
    return (

        <div className="p-10 flex-col">
            <h2 className="font-burtons text-5xl py-2 text-teal-600 font-medium">Resume</h2>
            <h3 className="flex items-center px-3 text-xl font-bold text-gray-600">Download my resume <button onClick={resumeDownload} className="text-5xl text-gray-600 p-3"><FontAwesomeIcon icon={faDownload} beatFade /></button></h3>
            <div className="px-4">
            <h4 className="text-2xl text-teal-600 font-bold py-3 px-4">Front-end Proficiencies</h4>
                <ul className="list-disc ps-14 text-lg text-gray-900">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Web-API's</li>
                    <li>Tailwind CSS</li>
                    <li>JQuery</li>
                    <li>Handlebars.js</li>
                    <li>React</li>
                </ul>
            <h4 className="text-2xl text-teal-600 font-bold py-3 px-4">Back-end Proficiencies</h4>
                <ul className="list-disc ps-14 text-lg text-gray-900">
                    <li>3rd Party API's</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>SQL/Sequelize</li>
                    <li>MVC</li>
                    <li>MongoDB/Mongoose</li>
                    <li>PWA</li>
                    <li>GraphQL/Apollo Server</li>
                    <li>MERN Stack</li>
                </ul>
                </div>
        </div>
    )
}