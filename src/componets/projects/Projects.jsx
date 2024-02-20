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
import project2 from "../../../public/images/project2.png"
import project3 from "../../../public/images/project3.png"
import project4 from "../../../public/images/project4.png"
import project5 from "../../../public/images/project5.png"
const Projects = ({ type }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 2; // Number of projects to display per page
    const projects = [
        {
            id: 1,
            title: "Ecommerce Website for our Portfolio and Practice",
            description: "Teamed up with a designer to breathe life into a Ecommerce Websit for my Portfolio, a fully responsive man design with Frontend like Reactjs,Redux,Styled Componets and more otherside server create with NodeJs Express Jwt for authuntication and bcript for password secure and more and the Data Base is like a MongoDb and its Pipliens and quryreis and more the Awsome Project for learning to all.",
            year: 2023,
            img: project1?.src,
            role: "Mern Stack Developer",
            demoLink: "https://example.com",
            githubLink: "https://github.com/MWaqasMW/E-commerceStore"
        },
        {
            id: 2,
            title: "Custom Admin Panel",
            description: "Developed a custom admin panel using React, Material-UI, and custom Sass, providing versatile components for various projects. Complete UI integration with API, supplemented with demo data for reference. Visit GitHub for details on implementation and efficiency enhancements",
            year: 2023,
            img: project4?.src,
            role: "Frontend Developer",
            githubLink: "https://github.com/MWaqasMW/Custom-AdminPanel-UI/"
        },
        {
            id: 3,
            title: "Real Time Chat App",
            description: "I created a dynamic Chat App website using HTML, CSS, JavaScript, and Firebase. It features authentication via Firestore, image uploads using Firebase Storage, and real-time chat with Firebase Realtime Database. This project provided valuable learning opportunities in implementing real-time features and leveraging Firestore effectively. I'm proud of its seamless functionality.",
            year: 2023,
            img: project3?.src,
            role: "Full Stack Developer",
            demoLink: "https://chat12-app.surge.sh/index.html",
            githubLink: "https://github.com/MWaqasMW/Chat-App-Firebase"
        },

        {
            id: 4,
            title: "Edge Home",
            description: "I developed an impressive Booking website using React and Redux, boasting features like hotel product searches, user authentication, and room management. With ongoing updates, the UI maintains its excellence, making it a standout project in full MERN Stack Development. It's an exciting venture with promising future enhancements.",
            year: 2023,
            img: project5?.src,
            role: "Frontend Developer",
            githubLink: "https://github.com/MWaqasMW/Edge_Home"
        },
        {
            id: 5,
            title: "Promotional landing page of  Pepsi",
            description: "I crafted a dynamic Pepsi Landing Page using HTML and CSS as part of a mini hackathon project at Smit. Despite the time constraint of 8 hours, it was an enriching experience. This project provided valuable insights and learning opportunities, marking an exciting journey into web development.",
            year: 2022,
            img: project2?.src,
            role: "Frontend Developer",
            demoLink: "https://mwaqasmw.github.io/Pepsi-Landing-page/index.html",
            githubLink: "https://github.com/MWaqasMW/Pepsi-Landing-page"
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
                                    {project.demoLink &&
                                        <a href={project.demoLink} target="_blank" className="d-flex gap-2 align-items-center f-4" rel="noopener noreferrer">
                                            LIVE DEMO
                                            <div className="fs-4">
                                                <MdArrowOutward />
                                            </div>
                                        </a>
                                    }
                                    {project.githubLink &&
                                        <a href={project.githubLink} target="_blank" className="d-flex gap-2 align-items-center f-4" rel="noopener noreferrer">
                                            SEE ON GITHUB
                                            <div className="fs-4">
                                                <FaGithub />
                                            </div>
                                        </a>
                                    }
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
