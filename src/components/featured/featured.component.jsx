import React from "react";
import Slice from "../../assets/images/slice.png";
import Fivestar from "../../assets/images/fivestar.png";
import LordFrank from "../../assets/images/lordfrank.png";
import './featured.styles.css';

const Featured = () => {
    return(
        <div className="featured">
            <h2>As Featured In</h2>
            <div className="featured-images">
                <img src={Slice} alt="the slice brand logo" />
                <img src={Fivestar} alt="the fivestar brand logo" />
                <img src={LordFrank} alt="the lordfrank brand logo" />
            </div>
            <div className="featured-images">
                <img src={Slice} alt="the slice brand logo" />
                <img src={Fivestar} alt="the fivestar brand logo" />
                <img src={LordFrank} alt="the lordfrank brand logo" />
            </div>
            <div className="featured-images">
                <img src={Slice} alt="the slice brand logo" />
                <img src={Fivestar} alt="the fivestar brand logo" />
                <img src={LordFrank} alt="the lordfrank brand logo" />
            </div>
        </div>
    )
}

export default Featured;
