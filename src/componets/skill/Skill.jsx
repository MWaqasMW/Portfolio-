"use client"
import React from "react";
import "./skill.css";

const Skill = () => {
    const skills = [
        { name: "HTML" },
        { name: "CSS" },
        { name: "Talwind CSS" },
        { name: "Bootsrape" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React js" },
        { name: "Next js" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Nest.js" },
        { name: "MongoDB" },
        // Add more skills as needed
    ];

    return (
        <div className="skill_main">
            <div className="skill_inner container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="heading">
                            My Capabilities
                        </div>
                    </div>
                    <div className="col-md-8 col-12 skill_detail">
                        <div className="head">
                            Muhammad Waqas is a skilled Frontend & MREN Stack Developer with expertise in a wide range of technologies. His capabilities include proficiency in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, Nest.js, and MongoDB. With a focus on crafting user-friendly and responsive web interfaces, Waqas excels in integrating RESTful APIs and leveraging state management solutions like Redux/Context API.
                        </div>
                        <div className="watermarks">
                            {skills.map((skill, index) => (
                                <span key={index}>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
