import React, { useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import './form.css';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

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
            const res = await axios.post("/api/qurey/", formData);
            console.log("res", res);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        } catch (err) {
            console.log("err", err);
        }
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
                <label htmlFor="message" className="label_sec">Write Quote</label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Write Something..."
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <div className="w-100 d-flex justify-content-start mt-4">
                    <Button lable={"Submit"} style={{ width: "150px" }} type={"submit"} />
                </div>
            </form>
        </div>
    );
};

export default Form;
