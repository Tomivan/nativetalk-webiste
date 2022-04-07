import React from "react";
import Features from "../../assets/images/features.png";
import './do-nativetalk.styles.css';

const DoNativetalk = () => {
    return(
        <div className="do-nativetalk">
            <h2>What you can do with NativeTalk</h2>
            <div className="do-nativetalk-cards">
                <div className="do-nativetalk-card">
                    <img src={Features} alt="" className="features-icon"/>
                    <h4>Virtual phone numbers<br /> at your fingertips</h4>
                    <p>Generate virtual phone numbers at your convenience for<br /> 
                    making calls or creating another WhatsApp account 😄</p>
                </div>
                <div className="do-nativetalk-card">
                    <img src={Features} alt="" className="features-icon"/>
                    <h4>Temporary numbers</h4>
                    <p>Create phone numbers for specific purposes like weddings<br /> or birthdays and delete when done.</p>
                </div>
                <div className="do-nativetalk-card">
                    <img src={Features} alt="" className="features-icon"/>
                    <h4>Customised inbound<br /> call rates</h4>
                    <p>Get paid when people call you at your personalized rates.</p>
                </div>
                <div className="do-nativetalk-card">
                    <img src={Features} alt="" className="features-icon"/>
                    <h4>Make unlimited local<br /> and international calls</h4>
                    <p>Make local and international calls at the cheapest call rates<br /> and via your internet.</p>
                </div>
            </div>
        </div>
    )
}

export default DoNativetalk;