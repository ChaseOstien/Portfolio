import  React  from "react";


export default function Project ({ project }) {
    return (
        <div>
                <div key={project.id}>
                    <h4>{project.projectName}</h4>
                    <p>{project.projectDescription}</p>
                    <a href={project.repoLink}>
                        <img src={project.img} alt={project.imgAlt}></img>
                    </a>
                </div>
        </div>
    )}
