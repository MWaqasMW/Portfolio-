import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from "axios"
import Swal from 'sweetalert2';

import './feedback.css';
import Button from '../button/Button';
import CurrentBreakpoint from '@/utils/breakpoints';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        rating: 0,
        message: "",
        name: ""
    });
    const [hover, setHover] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitEnabled, setSubmitEnabled] = useState(false);
    const [nameError, setNameError] = useState("");

    useEffect(() => {
        setSubmitEnabled(feedback.rating !== 0 && feedback.name.length >= 3);
    }, [feedback.rating, feedback.name]);

    const handleRatingClick = (value) => {
        setFeedback(prev => ({ ...prev, rating: value }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prev => ({ ...prev, [name]: value }));
        if (name === "name") {
            setNameError(value.length < 3 ? "Name must be at least 3 characters" : "");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (feedback.name.length < 3) {
            setNameError("Name must be at least 3 characters");
            return;
        }
        setLoading(true);

        try {
            const res = await axios.post("/api/feedback/", feedback);
            console.log("res", res);
            if (res) {
                Swal.fire({
                    title: "Good job!",
                    text: "Thanks for feedBack!",
                    icon: "success",
                    timer: 2000,
                });
            }
            console.log("Submitting feedback:", feedback);
            setFeedback({ rating: 0, message: "", name: "" });
        } catch (err) {
            console.log("err", err);
            Swal.fire({
                title: "Something went wrong!",
                text: "Please check your internet connection.",
                icon: "error",
                timer: 2000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='feedback_main'>
            <div className="feedback_inner container">
                <div className="col">
                    <div className="feedback-form-container">
                        <h2 className='heading'>Feedback Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="rating-container">
                                {[...Array(5)].map((star, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="rating"
                                                value={ratingValue}
                                                onClick={() => handleRatingClick(ratingValue)}
                                            />
                                            <FaStar
                                                className="star"
                                                color={ratingValue <= (hover || feedback.rating) ? '#ffc107' : '#e4e5e9'}
                                                size={CurrentBreakpoint() === "mobile" ? 50 : 70}
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>

                            <input className="name_input" type="text" name="name" placeholder="Name" value={feedback?.name} onChange={handleInputChange} />
                            {nameError && <p className="error-message text-danger m-0   ">{nameError}</p>}
                            <textarea
                                className="text_area"
                                name="message"
                                placeholder="Enter your feedback here..."
                                value={feedback.message}
                                onChange={handleInputChange}
                            />
                            <div className='w-100 text-center'>
                                <Button lable={loading ? "Submitting..." : "Submit"} style={{ width: "300px" }} type="submit" disabled={!submitEnabled || loading} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;
