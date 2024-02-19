import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Button from "../button/Button"
import "./about_sec_2.css"

const About_Sec_2 = () => {
    return (
        <div className='About_Sec_2_main'>
            <div className="container About_Sec_2_inner">
                <div className="row">
                    <div className="col-sm-6 col-12 heading" data-aos="fade-right" data-aos-duration="1300" >ABOUT ME TO ALL EVERTHING HERE</div>
                    <div className="col-sm-6 col-12" data-aos="fade-up" data-aos-duration="1300">
                        <div className="about_detail">
                            <div className="head">
                                👋Hy I am a Mern Stack Developer & Frontend Developer
                            </div>
                            <p>Muhammad Waqas is a proficient Frontend and MERN Stack Developer, specializing in crafting intuitive user interfaces using technologies such as React.js, Nextjs Bootstrap, and Tailwind CSS.and Style Componets With a solid foundation in HTML, CSS, and JavaScript & for Backend is Node js Express Js Mongodb , along with expertise in integrating RESTful APIs using Redux/Context API. </p>
                        </div>
                        <div className="links">
                            <Button lable={"CONTACT ME"} style={{ fontWeight: "700" }} />
                            <div className="icons" ><a href="https://www.linkedin.com/in/muhammad-waqas-3b191326a/" target="blank"><FaLinkedinIn /></a></div>
                            <div className="icons" ><a href="https://github.com/MWaqasMW" target="blank"><FaGithub /></a></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_Sec_2