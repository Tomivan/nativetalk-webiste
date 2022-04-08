import React from "react";
import Organise from "../../assets/images/organise.png";
import Relationship from "../../assets/images/relationship.png";
import Transform from "../../assets/images/transform.png";
import Business from "../../assets/images/grow.png";
import './benefits.styles.css';

const Benefits = () => {
    return(
        <div className="benefits">
            <h2>Get a phone number that grows<br />your business</h2>
            <p>Do more with a phone number that helps you talk to customers professionally, upgrade your <br /> 
            customer service and drive sales. </p>
            <div className="benefits-cards">
                <div className="benefits-card">
                    <img src={Organise} alt="" className="benefits-icon"/>
                    <h5>Organise your business<br /> communications</h5>
                    <p>Generate a phone number to separate your business and<br /> 
                    personal calls in 10 minutes without buying a SIM card or new <br /> phone.</p>
                </div>
                <div className="benefits-card">
                    <img src={Relationship} alt="" className="benefits-icon"/>
                    <h5>Build a relationship<br /> with customers</h5>
                    <p>Get powerful tools to personalise your calls with customers and<br /> 
                    build loyalty with an unforgettable customer experience.</p>
                </div>
                <div className="benefits-card">
                    <img src={Business} alt="" className="benefits-icon"/>
                    <h5>Grow your business<br /> effortlessly</h5>
                    <p>Access call insights to grow your business and keep overhead<br /> 
                    costs low with our scalable phone system.</p>
                </div>
                <div className="benefits-card">
                    <img src={Transform} alt="" className="benefits-icon"/>
                    <h5>Transform your<br /> customer experience</h5>
                    <p>Make self-service options available to customers for a fast and<br /> 
                    easy buying experience.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits;