import React from "react";
import Techpoint from "../../assets/images/techpoint.png";
import NationalUpdate from "../../assets/images/national-update.png";
import NationalCompass from "../../assets/images/national-compass.png";
import BusinessDay from "../../assets/images/businessday.png";
import Latest from "../../assets/images/latest.png";
import Skillmine from "../../assets/images/skillmine.png";
import TC from "../../assets/images/tc.png"
import Headlines from "../../assets/images/headlines.png";
import Leadership from "../../assets/images/leadership.png";
import './featured.styles.css';

const Featured = () => {
    return(
        <div className="featured">
            <h2>As Featured In</h2>
            <div className="featured-images">
                <img src={Techpoint} alt="the slice brand logo" />
                <img src={Latest} alt="the fivestar brand logo" />
                <img src={Skillmine} alt="the lordfrank brand logo" />
                <img src={TC} alt="the lordfrank brand logo" />
                <img src={Headlines} alt="the lordfrank brand logo" />
            </div>  
            <div className="featured-images">
                <img src={BusinessDay} alt="the lordfrank brand logo" />
                <img src={NationalUpdate} alt="the lordfrank brand logo" />
                <img src={Leadership} alt="the lordfrank brand logo" />
                <img src={NationalCompass} alt="the lordfrank brand logo" />
            </div>
        </div>
    )
}

export default Featured;
