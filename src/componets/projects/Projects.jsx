'use client'

import { FaGithub, FaInfo } from "react-icons/fa6";

import work from "../../../public/images/work.png"
import { MdArrowOutward } from "react-icons/md";

import "./project.css"
import MyImage from "@/utils/imageLazy";
const Projects = () => {
    return (
        <div className='container-fluid project_main'>
            <div className="container project_inner">
                <div className="heading_sec">
                    <div className='heading'>Featured Projects</div>
                    <p>Here are some of the selected projects that showcase my passion for front-end development.</p>
                </div>
                <div className="row project gap-2">
                    <div class="col-sm-6  project_box">
                        <div class="badge " title="This project is complete"><span>
                            Complete</span> <span>
                                <FaInfo /></span></div>
                        <div className="img_sec">
                            <MyImage src={work?.src} alt={"work"} className={"img"} />
                        </div>
                    </div>
                    <div className="col-sm-5 project_detail p-0 " >
                        <div className="heading">Promotional landing page for our favorite show</div>
                        <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive man design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                        <div className="form">
                            <div className="title">PROJECT INFO</div>
                            <table>
                                <li>
                                    <span>Year</span><span>2023</span>
                                </li>
                                <li>
                                    <span>Role</span><span>Frontend Developer</span>
                                </li>
                            </table>
                            <div className="info_links ">
                                <span className="d-flex gap-2 align-items-center f-4">
                                    LIVE DEMO
                                    <div className="fs-4">
                                        <MdArrowOutward />
                                    </div>
                                </span>
                                <span className="d-flex gap-2 align-items-center f-4">
                                    SEE ON GITHUB
                                    <div className="fs-4">
                                        <FaGithub />
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row project gap-2">
                    <div class="col-sm-6  project_box">
                        <div class="badge " title="This project is complete"><span>
                            Complete</span> <span>
                                <FaInfo /></span></div>
                        <div className="img_sec">
                            <MyImage src={work?.src} alt={"work"} className={"img"} />
                        </div>
                    </div>
                    <div className="col-sm-5 project_detail p-0 " >
                        <div className="heading">Promotional landing page for our favorite show</div>
                        <p>Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive man design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.</p>
                        <div className="form">
                            <div className="title">PROJECT INFO</div>
                            <table>
                                <li>
                                    <span>Year</span><span>2023</span>
                                </li>
                                <li>
                                    <span>Role</span><span>Frontend Developer</span>
                                </li>
                            </table>
                            <div className="info_links ">
                                <span className="d-flex gap-2 align-items-center f-4">
                                    LIVE DEMO
                                    <div className="fs-4">
                                        <MdArrowOutward />
                                    </div>
                                </span>
                                <span className="d-flex gap-2 align-items-center f-4">
                                    SEE ON GITHUB
                                    <div className="fs-4">
                                        <FaGithub />
                                    </div>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="more">See more</div>

            </div>
        </div>
    )
}

export default Projects