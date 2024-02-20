'use client'

import "./contact_sec.css"
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Form from "../form/Form";
const ContactSec = () => {
    return (
        <div className='contact_sec_main'>
            <div className="container contact_sec_inner">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="heading">LET’S CONNECT</div>
                        <p>Say hello at
                            <strong>
                                <a href="mailto:mwaqas6001@gmail.com" className="m-2 text-white">
                                    mwaqas6001@gmail.com
                                </a>
                            </strong>
                            For more info, here’s my
                            resume</p>
                        <div className="info_links">
                            <div className="icons" ><a href="https://www.linkedin.com/in/muhammad-waqas-3b191326a/" target="blank"><FaLinkedinIn /></a></div>
                            <div className="icons" ><a href="https://github.com/MWaqasMW" target="blank"><FaGithub /></a></div>
                            <div className="icons" ><a href="https://www.facebook.com/waqas.qurashi.923/" target="blank"><FaFacebookF /></a></div>
                            {/* <span><FaXTwitter /></span> */}
                        </div>
                    </div>


                    <div className="col-md-6 col-12">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSec