'use client'

import { useState } from "react"
import { IoReorderTwoOutline } from "react-icons/io5";
import CurrentBreakpoint from "@/utils/breakpoints";
import "./header.css"
import Darwer from "@/componets/drawer/Darwer"
import NavLink from "@/utils/hooks/useLink";
import Button from "@/componets/button/Button";

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="main p-0 m-0">
            <div className="container main_inner ">
                <div className="LOGO">WAQAS</div>
                {CurrentBreakpoint() === "mobile" ? null :
                    <div className="links">
                        <NavLink href="/">Work</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <Button lable={"Download CV"} />
                    </div>
                }
                {CurrentBreakpoint() === "mobile" &&
                    <span onClick={(e) => setOpen(!open)} style={{ cursor: "pointer" }}>
                        {open ?
                            null :
                            <IoReorderTwoOutline size={30} />
                        }
                    </span>
                }
            </div>
            {CurrentBreakpoint() === "mobile" && open && <Darwer setOpen={setOpen} open={open} />}
        </div>
    )
}


export default Header
