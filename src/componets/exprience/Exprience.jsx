
'use client'
import "./exprience.css"
import { experienceData } from "@/utils/data"
const Exprience = () => {
    return (
        <div>
            <div className="exp_main">
                <div className="exp_inner container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="heading">
                                My EXPERIENCE
                            </div>
                        </div>
                        <div className="col-md-8 col-12 exp_detail">
                            {experienceData.map((experience, index) => (
                                <div key={index} className="mb-5">
                                    {index !== 0 && <div className="line"></div>}
                                    <div className="dot"></div>
                                    <div className="heading_sec">
                                        <strong>{experience.position}</strong>
                                        <span>{experience.duration}</span>
                                    </div>
                                    <div className="head">
                                        {experience.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exprience