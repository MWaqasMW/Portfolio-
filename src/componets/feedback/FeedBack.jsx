'use client'



// import Button from "../button/Button"
// import Input from "../input/Input"
// import "./feedback.css"
// const FeedBack = () => {
//     return (
//         <div className='feedback_main'>
//             <div className="feedback_inner container">

//                 <div className="heading">FeedBack</div>
//                 <div className="input_sec ">
//                     <div className="w-100">
//                         <Input type="text" placeholder="Write Something" style={{ fontSize: "18px" }} />
//                     </div>

//                     <span><Button lable={"Send"} style={{ padding: "19px", maxWidth: "150px", minWidth: "80px", borderRadius: "0px 10px 10px 0px" }} /></span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FeedBack




import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './feedback.css';
import Button from '../button/Button';

const FeedbackForm = () => {
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
                                        size={50}
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
                        <Button lable={"Submit"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
