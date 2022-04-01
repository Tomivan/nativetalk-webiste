import React from 'react';
import './impact.styles.css';

const Impact = () => {
    return(
        <div className="impact">
            <h2>Our Impact</h2>
            <div className="impact-info">
                <img src={} alt="" />
                <div className="impact-details">
                    <h3>Over 100,000</h3>
                    <p>minutes of calls have been 
                        made on NativeTalk</p>
                </div>
            </div>
            <div className="impact-info">
                <img src={} alt="" />
                <div className="impact-details">
                    <h3>300+</h3>
                    <p>Businesses</p>
                </div>
            </div>
            <div className="impact-info">
                <img src={} alt="" />
                <div className="impact-details">
                    <h3>10,000</h3>
                    <p>Call agents</p>
                </div>
            </div>
        </div>
    )
}

export default Impact;