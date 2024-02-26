'use client'

import Swal from "sweetalert2"
import { useState, useEffect } from "react";
import axios from "axios"

import Input from "@/componets/input/Input";
import "./login.css";
import Button from "@/componets/button/Button";
// import { cookies } from "next/headers";
const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [err, setErr] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false)


    const handleChange = (e) => {
        const { value, name } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    useEffect(() => {
        let emailError = "";
        let passwordError = "";

        if (!validateEmail(data.email)) {
            emailError = "Invalid Email";
        }
        if (data.password.length < 6) {
            passwordError = "Password must be at least 6 characters";
        }

        setErr({ email: emailError, password: passwordError });
    }, [data]);



    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (!err.email && !err.password) {
            try {
                const res = await axios.post("/api/login/", data);
                if (res.status >= 200 || res.status < 300) {
                    Swal.fire({
                        title: "Login Successfully!",
                        text: "Welcome!",
                        icon: "success",
                        timer: 2000,
                    });
                } else {
                    Swal.fire({
                        title: "Something went Wrong!",
                        text: res?.data?.message || "Unknown Error",
                        icon: "error",
                        timer: 2000,
                    });
                }
            } catch (err) {
                console.error("Login Error:", err);
                Swal.fire({
                    title: "Something went Wrong!",
                    text: err.response?.data?.message || err.message || "Unknown Error", // Access the error message from err.response.data or err.message
                    icon: "error",
                    timer: 2000,
                });
            } finally {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    };


    return (
        <div className="login_main">
            <div className="login_wrapper container">
                <form className="login_inner" onSubmit={handleLogin}>
                    <div className="content">
                        <h2 className="heading">Login</h2>
                        <Input
                            style={{ marginTop: "15px" }}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={handleChange}
                            error={err.email}
                        />
                        <Input
                            style={{ marginTop: "15px" }}
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={handleChange}
                            error={err.password}
                        />
                    </div>
                    <Button lable={"Login"} type={"submit"} disabled={err.email && err.password} />
                </form>
            </div>
        </div>
    );
};

export default Login;
