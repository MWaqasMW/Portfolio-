'use client'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import BannerImg from "../../../public/images/remove.png"
import blurImg from "../../../public/blur/blur_2.png"
import "./baner.css"
import MyImage from "@/utils/imageLazy";
import Button from "../button/Button";
import NavLink from "@/utils/hooks/useLink";
const Baner = () => {
    return (
        <div className="container-fluid baner_main m-0 p-0">
            <div className="container baner_inner">
                <div className="row">
                    <div className="col">
                        <div className="heading">
                            HI I AM <br /><strong>MUHAMMAD WAQAS</strong>
                        </div>
                        <p>

                            "A Passionate as a MERN Stack Developer based in Pakistan, with remote availability worldwide. Passionate about creating accessible and user-friendly websites, leveraging expertise to deliver exceptional digital experiences."   </p>
                        <div className="links">
                            <Button lable={"CONTACT ME"} style={{ fontWeight: "700" }} link={"mailto:mwaqas6001@gmail.com"} />
                            <div className="icons" ><a href="https://www.linkedin.com/in/muhammad-waqas-3b191326a/" target="blank"><FaLinkedinIn /></a></div>
                            <div className="icons" ><a href="https://github.com/MWaqasMW" target="blank"><FaGithub /></a></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 sec_col">
                        <div className="img_sec">
                            <MyImage className="img" zIndex={0} src={BannerImg.src} placeholderSrc={blurImg} alt={"MWaqas"} className="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baner