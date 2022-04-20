import React from "react";
import Live from "../../assets/images/live.png";
import Whispering from "../../assets/images/whispering.png";
import CRM from "../../assets/images/crm.png"
import Modifications from "../../assets/images/modifications.png";
import Monitoring from "../../assets/images/monitoring.png";
import Queuing from "../../assets/images/queuing.png";
import './customer-service.styles.css';

const CustomerService = () => {
    return(
        <div className="customer-service">
            <h2>Customer Service Solution for<br /> Mordern Buisness</h2>
            <p>Get these features with our cloud PBX solutions</p>
            <div className="customer-cards">
                <div className="customer-card">
                    <img src={Modifications} alt="" className="customer-icon"/>
                    <h5>Real-Time Modifications</h5>
                    <p>Toggle your system settings at any time,<br /> 
                    including adding new numbers or users<br /> in a single click.</p>
                </div>
                <div className="customer-card">
                    <img src={Live} alt=""  className="customer-icon"/>
                    <h5>Live Feed</h5>
                    <p>Gain a real-time perspective of team<br /> 
                    activity, so you can shift resources and<br /> optimise productivity.</p>
                </div>
                <div className="customer-card">
                    <img src={Queuing} alt=""  className="customer-icon"/>
                    <h5>Call Queuing</h5>
                    <p>Give inbound callers the option to remain in<br /> 
                    queue until one of your agents is available<br /> to talk.</p>
                </div>
                <div className="customer-card">
                    <img src={Whispering} alt=""  className="customer-icon"/>
                    <h5>Call Whispering</h5>
                    <p>Secretly speak to teammates while they<br /> 
                    are on a live call so you can provide<br /> timely advice.</p>
                </div>
                <div className="customer-card">
                    <img src={CRM} alt=""  className="customer-icon"/>
                    <h5>CRM integration</h5>
                    <p>Native Talk integrates with your CRM<br /> and Helpdesk tools to keep all<br /> 
                    conversations connected.</p>
                </div>
                <div className="customer-card">
                    <img src={Monitoring} alt=""  className="customer-icon"/>
                    <h5>Call Monitoring</h5>
                    <p>Accelerate employee training and boost call<br /> quality assurance by monitoring live calls.</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerService;