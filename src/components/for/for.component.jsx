import React from "react";
import "./for.styles.css";

const For = () => {
    return(
        <div className="for">
            <div className="for-business">
                <h2>For Businesses</h2>
                <p>Your NativeTalk account comes with 2 FREE extensions and access to all our <br />
                features. Additional extensions cost X Naira.</p>
            </div>
            <div className="for-business">
                <h2>For Personal Users</h2>
                <p>Your NativeTalk account comes with free phone numbers which regenerate<br /> 
                monthly. To maintain the same number costs X naira.</p>
            </div>
            <div className="for-business">
                <h2>For Enterprise</h2>
                <p>Pricing is flexible and customized based on your company's needs. Please<br /> 
                contact us at sales@nativetalk.io to learn more.</p>
            </div>
        </div>
    )
}

export default For;