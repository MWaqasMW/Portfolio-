'use client'

import { AiOutlineClose } from "react-icons/ai"
import "./drawer.css"
import NavLink from "@/utils/hooks/useLink"
import Button from "../button/Button"

const Darwer = ({ setOpen, open }) => {


    return (
        <div className="container-fluid drawer_main">
            <div className="container ">
                <div className="links">
                    <span className="close" onClick={(e) => setOpen(!open)}>
                        <AiOutlineClose size={26} />
                    </span>
                    <NavLink href="/home"><span onClick={(e) => setOpen(!open)}>Home</span></NavLink>
                    <NavLink href="/about"><span onClick={(e) => setOpen(!open)}>About</span></NavLink>
                    <NavLink href="/work"><span onClick={(e) => setOpen(!open)}>Work</span></NavLink>
                    <Button lable={"DOWNLOAD CV"} link={"https://drive.google.com/file/d/1rusD4utgBWRMfItn3pg363Vt-okVo88j/view?usp=sharing"} target={"blank"} />
                </div>
            </div>
        </div>
    )
}

export default Darwer