import React from "react";
import Group from "../../assets/images/Group.png";
import { Link } from "@reach/router";
import './confirm-account.styles.css';

const ConfirmAccount = () => {
    return(
        <div className="confirm-account">
            <div className="confirm-left">
                <img src={Group} alt="The official nativetalk logo" />
                <div className="confirm-info">
                    <h2>Confirm your account</h2>
                    <p>We have sent a confirmation mail to your email<br /> 
                    address. This verification link is valid for 24 hours only</p>
                    <Link to="/"><button className="return">Return to homepage</button></Link>
                </div>
            </div>
            <div className="confirm-right"></div>
        </div>
    )
}

export default ConfirmAccount;