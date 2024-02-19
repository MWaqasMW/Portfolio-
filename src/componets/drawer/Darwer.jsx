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
                    <NavLink href="/"><span >Home</span></NavLink>
                    <NavLink href="/about"><span >About</span></NavLink>
                    <NavLink href="/work"><span >Work</span></NavLink>
                    <Button lable={"Download CV"} />
                </div>
            </div>
        </div>
    )
}

export default Darwer