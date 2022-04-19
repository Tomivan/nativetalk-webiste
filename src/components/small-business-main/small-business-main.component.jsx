import React from "react";
import Main from "../../assets/images/main.png";
import Slice from "../../assets/images/slice.png";
import Fivestar from "../../assets/images/fivestar.png";
import LordFrank from "../../assets/images/lordfrank.png";
import './small-business-main.styles.css';

const SmallBusinessMain = () => {
    return(
        <div className="small-business-main">
            <div className="small-business-left">
                <h1>Contact Centre Solution<br /> For Smart Enterpreneurs</h1>
                <p>Make customer service simple and grow your business with a<br /> 
                NativeTalk business phone system.</p>
                <button className="generate">Generate a business phone in 30 secs</button>
                <div className="featured-images">
                    <img src={Slice} alt="the slice brand logo" />
                    <img src={Fivestar} alt="the fivestar brand logo" />
                    <img src={LordFrank} alt="the lordfrank brand logo" />
                </div>
            </div>
            <div className="small-business-right">
                <img src={Main} alt="A female fruitseller in her stall making a call" />
            </div>
        </div>
    )
}

export default SmallBusinessMain;