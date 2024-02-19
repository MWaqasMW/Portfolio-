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
    });
    const [hover, setHover] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitEnabled, setSubmitEnabled] = useState(false); // State to manage submit button enable/disable

    useEffect(() => {
        // Enable submit button if rating is selected
        setSubmitEnabled(feedback.rating !== 0);
    }, [feedback.rating]);

    const handleRatingClick = (value) => {
        setFeedback(prev => ({ ...prev, rating: value }));
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setFeedback(prev => ({ ...prev, message: value }));
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

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
            setFeedback({ rating: 0, message: "" });
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log("err", err);
            if (err) {
                Swal.fire({
                    title: "SomeThing went Wrong!",
                    text: "Please Check Internet Connection!",
                    icon: "error",
                    timer: 2000,

                });
            }
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
                            <textarea
                                placeholder="Enter your feedback here..."
                                value={feedback.message}
                                onChange={handleInputChange}
                            />
                            <div className='w-100 text-center'>
                                <Button lable={loading ? "Submit.." : "Submit"} style={{ width: "300px" }} type="submit" disabled={!submitEnabled} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;
