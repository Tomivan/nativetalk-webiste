import React from "react";
import { Link } from '@reach/router';
import './forgot-password.styles.css';

const ForgotPassword = () => {
    return(
        <div className="forgot-password">
            <img src="" alt="" />
            <h2>Forgot password?</h2>
            <p>Enter your email address so we'll send you an OTP to reset your password</p>
            <form className="form">
                <label>Email address</label>
                <input type="email" placeholder="contactmichael@gmail.com" />
                <button className="continue">Continue</button>
            </form>
            <Link to="/signin">Back to log in</Link>
        </div>
    )
}

export default ForgotPassword;