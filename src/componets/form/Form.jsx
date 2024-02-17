'use client'
import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import './form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        quote: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    console.log("formData", formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            subject: '',
            quote: ''
        });
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
                />
                <Input
                    placeholder="Email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <Input
                    placeholder="Subject"
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
                <label htmlFor="quote" className="label_sec">Write Quote</label>
                <textarea
                    name="quote"
                    id="quote"
                    placeholder="Write Something..."
                    value={formData.quote}
                    onChange={handleChange}
                ></textarea>
                <div className="w-100 d-flex justify-content-start mt-4">
                    <Button lable={"Submit"} style={{ width: "150px" }} />
                </div>
            </form>
        </div>
    );
};

export default Form;
