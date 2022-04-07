import React from "react";
import NativeTalk from "../../assets/images/nativetalk.png"
import "./calls.styles.css";

const Calls = () => {
    return(
        <div className="calls">
            <div className="calls-left">
                <h2>Calls are more exciting<br /> with NativeTalk</h2>
                <p>Do you feel overwhelmed by phone calls? What if you could control<br /> 
                when and how people can call you? We built NativeTalk to make your<br /> 
                calls something to look forward to.</p>
            </div>
            <div className="calls-right">
                <img src={NativeTalk} alt="a hand holding a phone" className="nativetalk"/>
            </div>
        </div>
    )
}

export default Calls;