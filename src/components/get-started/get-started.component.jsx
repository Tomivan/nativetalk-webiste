import React from "react";
import Dash from "../../assets/images/dash.png";
import Fingers from "../../assets/images/fingers.png";
import './get-started.styles.css';

const GetStarted = () => {
    return(
        <div className="get-started-component">
            <div className="get-started-left">
                <h2>Get started in 3 steps</h2>
                <p>Do you feel overwhelmed by phone calls? What if you could<br /> 
                control when and how people can call you? We built NativeTalk<br /> 
                to make your calls something to look forward to.</p>
                <div className="steps">
                    <div className="step">
                        <img src={Dash} alt="" className="dash"/>
                        <p>Download NativeTalk</p>
                    </div>
                    <div className="step">
                        <img src={Dash} alt="" className="dash"/>
                        <p>Create a new account</p>
                    </div>
                    <div className="step">
                        <img src={Dash} alt="" className="dash"/>
                        <p>Enjoy your new virtual phone</p>
                    </div>
                </div>
            </div>
            <div className="get-started-right">
                <img src={Fingers} alt="" className="nativetalk fourth"/>
            </div>
        </div>
    )
}

export default GetStarted;