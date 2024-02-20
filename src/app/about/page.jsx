'use client'

import "./about.css"
import About_Sec_2 from "@/componets/about_sec_2/About_Sec_2"
import Skill from "@/componets/skill/Skill"
import Exprience from "@/componets/exprience/Exprience"
import ContactSec from "@/componets/contect_sec/ContactSec"
import Faq from "@/componets/faq/Faq"
import Button from "@/componets/button/Button"
import AOS from "aos";
import { useEffect } from "react";
const About = () => {


    useEffect(() => {
        AOS.init();
    }, []);
    const data = {
        title: "Quote",
        sub: "Why should we hire you?",
        message: "You should hire me because I bring a unique blend of skills, experience, and dedication to the table. With a strong foundation in frontend development and a comprehensive understanding of the MERN stack, I am well-equipped to tackle a wide range of challenges in web development. My practical experience at 3Const Pvt Ltd, coupled with my education at Saylani Mass IT Training Center and ongoing studies in Computer Science, demonstrates my commitment to continuously improving and staying updated with the latest technologies. I am not only proficient in crafting user-friendly interfaces and integrating RESTful APIs but also excel in collaborating within dynamic teams to deliver impactful digital solutions. My passion for coding, coupled with my proactive approach to learning, ensures that I can adapt quickly to new environments and contribute effectively to any project. In essence, hiring me means bringing on board a dedicated, skilled, and adaptable developer ready to make meaningful contributions to your team"
    }

    return (
        <>
            <About_Sec_2 />
            <div className="img_sec_about">
                <div className="container w-100">
                    <div className="img_content" data-aos="fade-left" data-aos-duration="1300" >
                        <div className="content">
                            <div className="heading">
                                {data?.title}
                            </div>
                            <div>

                                <div className="sub_heading">{data?.sub}</div>
                                <p>{data?.message}.</p>
                            </div>
                            <div>

                                <Button lable={"HIRE NOW"} link={"mailto:mwaqas6001@gmail.com"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Skill />
            <Exprience />
            <Faq />
            <ContactSec />

        </>

    )
}

export default About