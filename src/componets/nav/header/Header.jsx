'use client'

import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai";
import { IoReorderTwoOutline } from "react-icons/io5";
import CurrentBreakpoint from "@/utils/breakpoints";
import "./header.css"
import Darwer from "@/componets/drawer/Darwer"
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=" main">
            <div className="container main_inner">
                <div className="LOGO">WAQAS</div>
                {CurrentBreakpoint() === "mobile" ? null :
                    <div className="links">
                        <span >Work</span>
                        <span>About </span>
                        <span>Contact </span>
                    </div>
                }
                {CurrentBreakpoint() === "mobile" &&

                    <span onClick={(e) => setOpen(!open)}>
                        {open ?

                            <AiOutlineClose size={26} /> :
                            <IoReorderTwoOutline size={30} />
                        }
                    </span>
                }
            </div>
            {CurrentBreakpoint() === "mobile" && open && <Darwer />}
        </div>

    )
}

export default Header