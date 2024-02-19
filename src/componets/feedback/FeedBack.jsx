import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from "axios"

import './feedback.css';
import Button from '../button/Button';
import CurrentBreakpoint from '@/utils/breakpoints';


const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        raiting: 0,
        message: "",
    });
    const [hover, setHover] = useState(null);

    const handleRatingClick = (value) => {
        setFeedback(prev => ({ ...prev, raiting: value }));
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setFeedback(prev => ({ ...prev, message: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting feedback:", feedback);
        setFeedback({
            raiting: 0,
            message: "",
        })
        try {
            const res = await axios.post("/api/feedback/", feedback)
            console.log("res", res);
        } catch (err) {
            console.log("err", err);
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
                                                color={ratingValue <= (hover || feedback.raiting) ? '#ffc107' : '#e4e5e9'}
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
                                <Button lable={"Submit"} style={{ width: "300px" }} type={"submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;
