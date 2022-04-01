import React from "react";
import './enterprise-main.styles.css';

const EnterpriseMain = () => {
    return (
        <div className="enterprise-main">
            <div className="enterprise-main-left">
                <h2>Cloud-based <br />contact center solutions<br /> for Enterprises</h2>
                <p>Power your internal and customer-facing communications in <br /> 
                minutes with the NativeTalk VoIP call centre system. Run your<br /> 
                call centre in the cloud today.</p>
                <div className="demo">
                    <button className="schedule">Schedule a Demo</button>
                    <p>or Contact Sales</p>
                </div>
            </div>
            <div className="enterprise-main-right">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default EnterpriseMain;