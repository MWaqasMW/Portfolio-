'use client'

// import { FaGithub, FaInfo } from "react-icons/fa6";

// import work from "../../../public/images/work.png"
// import { MdArrowOutward } from "react-icons/md";

// import "./project.css"
// import MyImage from "@/utils/imageLazy";
// const Projects = () => {
//     return (
//         <div className='container-fluid project_main'>
//             <div className="container project_inner">
//                 <div className="heading_sec">
//                     <div className='heading'>Featured Projects</div>
//                     <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
//                 </div>
//                 <div className="row project gap-2">
//                     <div class="col-sm-6  project_box">
//                         <div class="badge " title="This project is complete"><span>
//                             Complete</span> <span>
//                                 <FaInfo /></span></div>
//                         <div className="img_sec">
//                             <MyImage src={work?.src} alt={"work"} className={"img"} />
//                         </div>
//                     </div>
//                     <div className="col-sm-5 project_detail p-0 " >
//                         <div className="heading">Promotional landing page for our favorite show</div>
//                         <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive man design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
//                         <div className="form">
//                             <div className="title">PROJECT INFO</div>
//                             <table>
//                                 <li>
//                                     <span>Year</span><span>2023</span>
//                                 </li>
//                                 <li>
//                                     <span>Role</span><span>Frontend Developer</span>
//                                 </li>
//                             </table>
//                             <div className="info_links ">
//                                 <span className="d-flex gap-2 align-items-center f-4">
//                                     LIVE DEMO
//                                     <div className="fs-4">
//                                         <MdArrowOutward />
//                                     </div>
//                                 </span>
//                                 <span className="d-flex gap-2 align-items-center f-4">
//                                     SEE ON GITHUB
//                                     <div className="fs-4">
//                                         <FaGithub />
//                                     </div>
//                                 </span>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div className="row project gap-2">
//                     <div class="col-sm-6  project_box">
//                         <div class="badge " title="This project is complete"><span>
//                             Complete</span> <span>
//                                 <FaInfo /></span></div>
//                         <div className="img_sec">
//                             <MyImage src={work?.src} alt={"work"} className={"img"} />
//                         </div>
//                     </div>
//                     <div className="col-sm-5 project_detail p-0 " >
//                         <div className="heading">Promotional landing page for our favorite show</div>
//                         <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive man design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
//                         <div className="form">
//                             <div className="title">PROJECT INFO</div>
//                             <table>
//                                 <li>
//                                     <span>Year</span><span>2023</span>
//                                 </li>
//                                 <li>
//                                     <span>Role</span><span>Frontend Developer</span>
//                                 </li>
//                             </table>
//                             <div className="info_links ">
//                                 <span className="d-flex gap-2 align-items-center f-4">
//                                     LIVE DEMO
//                                     <div className="fs-4">
//                                         <MdArrowOutward />
//                                     </div>
//                                 </span>
//                                 <span className="d-flex gap-2 align-items-center f-4">
//                                     SEE ON GITHUB
//                                     <div className="fs-4">
//                                         <FaGithub />
//                                     </div>
//                                 </span>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div className="more">See more</div>

//             </div>
//         </div>
//     )
// }

// export default Projects



import React, { useState } from 'react';
import { FaGithub, FaInfo } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import MyImage from "@/utils/imageLazy";
import work from "../../../public/images/work.png";
import "./project.css";

const Projects = () => {
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

    return (
        <div className='container-fluid project_main'>
            <div className="container project_inner">
                <div className="heading_sec">
                    <div className='heading'>Featured Projects</div>
                    <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
                </div>
                {currentProjects.map(project => (
                    <div className="row project gap-2" key={project.id}>
                        <div className="col-sm-6 project_box">
                            <div className="badge" title="This project is complete">
                                <span>Complete</span>
                                <span><FaInfo /></span>
                            </div>
                            <div className="img_sec">
                                <MyImage src={work?.src} alt={"work"} className={"img"} />
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
                {projects.length > currentPage * projectsPerPage && (
                    <div className="more" onClick={loadMoreProjects}>See more</div>
                )}
            </div>
        </div>
    );
}

export default Projects;
