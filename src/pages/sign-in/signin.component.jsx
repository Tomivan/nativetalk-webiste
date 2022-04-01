import React from "react";
import { Link } from "@reach/router";
import './signin.styles.css';

const SignIn = () => {
    return(
        <div className="signin">
            <img src="" alt="" />
            <h2>Welcome Back</h2>
            <p><span>Please log in to continue</span></p>
            <form className="form">
                <label>Username(Phone Number)</label>
                <input type="number" placeholder="07057767831" />
                <label>Password</label>
                <input type="password" placeholder="*******" />
                <button className="login">Log in</button>
            </form>
            <Link to="/forgot-password">Forgot your password?</Link>
            <p>Don't have an account?<Link to="/signup">Sign up</Link> </p>
        </div>
    )
}

export default SignIn;