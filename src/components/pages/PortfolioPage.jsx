import React from "react";
import Project from "../Project";

import projectData from '../../utils/projects.json'

export default function PortfolioPage () {
    return (
        <><h2 className="font-burtons text-5xl pl-10 pt-10 text-teal-600 font-medium flex text-center">Portfolio</h2>
        <div className="flex flex-wrap justify-evenly py-7 min-h-full">
            {projectData.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div></>
    )
}