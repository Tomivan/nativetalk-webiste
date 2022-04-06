import React from 'react';
import Nativetalk from "../../assets/images/nativetalk.png";
import Transform from "../../assets/images/transform.png";
import Unique from "../../assets/images/unique.png";
import Calls from "../../assets/images/calls.png";
import Trash from "../../assets/images/trash.png";
import './connected.styles.css';

const Connected = () => {
    return(
        <div className="connected">
            <div className="connected-left">
                <img src={Nativetalk} alt="" className='nativetalk'/>
            </div>
            <div className="connected-right">
                <h2> Stay connected on your terms</h2>
                <p>Stay in control of your phone calls and connect on your terms with 
                    NativeTalk. Make and receive calls from your NativeTalk mobile app, no 
                    SIM or SIM registration needed. </p>
                <div className="connected-details">
                    <img src={Transform} alt="" />
                    <p>Virtual phone numbers</p>
                </div>
                <div className="connected-details">
                    <img src={Trash} alt="" />
                    <p>Disposable phone numbers</p>
                </div>
                <div className="connected-details">
                    <img src={Calls} alt="" />
                    <p>Set customised rates for incoming calls</p>
                </div>
                <div className="connected-details">
                    <img src={Unique} alt="" />
                    <p>Generate unique extensions for specific people like your family,
                        colleagues and friends.</p>
                </div>
                <button className="learn">Learn More</button>
            </div>
        </div>
    )
}

export default Connected;