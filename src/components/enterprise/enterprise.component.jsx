import React from "react";
import Hands from '../../assets/images/hands.png';
import './enterprise.styles.css';

const NativeTalkEnterprise = () => {
    return(
        <div className="nativetalk-enterprise">
            <div className="enterprise-left">
               <img src={Hands} alt="" className="nativetalk third"/>
            </div>
            <div className="enterprise-right">
                <h2>Team of 1 or 50+, we've got a solution for you</h2>
                <p>Set up a call centre for your large business and company in 24 hours 
                    with our Call Center software. Take advantage of our white labelling 
                    options and easy-to-use APIs designed to integrate with your existing 
                    CRM and streamline your sales and customer service workflows.</p> 
                <button className="learn">Learn More</button>
            </div>
        </div>
    )
}

export default NativeTalkEnterprise;