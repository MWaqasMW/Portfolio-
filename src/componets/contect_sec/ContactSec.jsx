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
                                mwaqas6001@gmail.com
                            </strong>
                            For more info, here’s my
                            resume</p>
                        <div className="info_links">
                            <span><FaLinkedinIn /></span>
                            <span><FaGithub /></span>
                            <span><FaFacebookF /></span>
                            <span><FaXTwitter /></span>
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