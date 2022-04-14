import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "@reach/router";
import Group from "../../assets/images/Group.png";
import "./OTP.styles.css";

const OTP = () => {
    const {handleSubmit, register } = useForm([]);
    function submitOtp() {
        
    }
    return(
        <div className="otp">
           <div className="otp-left">
                <img src={Group} alt="The official nativetalk logo" />
                <form className="otp-form" onSubmit={handleSubmit(submitOtp)}>
                    <h2>Enter Verification Code</h2>
                    <p><span>Enter 4-digit confirmation code sent to your email</span></p>
                    <div className="otp-input">
                        <input type="number" {...register("number",{required: true})}/>
                        <input type="number" {...register("number",{required: true})}/>
                        <input type="number" {...register("number",{required: true})}/>
                        <input type="number" {...register("number",{required: true})}/>
                    </div>
                    <button className="submit">Submit</button>
                </form>
                <Link to="/signin" className="signin-link">Return to log in</Link>
                <p className="send-again">Didn't receive an OTP via email?<Link to="#">Send code again</Link></p>
           </div>
        </div>
    )
}

export default OTP;