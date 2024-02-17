'use client'





import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './feedback.css';
import Button from '../button/Button';
import CurrentBreakpoint from '@/utils/breakpoints';
const FeedbackForm = () => {
    console.log("CurrentBreakpoint", CurrentBreakpoint())
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState('');

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleInputChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the feedback data to your backend or wherever you want to handle it
        console.log('Rating:', rating);
        console.log('Feedback:', feedback);
        // Reset the form
        setRating(null);
        setFeedback('');
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
                                                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                                                size={CurrentBreakpoint() === "mobile" ? 50 : 70} // Adjusted size conditionally based on the breakpoint
                                                onMouseEnter={() => setHover(ratingValue)}
                                                onMouseLeave={() => setHover(null)}
                                            />

                                        </label>
                                    );
                                })}
                            </div>
                            <textarea
                                placeholder="Enter your feedback here..."
                                value={feedback}
                                onChange={handleInputChange}
                            />
                            <div className='w-100 text-center'>
                                <Button lable={"Submit"} style={{ width: "300px" }} />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeedbackForm;
