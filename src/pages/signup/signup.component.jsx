import React from "react";
import { useForm } from 'react-hook-form';
import Group from "../../assets/images/Group.png";
import './signup.styles.css';

const Signup = () => {
    const {handleSubmit, register, reset } = useForm([]);
    function createAccount() {
        reset()
    }
    return(
        <div className="signup">
            <div className="signup-nav">
                <img src={Group} alt="The official nativetalk logo" /> 
            </div>
            <form className="form" onSubmit={handleSubmit(createAccount)}>
                <h2>Create your account</h2>
                <label>First Name</label>
                <input type="text" placeholder="Michael" {...register("firstName",{required: true})}/>
                <label>Last Name</label>
                <input type="text" placeholder="Eze" {...register("lastName",{required: true})}/>
                <label>Email Address</label>
                <input type="email" placeholder="contactmichaeleze@gmail.com" {...register("email",{required: true})}/>
                <label>Country</label>
                <select {...register("country",{required: true})}>
                    <option></option>
                </select>
                <label>Password</label>
                <input type="password" placeholder="*******" {...register("password",{required: true})}/>
                <p>By clicking create account you agree to our <span>Terms<br /> 
                    and Conditions</span>  and <span>Privacy Statement</span></p>
                <button className='create'>Create account</button>
            </form>
        </div>
    )
}

export default Signup;