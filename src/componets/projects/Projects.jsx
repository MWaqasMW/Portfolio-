'use client'

import { FaInfo } from "react-icons/fa6";

import work from "../../../public/images/work.png"

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
                <div className="row project">
                    <div class="col-md-6 col-12 project_box">
                        <div class="badge " title="This project is complete"><span>
                            Complete</span> <span>
                                <FaInfo /></span></div>
                        <div className="img_sec">
                            <MyImage src={work?.src} alt={"work"} className={"img"} />
                        </div>
                    </div>
                    <div className="col-md-6 col-12 project_detail m-3">
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
                            <div className="info_links">
                                LIVE DEMO
                            </div>
                            <div className="info_links">
                                SEE ON GITHUB
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row project">
                    <div class="col-md-6 col-12 project_box">
                        <div class="badge " title="This project is complete"><span>
                            Complete</span> <span>
                                <FaInfo /></span></div>
                        <div className="img_sec">
                            <MyImage src={work?.src} alt={"work"} className={"img"} />
                        </div>
                    </div>
                    <div className="col-md-6 col-12 project_detail m-3">
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
                            <div className="info_links">
                                LIVE DEMO
                            </div>
                            <div className="info_links">
                                SEE ON GITHUB
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Projects