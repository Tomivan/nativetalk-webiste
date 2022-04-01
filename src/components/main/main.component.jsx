import React from 'react';
import './main.styles.css';

const Main = () => {
    return(
        <div className="main">
            <div className="main-left">
                <h1>Same phone number,<br /> smart features you need</h1>
                <p>NativeTalk gives you a virtual phone number with smart features<br /> 
                to stay in control of your business and personal calls.</p>
                <button className="generate">Generate a phone number in 10 seconds</button>
            </div>
            <div className="main-right"></div>
        </div>
    )
}

export default Main;