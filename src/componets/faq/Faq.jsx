'use client'

import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import "./faq.css"
import { faqs } from '@/utils/data/faq';
const Faq = () => {

    const [openIndex, setOpenIndex] = useState(-1);

    const toggleOpenClose = (index) => {
        setOpenIndex(index === openIndex ? -1 : index);
    };

    return (
        <div className='faq_main'>
            <div className="faq_inner container">
                <div className='heading'>Frequently Asked Questions</div>
                {faqs.questions?.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button className="faq-question" onClick={() => toggleOpenClose(index)}>
                            {faq.question}
                            {openIndex === index ? <BsChevronUp /> : <BsChevronDown />}
                        </button>
                        {openIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
