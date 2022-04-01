import React from 'react';
import './connected.styles.css';

const Connected = () => {
    return(
        <div className="connected">
            <div className="connected-left">
                <img src={} alt="" />
            </div>
            <div className="connected-right">
                <h2> Stay connected on your terms</h2>
                <p>Stay in control of your phone calls and connect on your terms with 
                    NativeTalk. Make and receive calls from your NativeTalk mobile app, no 
                    SIM or SIM registration needed. </p>
                <div className="connected-details">
                    <img src={} alt="" />
                    <p>Virtual phone numbers</p>
                </div>
                <div className="connected-details">
                    <img src={} alt="" />
                    <p>Disposable phone numbers</p>
                </div>
                <div className="connected-details">
                    <img src={} alt="" />
                    <p>Set customised rates for incoming calls</p>
                </div>
                <div className="connected-details">
                    <img src={} alt="" />
                    <p>Generate unique extensions for specific people like your family,
                        colleagues and friends.</p>
                </div>
                <button className="learn">Learn More</button>
            </div>
        </div>
    )
}

export default Connected;