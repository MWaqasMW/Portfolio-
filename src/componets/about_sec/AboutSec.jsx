'use client'

import NavLink from "@/utils/hooks/useLink";
import "./about_sec.css"
import { IoArrowForward } from "react-icons/io5";
const AboutSec = () => {
    return (
        <div className='about_sec_main'>
            <div className="container">
                <div className="heading">About ME</div>
                <div className="about_detail">
                    <div className="head">I am a front-end developer based in Sydney. Has Mechanical Engineering background. </div>
                    <p>Muhammad Waqas is a proficient Frontend and MERN Stack Developer, specializing in crafting intuitive user interfaces using technologies such as React.js, Nextjs Bootstrap, and Tailwind CSS.and Style Componets With a solid foundation in HTML, CSS, and JavaScript & for Backend is Node js Express Js Mongodb and more...</p>
                </div>
                <div className="more_link">

                    <span className="d-flex gap-2 align-items-center f-4">
                        <NavLink href="/about">
                            MORE ABOUT ME
                            <div className="fs-4    ">
                                <IoArrowForward />
                            </div>
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutSec