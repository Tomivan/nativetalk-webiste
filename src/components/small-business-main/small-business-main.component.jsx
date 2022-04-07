import React from "react";
import Main from "../../assets/images/main.png";
import './small-business-main.styles.css';

const SmallBusinessMain = () => {
    return(
        <div className="small-business-main">
            <div className="small-business-left">
                <h1>Contact Centre Solution<br /> For Smart Enterpreneurs</h1>
                <p>Make customer service simple and grow your business with a<br /> 
                NativeTalk business phone system.</p>
                <button className="generate">Generate a business phone in 30 secs</button>
            </div>
            <div className="small-business-right">
                <img src={Main} alt="A female fruitseller in her stall making a call" />
            </div>
        </div>
    )
}

export default SmallBusinessMain;