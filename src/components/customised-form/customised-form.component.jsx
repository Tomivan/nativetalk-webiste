import React from "react";
import { useForm } from 'react-hook-form';
import './customised-form.styles.css';

const CustomisedForm = () => {
    const {handleSubmit, register, reset} = useForm([]);
    function requestDemo() {
        reset()
    }
    return(
        <div className="customised">
            <h1>Get a customised solution for<br /> your enterprise</h1>
            <form className="customised-form" onSubmit={handleSubmit(requestDemo)}>
                <input type="text" placeholder="Full Name" {...register("fullName",{required: true})}/>
                <input type="email" placeholder="Work Email" {...register("workEmail",{required: true})}/>
                <input type="number" placeholder="Phone Number (Optional)" {...register("phoneNumber",{required: true})}/>
                <input type="text" placeholder="Company Name" {...register("companyName",{required: true})}/>
                <input type="text" placeholder="Company Website" {...register("companyWebsite",{required: true})}/>
                <select {...register("companySize",{required: true})}>
                    <value>Company Size</value>
                </select>
                <textarea placeholder="Tell us more about your company" {...register("info",{required: true})}></textarea>
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default CustomisedForm