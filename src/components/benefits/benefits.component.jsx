import React from "react";
import './benefits.styles.css';

const Benefits = () => {
    return(
        <div className="benefits">
            <h2>Get a phone number that grows<br />your business</h2>
            <p>Do more with a phone number that helps you talk to customers professionally, upgrade your <br /> 
            customer service and drive sales. </p>
            <div className="benefits-cards">
                <div className="benefits-card">
                    <img src="" alt="" />
                    <h3>Organise your business<br /> communications</h3>
                    <p>Generate a phone number to separate your business and<br /> 
                    personal calls in 10 minutes without buying a SIM card or new <br /> phone.</p>
                </div>
                <div className="benefits-card">
                    <img src="" alt="" />
                    <h3>Build a relationship<br /> with customers</h3>
                    <p>Get powerful tools to personalise your calls with customers and<br /> 
                    build loyalty with an unforgettable customer experience.</p>
                </div>
                <div className="benefits-card">
                    <img src="" alt="" />
                    <h3>Grow your business<br /> effortlessly</h3>
                    <p>Access call insights to grow your business and keep overhead<br /> 
                    costs low with our scalable phone system.</p>
                </div>
                <div className="benefits-card">
                    <img src="" alt="" />
                    <h3>Transform your<br /> customer experience</h3>
                    <p>Make self-service options available to customers for a fast and<br /> 
                    easy buying experience.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits;