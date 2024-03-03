import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import './form.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formErrors = {};
            if (formData.name.length < 3) {
                formErrors.name = "Name must be at least 3 characters long.";
            }
            if (!isValidEmail(formData.email)) {
                formErrors.email = "Invalid email format.";
            }
            if (!formData.subject.trim()) {
                formErrors.subject = "Subject is required.";
            }
            if (!formData.message.trim()) {
                formErrors.message = "Message is required.";
            }
            setErrors(formErrors);

            if (Object.keys(formErrors).length === 0) {
                setLoading(true)
                const res = await axios.post("/api/qurey/", formData);
                console.log("res", res);
                if (res) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Thanks for that!",
                        icon: "success",
                        timer: 2000,

                    });
                    setLoading(false)
                }
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }
        } catch (err) {
            setLoading(false)
            if (err) {
                Swal.fire({
                    title: "Something Went Wrong!",
                    text: "Please Check Internet Connection!",
                    icon: "error",
                    timer: 2000,

                });
            }
            console.log("err", err);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="form_main">
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Name"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                />
                <Input
                    placeholder="Email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <Input
                    placeholder="Subject"
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                />
                <label htmlFor="message" className="label_sec">Write Quote</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Write Something..."
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message &&
                    <div className="fs-4 text-danger">
                        {errors.message}
                    </div>
                }
                <div className="w-100 d-flex justify-content-start mt-4">
                    <Button lable={loading ? "wait..." : "Submit"} style={{ width: "150px" }} type={"submit"} />
                </div>
            </form>
        </div>
    );
};

export default Form;
