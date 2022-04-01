import React from "react";
import OpenQuote from '../../assets/images/open-quote.png';
import './testimonials.styles.css'

const Testimonials = () => {
    return(
        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-left">
                <img src={OpenQuote} alt="" className="open-quote"/>
                <p>Getting a new SIM is often the first step when starting a business.<br /> 
                Due to the hassle, some entrepreneurs rely on their personal phone<br /> 
                numbers. What if you could get a phone number specially designed <br /> 
                for businesses like yours? That’s why we built NativeTalk.</p>
                <p>Lydia Tech4mation</p>
                <p>Tech4mation LTD</p>
            </div>
            <div className="testimonials-right">
                <img src="" alt="" className="close-quote"/>
            </div>
        </div>
    )
}

export default Testimonials;