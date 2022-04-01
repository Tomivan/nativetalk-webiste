import React from "react";
import './signup.styles.css';

const Signup = () => {
    return(
        <div className="signup">
            <img src="" alt="" />
            <h2>Create your account</h2>
            <form className="form">
                <label>First Name</label>
                <input type="text" placeholder="Michael" />
                <label>Last Name</label>
                <input type="text" placeholder="Eze" />
                <label>Email Address</label>
                <input type="email" placeholder="contactmichaeleze@gmail.com" />
                <label>Country</label>
                <select>
                    <option></option>
                </select>
                <label>Password</label>
                <input type="password" placeholder="*******" />
                <p>By clicking create account you agree to our <span>Terms<br /> 
                    and Conditions</span>  and <span>Privacy Statement</span></p>
                <button className='create'>Create account</button>
            </form>
        </div>
    )
}

export default Signup;