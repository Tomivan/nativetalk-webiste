import React from "react";
import Smartphone from '../../assets/images/smartphone.png';
import "./smartPhoneNumber.styles.css";

const SmartPhoneNumber = () => {
    return(
        <div className="smart-phone-number">
            <div className="smart-left">
                <h2>Smart phone number for<br /> better conversations</h2>
                <div className="smart-buttons">
                    <button className="smart-button"> For personal use </button>
                    <button className="smart-button">For business</button>
                </div>
            </div>
            <div className="smart-right">
                    <img src={Smartphone} alt="" />
            </div>
        </div>
    )
}

export default SmartPhoneNumber;