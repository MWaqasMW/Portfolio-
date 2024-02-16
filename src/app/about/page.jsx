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
const About = () => {
    return (
        <>
            <Header />
            <About_Sec_2 />

            <div className="img_sec_about">
                <div className="container d-flex justify-content-center w-100">
                    <div className="img" >
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