import React from "react";
import Setup from "../../assets/images/setup.png";
import Scale from "../../assets/images/scale.png";
import Controlled from "../../assets/images/controlled.png";
import Dedicated from "../../assets/images/dedicated.png";
import './simplify.styles.css';

const Simplify = () => {
    return(
        <div className="simplify">
            <h2>Simplify your business communications</h2>
            <p>Create better sales and service experiences with our customer-centric call centre solutions</p>
            <div className="simplify-cards">
                <div className="simplify-card">
                    <img src={Setup} alt="" className="simplify-icon"/>
                    <div className="simplify-details">
                        <h5>Quick set up</h5>
                        <p>Set up your call centre for<br /> thousands of users in 24hours.</p>
                    </div>
                </div>
                <div className="simplify-card">
                    <img src={Scale} alt="" className="simplify-icon"/>
                    <div className="simplify-details">
                        <h5>Scale with ease</h5>
                        <p>Manage higher call volumes than a typical inbound<br /> 
                        call centre without reducing the quality of your<br /> customer experience.</p>
                    </div>
                </div>
                <div className="simplify-card">
                    <img src={Controlled} alt="" className="simplify-icon"/>
                    <div className="simplify-details">
                        <h5>Controlled costs</h5>
                        <p>Take more customer calls with fewer<br /> agents thanks to our automated call<br/> solutions.</p>
                    </div>
                </div>
                <div className="simplify-card">
                    <img src={Dedicated} alt="" className="simplify-icon"/>
                    <div className="simplify-details">
                        <h5>Dedicated account manager</h5>
                        <p>Set up your call centre for<br /> thousands of users in 24hours.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simplify;