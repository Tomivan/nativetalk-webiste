import React from "react";
import './confirm-account.styles.css';

const ConfirmAccount = () => {
    return(
        <div className="confirm-account">
            <img src="" alt="" />
            <h2>Confirm your account</h2>
            <p>We have sent a confirmation mail to your email<br /> 
            address. This verification link is valid for 24 hours only</p>
            <button className="return">Return to homepage</button>
        </div>
    )
}

export default ConfirmAccount;