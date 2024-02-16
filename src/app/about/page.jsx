'use client'

import AboutSec from "@/componets/about_sec/AboutSec"
import "./about.css"
import baner from "../../../public/images/waqas_about.png"
import Header from "@/componets/nav/header/Header"
import About_Sec_2 from "@/componets/about_sec_2/About_Sec_2"
import MyImage from "@/utils/imageLazy"
import Skill from "@/componets/skill/Skill"
import Exprience from "@/componets/exprience/Exprience"
import ContactSec from "@/componets/contect_sec/ContactSec"
import Footer from "@/componets/nav/footer/Footer"
import Faq from "@/componets/faq/Faq"
import Arrow from "@/componets/arrow/Arrow"
import Button from "@/componets/button/Button"
const About = () => {
    return (
        <>
            <Header />
            <About_Sec_2 />

            <div className="img_sec_about">
                <div className="container w-100">
                    <div className="img_content" >
                        <div className="content">
                            <div className="heading">
                                Quote
                            </div>
                            <div>

                                <div className="sub_heading">Why should we hire you?</div>
                                <p>"You should hire me because I bring a unique blend of skills, experience, and dedication to the table. With a strong foundation in frontend development and a comprehensive understanding of the MERN stack, I am well-equipped to tackle a wide range of challenges in web development. My practical experience at 3Const Pvt Ltd, coupled with my education at Saylani Mass IT Training Center and ongoing studies in Computer Science, demonstrates my commitment to continuously improving and staying updated with the latest technologies. I am not only proficient in crafting user-friendly interfaces and integrating RESTful APIs but also excel in collaborating within dynamic teams to deliver impactful digital solutions. My passion for coding, coupled with my proactive approach to learning, ensures that I can adapt quickly to new environments and contribute effectively to any project. In essence, hiring me means bringing on board a dedicated, skilled, and adaptable developer ready to make meaningful contributions to your team".</p>
                            </div>
                            <div>

                                <Button lable={"Hire Now"} style={{ width: "200px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Skill />
            <Exprience />
            <Faq />
            <ContactSec />
            <Footer />
            <Arrow />
        </>

    )
}

export default About