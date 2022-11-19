import React from "react";
import "./Bottom.css"
import cvPrev from "../../img/ResumePrev.png"
import resumePDF from '../../ZivWeissmanCV.pdf';

const Bottom = () => {
    return (
        <div className="b">
            <div className="b-left">
            
            <div className="CV-Preview"><a href={resumePDF} rel='noopener noreferrer' target='_blank'>
                    <img
                        src={cvPrev}
                        alt=""
                        className="CV-img"
                    />
                    <div className="CV-Description">Click to View My CV</div>
                    </a></div>    
            </div>
            <div className="b-right">
            <h1>Educational and Contact Info on CV</h1>
            <p><b>Email: </b>zivweissman2008@gmail.com</p>
            <p><b>Phone: </b>+1 (650) 336 3997</p>
            </div>
        </div>
    )
}

export default Bottom