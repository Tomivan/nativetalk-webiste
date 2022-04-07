import React from "react";
import SmartPhone from "../../assets/images/smartphone.png";
import './personal-main.styles.css';

const PersonalMain = () => {
    return(
        <div className="personal-main">
            <div className="personal-left">
                <h1>Look Forward to<br /> Phone calls</h1>
                <p>Stay in control with NativeTalk. Get a virtual phone, make<br /> 
                and receive calls, experience cheaper call rates and more.</p>
                <button className="download">Download Nativetalk</button>
            </div>
            <div className="personal-right">
                <img src={SmartPhone} alt="Two floating smartphones" />
            </div>
        </div>
    )
}

export default PersonalMain;