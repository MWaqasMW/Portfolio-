"use client"
import React from "react";
import "./skill.css";

const Skill = () => {
    // Array of objects representing skills
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
                            I am always looking to add more skills. Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor.
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
