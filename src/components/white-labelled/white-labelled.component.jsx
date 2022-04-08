import React from "react";
import Nativetalk from "../../assets/images/nativetalk.png"
import './white-labelled.styles.css';

const Whitelabelled = () => {
    return(
        <div className="white-labelled">
            <div className="white-labelled-left">
                <h2>Looking for white-labelled<br/> call center solutions?</h2>
                <p>Leverage our well-documented APIs and white labelled contact centre<br /> 
                solutions to match your brand.</p>
                <button className="contact">Contact Sales</button>
            </div>
            <div className="white-labelled-right">
                <img src={Nativetalk} alt="" className="nativetalk"/>
            </div>
        </div>
    )
}

export default Whitelabelled;