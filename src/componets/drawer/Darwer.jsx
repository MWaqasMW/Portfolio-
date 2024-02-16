'use client'

import { AiOutlineClose } from "react-icons/ai"
import "./drawer.css"
import NavLink from "@/utils/hooks/useLink"

const Darwer = ({ setOpen, open }) => {


    return (
        <div className="container-fluid drawer_main">
            <div className="container ">
                <div className="links">
                    <span className="close" onClick={(e) => setOpen(!open)}>
                        <AiOutlineClose size={26} />
                    </span>
                    <NavLink href="/"><span >Work</span></NavLink>
                    <NavLink href="/about"><span >About</span></NavLink>
                    <NavLink href="/contact"><span >Contact</span></NavLink>

                </div>
            </div>
        </div>
    )
}

export default Darwer