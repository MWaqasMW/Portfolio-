'use client'

import Input from "@/componets/input/Input"
import "./login.css"
import Button from "@/componets/button/Button"
import { useState } from "react"

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }
    const handleLogin = (e) => {
        e.preventDefault()
        console.log("data", data)
    }

    return (
        <div className="login_main">
            <div className="login_wrapper container">
                <form className="login_inner" onSubmit={handleLogin}>
                    <div className="content">
                        <h2 className="heading">Login</h2>
                        <Input style={{ marginTop: "15px" }} type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
                        <Input style={{ marginTop: "15px" }} type="password" name="password" placeholder="password" value={data.password} onChange={handleChange} />
                    </div>
                    <Button lable={"Login"} type={"Submit"} />
                </form>
            </div>
        </div>
    )
}

export default Login
