import React from "react";
import './customised-form.styles.css';

const CustomisedForm = () => {
    return(
        <div className="">
            <h2>Get a customised solution for<br /> your enterprise</h2>
            <form className="form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Work Email" />
                <input type="number" placeholder="Phone Number (Optional)" />
                <input type="text" placeholder="Company Name" />
                <input type="text" placeholder="Company Website" />
                <select>
                    <value>Company Size</value>
                </select>
                <textarea></textarea>
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default CustomisedForm