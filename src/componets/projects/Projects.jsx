'use client'


import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaGithub, FaInfo } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


import MyImage from "@/utils/imageLazy";
import work from "../../../public/images/work.png";
import "./project.css";
import NavLink from '@/utils/hooks/useLink';
import project1 from "../../../public/images/project1.png"
const Projects = ({ type }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2; // Number of projects to display per page
    const projects = [
        {
            id: 1,
            title: "Promotional landing page for our favorite show",
            description: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive man design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
            year: 2023,
            role: "Frontend Developer",
            demoLink: "https://example.com",
            githubLink: "https://github.com/example"
        },
        {
            id: 2,
            title: "E-commerce Website",
            description: "Built a responsive e-commerce website using React and Redux. Implemented features such as product search, user authentication, and cart management. Utilized Redux for state management and styled-components for styling.",
            year: 2022,
            img: project1?.src,
            role: "Full Stack Developer",
            demoLink: "https://example.com",
            githubLink: "https://github.com/example"
        },
        {
            id: 2,
            title: "E-commerce Website",
            description: "Built a responsive e-commerce website using React and Redux. Implemented features such as product search, user authentication, and cart management. Utilized Redux for state management and styled-components for styling.",
            year: 2022,
            role: "Full Stack Developer",
            demoLink: "https://example.com",
            githubLink: "https://github.com/example"
        },
        {
            id: 2,
            title: "E-commerce Website",
            description: "Built a responsive e-commerce website using React and Redux. Implemented features such as product search, user authentication, and cart management. Utilized Redux for state management and styled-components for styling.",
            year: 2022,
            role: "Full Stack Developer",
            demoLink: "https://example.com",
            githubLink: "https://github.com/example"
        },
        // Add more project objects as needed
    ];

    // Logic to slice projects based on current page
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(0, indexOfLastProject);

    // Function to handle "See more" button click
    const loadMoreProjects = () => {
        setCurrentPage(currentPage + 1);
    };

    const router = useRouter(); // Initialize the useRouter hook

    const moveWork = () => {
        router.push('/work');
    }


    return (
        <div className='container-fluid project_main'>
            <div className="container project_inner">
                <div className="heading_sec">
                    <div className='heading'>Featured Projects</div>
                    <p>Here are some of the selected projects that showcase my passion for Frontend & Mern Stack Development.</p>
                </div>
                {currentProjects.map(project => (
                    <div className="row project gap-2" key={project.id}>
                        <div className="col-sm-6 project_box">
                            <div className="badge" title="This project is complete">
                                <span>Complete</span>
                                <span><FaInfo /></span>
                            </div>
                            <div className="img_sec">
                                <MyImage src={project?.img} alt={"work"} className={"img"} />
                            </div>
                        </div>
                        <div className="col-sm-5 project_detail p-0">
                            <div className="heading">{project.title}</div>
                            <p>{project.description}</p>
                            <div className="form">
                                <div className="title">PROJECT INFO</div>
                                <table>
                                    <li>
                                        <span>Year</span><span>{project.year}</span>
                                    </li>
                                    <li>
                                        <span>Role</span><span>{project.role}</span>
                                    </li>
                                </table>
                                <div className="info_links">
                                    <a href={project.demoLink} target="_blank" className="d-flex gap-2 align-items-center f-4" target="_blank" rel="noopener noreferrer">
                                        LIVE DEMO
                                        <div className="fs-4">
                                            <MdArrowOutward />
                                        </div>
                                    </a>
                                    <a href={project.githubLink} target="_blank" className="d-flex gap-2 align-items-center f-4" target="_blank" rel="noopener noreferrer">
                                        SEE ON GITHUB
                                        <div className="fs-4">
                                            <FaGithub />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {type === "home" ? (
                    <div className="more" onClick={moveWork}>See more</div>
                ) : (
                    projects.length > currentPage * projectsPerPage && (
                        <div className="more" onClick={loadMoreProjects}>See more</div>
                    )
                )}


            </div>
        </div>
    );
}

export default Projects;
