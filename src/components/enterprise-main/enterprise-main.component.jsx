import React from "react";
import Main from "../../assets/images/main.png";
import Slice from "../../assets/images/slice.png";
import Fivestar from "../../assets/images/fivestar.png";
import LordFrank from "../../assets/images/lordfrank.png";
import { Link } from "@reach/router"
import './enterprise-main.styles.css';

const EnterpriseMain = () => {
    return (
        <div className="enterprise-main">
            <div className="enterprise-main-left">
                <h1>Cloud-based <br />contact center solutions<br /> for Enterprises</h1>
                <p>Power your internal and customer-facing communications in <br /> 
                minutes with the NativeTalk VoIP call centre system. Run your<br /> 
                call centre in the cloud today.</p>
                <div className="demo-details">
                    <Link to="/demo" className="link"><button className="schedule">Schedule a Demo</button></Link>
                    <p>or Contact Sales</p>
                </div>
                <div className="featured-images">
                <img src={Slice} alt="the slice brand logo" />
                <img src={Fivestar} alt="the fivestar brand logo" />
                <img src={LordFrank} alt="the lordfrank brand logo" />
            </div>
            </div>
            <div className="enterprise-main-right">
                <img src={Main} alt="a woman making a call in her stall" />
            </div>
        </div>
    )
}

export default EnterpriseMain;