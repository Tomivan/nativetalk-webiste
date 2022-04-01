import React from "react";
import { Link } from "@reach/router";
import "./OTP.styles.css";

const OTP = () => {
    return(
        <div className="otp">
            <img src="" alt="" />
            <h2>Enter Verification Code</h2>
            <p><span>Enter 4-digit confirmation code sent to your email</span></p>
            <form className="otp-form">
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <button className="submit">Submit</button>
            </form>
            <Link to="/signin">Return to log in</Link>
            <p>Didn't receive an OTP via email?<Link to="">Send code again</Link></p>
        </div>
    )
}

export default OTP;