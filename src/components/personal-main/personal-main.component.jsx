import React from "react";
import SmartPhone from "../../assets/images/smartphone.png";
import Slice from "../../assets/images/slice.png";
import Fivestar from "../../assets/images/fivestar.png";
import LordFrank from "../../assets/images/lordfrank.png";
import './personal-main.styles.css';

const PersonalMain = () => {
    return(
        <div className="personal-main">
            <div className="personal-left">
                <h1>Look Forward to<br /> Phone calls</h1>
                <p>Stay in control with NativeTalk. Get a virtual phone, make<br /> 
                and receive calls, experience cheaper call rates and more.</p>
                <button className="download">Download Nativetalk</button>
                <div className="featured-images">
                    <img src={Slice} alt="the slice brand logo" />
                    <img src={Fivestar} alt="the fivestar brand logo" />
                    <img src={LordFrank} alt="the lordfrank brand logo" />
                </div>
            </div>
            <div className="personal-right">
                <img src={SmartPhone} alt="Two floating smartphones" />
            </div>
        </div>
    )
}

export default PersonalMain;