import React from 'react';
import { FaStar } from 'react-icons/fa';
import "./review.css";
import denmark from "../../../public/icons/denmark.png"
import pak from "../../../public/icons/flag.png"
import MyImage from '@/utils/imageLazy';

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: 'Hassan Larvel',
            rating: 5,
            review:
                'You did a very good job. you fixed a bug in my react code. I am very happy because i got exactly same output what I expected. you are really a hard worker. Thanks for your help.',
            profileImg: 'https://via.placeholder.com/50',
            icon: denmark.src,
            country: "Denmark"
        },
        {
            id: 2,
            name: 'Anmal Hassan',
            rating: 4.8,
            review:
                'Sed ac condimentum ipsum. Donec consequat mi in ex tempus, vel auctor velit egestas. Fusce vestibulum mauris eu metus lacinia, ut auctor sem placerat.',
            profileImg: 'https://via.placeholder.com/50',
            icon: pak.src,
            country: "Pakistan" // Sample profile image URL for Jane Smith
        },
        {
            id: 3,
            name: 'hasanlaravel',
            rating: 5,
            review: 'Awesome performance!!!. Very hard working developer. Thanks again.',
            profileImg: 'https://via.placeholder.com/50',
            icon: denmark.src,
            country: "Denmark" // Sample profile image URL for Jane Smith
        }
    ];

    // Calculate total rating
    const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;

    return (
        <div className="review_main">
            <div className="container">
                <div className="heading">Fiverr and OverAll Reviews:<span style={{ color: "#555555" }}>{totalRating.toFixed(1)}</span>
                    <span >
                        <div className="m-0 p-0">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    color={"#ffc107"}
                                    size={20}
                                />
                            ))}
                        </div>
                    </span>
                </div>
                <div className="review_inner">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="profile">
                                <img src={review.profileImg} alt="Avatar" style={{ borderRadius: '50%' }} />
                            </div>
                            <div className="country">
                                <MyImage src={review.icon} alt={"denmark"} width='20px' height='20px' /><strong>{review.country}</strong>
                            </div>

                            <div className="rating">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        color={index < review.rating ? "#ffc107" : "#c7c7c7"} // Yellow for filled stars, gray for empty stars
                                        size={20}
                                    />
                                ))}
                            </div>
                            <p className="review-text">{review.review}</p>
                            <p className="reviewer">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
