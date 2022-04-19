import React from "react";
import Features from "../../assets/images/features.png";
import Temporary from "../../assets/images/temporary.png";
import Call from "../../assets/images/call.png";
import Unlimited from "../../assets/images/unlimited.png";
import './do-nativetalk.styles.css';

const DoNativetalk = () => {
    return(
        <div className="do-nativetalk">
            <h2>What you can do with NativeTalk</h2>
            <div className="do-nativetalk-cards">
                <div className="do-nativetalk-card">
                    <img src={Features} alt="" className="features-icon"/>
                    <h5>Virtual phone numbers<br /> at your fingertips</h5>
                    <p>Generate virtual phone numbers at your convenience for<br /> 
                    making calls or creating another WhatsApp account 😄</p>
                </div>
                <div className="do-nativetalk-card">
                    <img src={Temporary} alt="" className="features-icon"/>
                    <h5>Temporary numbers</h5>
                    <p>Create phone numbers for specific purposes like weddings<br /> or birthdays and delete when done.</p>
                </div>
                <div className="do-nativetalk-card">
                    <img src={Call} alt="" className="features-icon"/>
                    <h5>Customised inbound<br /> call rates</h5>
                    <p>Get paid when people call you at your personalized rates.</p>
                </div>
                <div className="do-nativetalk-card">
                    <img src={Unlimited} alt="" className="features-icon"/>
                    <h5>Make unlimited local<br /> and international calls</h5>
                    <p>Make local and international calls at the cheapest call rates<br /> and via your internet.</p>
                </div>
            </div>
        </div>
    )
}

export default DoNativetalk;