/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  React  from "react";


export default function Project ({ project }) {
    return (
        
                <div key={project.id} className="max-w-sm flex-none bg-slate-100 border border-gray-700 rounded-lg shadow m-5 flex-grow">
                    <a href={project.repoLink}>
                    <div className="aspect-w-16 aspect-h-9">
                        <img className="rounded-t-lg object-cover " src={project.img} alt={project.imgAlt} />
                        </div>
                    </a>
                    <div className="p-5 border-solid">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{project.projectName}</h5>
                        <p className="mb-3 font-normal text-gray-700">{project.projectDescription}</p>
                        {project.deployed? <a href={project.deployed} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-neutral-700 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300">
            Deployed App
            <svg className="rtl:rotate-180 w-1 h-1 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a> : <p className="mb-3 font-normal text-gray-700">This application is not deployed.</p>}
                        </div>
                    </div>
    )}
