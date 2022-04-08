import React from "react";
import './customised-form.styles.css';

const CustomisedForm = () => {
    return(
        <div className="customised">
            <h1>Get a customised solution for<br /> your enterprise</h1>
            <form className="customised-form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Work Email" />
                <input type="number" placeholder="Phone Number (Optional)" />
                <input type="text" placeholder="Company Name" />
                <input type="text" placeholder="Company Website" />
                <select>
                    <value>Company Size</value>
                </select>
                <textarea placeholder="Tell us more about your company"></textarea>
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default CustomisedForm