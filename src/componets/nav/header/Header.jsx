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
                <div className="LOGO"><NavLink href="/home">WAQAS</NavLink></div>
                {CurrentBreakpoint() === "mobile" ? null :
                    <div className="links">
                        <NavLink href="/home">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/work">Work</NavLink>
                        <Button lable={"DOWNLOAD CV"} link={"https://drive.google.com/file/d/1rusD4utgBWRMfItn3pg363Vt-okVo88j/view?usp=sharing"} target={"blank"} />
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
