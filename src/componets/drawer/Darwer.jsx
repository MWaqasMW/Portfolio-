'use client'

import { AiOutlineClose } from "react-icons/ai"
import "./drawer.css"

const Darwer = ({ setOpen, open }) => {


    return (
        <div className="drawer_main">
            <div className="links">
                <span className="close" onClick={(e) => setOpen(!open)}>
                    <AiOutlineClose size={26} />
                </span>
                <span >Work</span>
                <span>About </span>
                <span>Contact </span>
            </div>
        </div>
    )
}

export default Darwer