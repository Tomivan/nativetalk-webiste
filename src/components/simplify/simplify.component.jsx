import React from "react";
import './simplify.styles.css';

const Simplify = () => {
    return(
        <div className="simplify">
            <h2>Simplify your business communications</h2>
            <p>Create better sales and service experiences with our customer-centric call centre solutions</p>
            <div className="simplify-cards">
                <div className="simplify-card">
                    <img src="" alt="" />
                    <div className="simplify-details">
                        <h3>Quick set up</h3>
                        <p>Set up your call centre for<br /> thousands of users in 24hours.</p>
                    </div>
                </div>
                <div className="simplify-card">
                    <img src="" alt="" />
                    <div className="simplify-details">
                        <h3>Scale with ease</h3>
                        <p>Manage higher call volumes than a typical inbound<br /> 
                        call centre without reducing the quality of your<br /> customer experience.</p>
                    </div>
                </div>
                <div className="simplify-card">
                    <img src="" alt="" />
                    <div className="simplify-details">
                        <h3>Controlled costs</h3>
                        <p>Take more customer calls with fewer<br /> agents thanks to our automated call<br/> solutions.</p>
                    </div>
                </div>
                <div className="simplify-card">
                    <img src="" alt="" />
                    <div className="simplify-details">
                        <h3>Dedicated account manager</h3>
                        <p>Set up your call centre for<br /> thousands of users in 24hours.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simplify;