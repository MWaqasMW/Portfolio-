'use client'

import AboutSec from "@/componets/about_sec/AboutSec"
import "./about.css"
import baner from "../../../public/images/baner.png"
import Header from "@/componets/nav/header/Header"
import About_Sec_2 from "@/componets/about_sec_2/About_Sec_2"
import MyImage from "@/utils/imageLazy"
import Skill from "@/componets/skill/Skill"
import Exprience from "@/componets/exprience/Exprience"
import ContactSec from "@/componets/contect_sec/ContactSec"
import Footer from "@/componets/nav/footer/Footer"
const About = () => {
    return (
        <>
            <Header />
            <About_Sec_2 />
            <div className="img_sec_about">
                <MyImage src={baner.src} className={"img"} />
            </div>
            <Skill />
            <Exprience />
            <ContactSec />
            <Footer />
        </>

    )
}

export default About