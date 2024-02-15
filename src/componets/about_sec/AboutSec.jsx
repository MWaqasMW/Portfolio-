import React from 'react'
import "./about_sec.css"
import { IoArrowForward } from "react-icons/io5";
const AboutSec = () => {
    return (
        <div className='about_sec_main'>
            <div className="container">
                <div className="heading">About ME</div>
                <div className="about_detail">
                    <div className="head">I am a front-end developer based in Sydney. Has Mechanical Engineering background. </div>
                    <p>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
                </div>
                <div className="more_link">

                    <span className="d-flex gap-2 align-items-center f-4">
                        MORE ABOUT ME
                        <div className="fs-4">
                            <IoArrowForward />
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutSec