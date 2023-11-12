import React from "react";
import Project from "../Project";

const projectData = [
    
    {
        id: 1,
        projectName: 'Venue Viewer',
        projectDescription: 'Node.js, MySQL, Handlebars.js, Tailwind CSS.',
        img: 'src/assets/img/Login.png',
        imgAlt: 'Sign in page for Venue Viewer application.',
        repoLink: 'https://github.com/ChaseOstien/Venue-Viewer'
    },
    {
        id: 2,
        projectName: 'Tech Blog',
        projectDescription: 'MVC, Handlebars.js, Sequelize, Express-session.',
        img: 'src/assets/img/TechBlog.png',
        imgAlt: 'Sign in page for Tech Blog application.',
        repoLink: 'https://github.com/ChaseOstien/Tech_Blog'
    },
    {
        id: 3,
        projectName: 'E-Commerce-Backend',
        projectDescription: 'Express.js, Sequelize, MongoDB, Mongoose.',
        img: 'src/assets/img/EcommerceExample.png',
        imgAlt: 'JSON response data for E Commerce routes.',
        repoLink: 'https://github.com/ChaseOstien/E-Commerce-BackEnd'
    },
];

export default function PortfolioPage () {
    return (
        <div>
            {projectData.map((project) => (
            <Project key={project.id} project={project}/>
            ))}
        </div>
    )
}