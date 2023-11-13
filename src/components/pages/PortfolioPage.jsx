import React from "react";
import Project from "../Project";

const projectData = [
    
    {
        id: 1,
        projectName: 'Venue Viewer',
        projectDescription: 'Node.js, MySQL, Handlebars.js, Tailwind CSS.',
        img: 'src/assets/img/Login.png',
        imgAlt: 'Sign in page for Venue Viewer application.',
        repoLink: 'https://github.com/ChaseOstien/Venue-Viewer',
        deployed: 'https://venue-viewer-team1-69164e361419.herokuapp.com/login'
    },
    {
        id: 2,
        projectName: 'Tech Blog',
        projectDescription: 'MVC, Handlebars.js, Sequelize, Express-session.',
        img: 'src/assets/img/TechBlog.png',
        imgAlt: 'Sign in page for Tech Blog application.',
        repoLink: 'https://github.com/ChaseOstien/Tech_Blog',
        deployed: 'https://tech-blog-12-2c4e0baa09b6.herokuapp.com/'
    },
    {
        id: 3,
        projectName: 'E-Commerce-Backend',
        projectDescription: 'Express.js, Sequelize, MongoDB, Mongoose.',
        img: 'src/assets/img/EcommerceExample.png',
        imgAlt: 'JSON response data for E Commerce routes.',
        repoLink: 'https://github.com/ChaseOstien/E-Commerce-BackEnd'
    },
    {
        id: 4,
        projectName: 'Content Manager',
        projectDescription: 'Node.js, Inquirer, MySQL.',
        img: 'src/assets/img/Content_manager1.png',
        imgAlt: 'Example of command line prompts for this application.',
        repoLink: 'https://github.com/ChaseOstien/Content_Manager'
    },
    {
        id: 5,
        projectName: 'Just Another Text Editor',
        projectDescription: 'PWA, IndexDB, WebPack, Local Storage.',
        img: 'src/assets/img/JATEscreenshot.png',
        imgAlt: 'Text Editor Home Screen.',
        repoLink: 'https://github.com/ChaseOstien/PWA-TextEditor',
        deployed: 'https://j-a-t-e-p-w-a-25155f7ea5a4.herokuapp.com/'
    },
    {
        id: 6,
        projectName: 'Note Taker',
        projectDescription: 'Node.js, Express.js, JavaScript.',
        img: 'src/assets/img/Screenshot11.png',
        imgAlt: 'Homepage for Note Taker application.',
        repoLink: 'https://github.com/ChaseOstien/Note_Taker',
        deployed: 'https://note-taker-remindme-1dc60909ba4b.herokuapp.com/'
    },
    {
        id: 7,
        projectName: 'Cinephile',
        projectDescription: 'Node.js, Express.js, JavaScript, Bulma.',
        img: 'src/assets/img/CinephileScreenshot.jpeg',
        imgAlt: 'Homepage for Cinephile application.',
        repoLink: 'https://github.com/ChaseOstien/Cinephile'
    },
    {
        id: 8,
        projectName: 'README Generator',
        projectDescription: 'Node.js, Inquirer, JavaScript.',
        img: 'src/assets/img/Screenshot1.png',
        imgAlt: 'CLI prompts for application.',
        repoLink: 'https://github.com/ChaseOstien/README_Generator'
    },
    {
        id: 9,
        projectName: 'Weather Dashboard',
        projectDescription: 'Node.js, JavaScript, API.',
        img: 'src/assets/img/WeatherDashboard.png',
        imgAlt: 'Weather Dashboard.',
        repoLink: 'https://github.com/ChaseOstien/Weather-Dashboard'
    },
    
];

export default function PortfolioPage () {
    return (
        <><h2 className="text-5xl pl-10 pt-10 text-teal-600 font-medium flex text-center">Portfolio</h2>
        <div className="flex flex-wrap justify-evenly py-7 min-h-full">
            {projectData.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div></>
    )
}