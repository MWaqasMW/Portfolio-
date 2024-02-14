'use client'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import BannerImg from "../../../public/images/baner.png"
import blurImg from "../../../public/blur/banner.png"
import "./baner.css"
import MyImage from "@/app/utils/imageLazy";
import Button from "../button/Button";
const Baner = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="heading">
                            HI I AM <br /><strong>MUHAMMAD WAQAS</strong>
                        </div>
                        <p>
                            A Paissented Mern stack Developer A Sydney based front-end developer passionate about building accessible and user friendly websites.
                        </p>
                        <div className="links">
                            <Button lable={"CONTACT ME"} style={{ fontWeight: "700" }} />
                            <div className="icons"><FaLinkedinIn /></div>
                            <div className="icons"><FaGithub /></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 sec_col">
                        <div className="img_sec">
                            <MyImage src={BannerImg.src} placeholderSrc={blurImg} alt={"MWaqas"} className="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baner