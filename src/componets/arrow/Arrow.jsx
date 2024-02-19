'use client'
import React, { useState, useEffect } from 'react';
import "./arrow.css";
import { FaArrowUp } from "react-icons/fa";
import { scrollToTop } from '@/utils/scrollTop';

const Arrow = () => {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowArrow(scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className={`arrow_main ${showArrow ? 'show' : 'hide'}`} onClick={scrollToTop}>
            <span className=''>
                <FaArrowUp />
            </span>
        </div>
    );
};

export default Arrow;
