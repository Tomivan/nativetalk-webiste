import React from "react";
import './features.styles.css';

const Features = () => {
    return(
        <div className="features">
            <span>FEATURES</span>
            <h2>Same 11 digits, extra features to<br /> manage your phone calls</h2>
            <div className="features-cards">
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Virtual numbers</h3>
                    <p>No need for new SIMs or queuing for SIM <br />
                    registration. Generate a phone number<br /> 
                    online and make calls from the<br /> 
                    NativeTalk mobile and desktop app.</p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Enterprise Lines</h3>
                    <p>Get vanity (0700YourBusinessName),<br /> 
                    local  (01XXXXX) and toll-free numbers at<br /> 
                    no extra cost. Request for international<br /> 
                    numbers to increase your global reach.</p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Call analytics</h3>
                    <p>Make better business decisions with call<br /> 
                    data like Talk Time, Abandoned Calls etc.<br /> 
                    Measuring agent performance is easy with <br /> 
                    scheduled reports and visual call analytics<br /> 
                    available inside our call centre software.</p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Unlimited call extensions</h3>
                    <p>Create call extensions for multiple team<br /> 
                    members in seconds and they can make<br /> 
                    calls on their personal phones or laptops<br /> 
                    with the NativeTalk app.</p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Interactive Voice Response</h3>
                    <p>Provide self-service options with<br /> 
                    NativeTalk IVR to customers and free up<br /> 
                    your team’s time to focus on other tasks <br />
                    that need their attention.</p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Call Pop</h3>
                    <p>Never forget a customer’s name or<br /> 
                    information with a screen pop-up that<br /> 
                    appears on every incoming call. </p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Call Forwarding</h3>
                    <p>Offline or unavailable? Forward your calls<br /> 
                    to phone numbers of your choice.</p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Call hunting</h3>
                    <p>Never miss a call from customers again.<br /> 
                    Forward calls to multiple phone numbers<br /> 
                    until it finds one where the call is<br /> 
                    answered.</p>
                </div>
                <div className="features-card">
                    <img src="" alt="" />
                    <h3>Call queuing</h3>
                    <p>Minimize customer wait time by automating<br /> 
                    your calls to ring on multiple devices at the<br /> 
                    same time so any available member of your<br /> 
                    team can attend to customers.</p>
                </div>
            </div>
            <button className="nativetalk">Get NativeTalk for your small buisness</button>
        </div>
    )
}

export default Features;