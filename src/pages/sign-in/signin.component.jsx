import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "@reach/router";
import Group from "../../assets/images/Group.png"
import './signin.styles.css';

const SignIn = () => {
    const {handleSubmit, register, reset } = useForm([]);
    function signIn() {
        reset()
    }
    return(
        <div className="signin">
            <div className="signin-left">
                <img src={Group} alt="The official nativetalk logo" />
                <form className="form" onSubmit={handleSubmit(signIn)}>
                    <h2>Welcome Back</h2>
                    <p><span>Please log in to continue</span></p>
                    <label>Username(Phone Number)</label>
                    <input type="text" placeholder="07057767831" {...register("phoneNumber",{required: true})}/>
                    <label>Password</label>
                    <input type="password" placeholder="*******" {...register("password",{required: true})}/>
                    <button className="login">Log in</button>
                </form>
                <Link to="/forgot-password" className="password-link">Forgot your password?</Link>
                <div className="forgot">
                    <p>Don't have an account?<Link to="/signup">Sign up</Link> </p>
                </div>
            </div>
            <div className="signin-right"></div>
        </div>
    )
}

export default SignIn;