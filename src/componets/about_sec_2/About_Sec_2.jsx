import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Button from "../button/Button"
import "./about_sec_2.css"

const About_Sec_2 = () => {
    return (
        <div className='About_Sec_2_main'>
            <div className="container About_Sec_2_inner">
                <div className="row">
                    <div className="col-sm-6 col-12 heading">ABOUT ME TO ALL EVERTHING HERE</div>
                    <div className="col-sm-6 col-12">
                        <div className="about_detail">
                            <div className="head">
                                I am a front-end developer based in Sydney. Has Mechanical Engineering background.
                            </div>
                            <p>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill</p>
                        </div>
                        <div className="links">
                            <Button lable={"Contact Me"} style={{ fontWeight: "700" }} />
                            <div className="icons"><FaLinkedinIn /></div>
                            <div className="icons"><FaGithub /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_Sec_2