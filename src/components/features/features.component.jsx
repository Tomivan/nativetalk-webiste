import React from "react";
import Feature from "../../assets/images/features.png";
import Enterprise from "../../assets/images/enterprisel.png";
import Analytics from "../../assets/images/analytics.png";
import Infinity from "../../assets/images/infinity.png";
import Voice from "../../assets/images/voice.png";
import Call from "../../assets/images/call.png";
import './features.styles.css';

const Features = () => {
    return(
        <div className="features">
            <span>FEATURES</span>
            <h2>Same 11 digits, extra features to<br /> manage your phone calls</h2>
            <div className="features-cards">
                <div className="features-card">
                    <img src={Feature} alt="" className="feature-icon"/>
                    <h5>Virtual numbers</h5>
                    <p>No need for new SIMs or queuing for SIM <br />
                    registration. Generate a phone number<br /> 
                    online and make calls from the<br /> 
                    NativeTalk mobile and desktop app.</p>
                </div>
                <div className="features-card">
                    <img src={Enterprise} alt="" className="feature-icon"/>
                    <h5>Enterprise Lines</h5>
                    <p>Get vanity (0700YourBusinessName),<br /> 
                    local  (01XXXXX) and toll-free numbers at<br /> 
                    no extra cost. Request for international<br /> 
                    numbers to increase your global reach.</p>
                </div>
                <div className="features-card">
                    <img src={Analytics} alt="" className="feature-icon"/>
                    <h5>Call analytics</h5>
                    <p>Make better business decisions with call<br /> 
                    data like Talk Time, Abandoned Calls etc.<br /> 
                    Measuring agent performance is easy with <br /> 
                    scheduled reports and visual call analytics<br /> 
                    available inside our call centre software.</p>
                </div>
                <div className="features-card">
                    <img src={Infinity} alt="" className="feature-icon"/>
                    <h5>Unlimited call extensions</h5>
                    <p>Create call extensions for multiple team<br /> 
                    members in seconds and they can make<br /> 
                    calls on their personal phones or laptops<br /> 
                    with the NativeTalk app.</p>
                </div>
                <div className="features-card">
                    <img src={Voice} alt="" className="feature-icon"/>
                    <h5>Interactive Voice Response</h5>
                    <p>Provide self-service options with<br /> 
                    NativeTalk IVR to customers and free up<br /> 
                    your team’s time to focus on other tasks <br />
                    that need their attention.</p>
                </div>
                <div className="features-card">
                    <img src={Call} alt="" className="feature-icon"/>
                    <h5>Call Pop</h5>
                    <p>Never forget a customer’s name or<br /> 
                    information with a screen pop-up that<br /> 
                    appears on every incoming call. </p>
                </div>
                <div className="features-card">
                    <img src={Feature} alt="" className="feature-icon"/>
                    <h5>Call Forwarding</h5>
                    <p>Offline or unavailable? Forward your calls<br /> 
                    to phone numbers of your choice.</p>
                </div>
                <div className="features-card">
                    <img src={Feature} alt="" className="feature-icon"/>
                    <h5>Call hunting</h5>
                    <p>Never miss a call from customers again.<br /> 
                    Forward calls to multiple phone numbers<br /> 
                    until it finds one where the call is<br /> 
                    answered.</p>
                </div>
                <div className="features-card">
                    <img src={Feature} alt="" className="feature-icon"/>
                    <h5>Call queuing</h5>
                    <p>Minimize customer wait time by automating<br /> 
                    your calls to ring on multiple devices at the<br /> 
                    same time so any available member of your<br /> 
                    team can attend to customers.</p>
                </div>
            </div>
            <button className="nativetalk-button">Get NativeTalk for your small buisness</button>
        </div>
    )
}

export default Features;