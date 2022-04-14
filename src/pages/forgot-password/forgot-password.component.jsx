import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from '@reach/router';
import Group from "../../assets/images/Group.png";
import './forgot-password.styles.css';

const ForgotPassword = () => {
    const {handleSubmit, register } = useForm([]);
    function sendEmail() {
        
    } 
    return(
        <div className="forgot-password">
            <div className="forgot-left">
                <img src={Group} alt="The official nativetalk logo" />
                <form className="form" onSubmit={handleSubmit(sendEmail)}>
                    <h2>Forgot password?</h2>
                    <p><span>Enter your email address so we'll send you<br/> an OTP to reset your password</span></p>
                    <label>Email address</label>
                    <input type="email" placeholder="contactmichael@gmail.com" {...register("email",{required: true})}/>
                    <button className="continue">Continue</button>
                </form>
                <Link to="/signin" className="back">Back to log in</Link>
            </div>
            <div className="forgot-right"></div>
        </div>
    )
}

export default ForgotPassword;