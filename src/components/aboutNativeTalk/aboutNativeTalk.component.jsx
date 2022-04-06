import React from "react";
import Main from "../../assets/images/main.png"
import './aboutNativeTalk.styles.css';

const AboutNativeTalk = () => {
    return(
        <div className="about-nativetalk">
            <div className="about-nativetalk-left">
                <h1>About NativeTalk</h1>
                <p>NativeTalk is an ambitious telecommunication startup with a<br /> 
                laser focus on making virtual phone systems available to all.</p> 
                <p>For ten years, we focused on providing VoIP (Voice over<br/> 
                internet protocol) solutions to enterprise companies and now<br/> 
                we want to make it accessible to small businesses and<br /> 
                personal users.</p>
                <p>We currently deliver and maintain a market-leading voice<br /> 
                platform with exceptional customer service and the will to<br /> 
                stand out through innovation and reliability</p>
            </div>
            <div className="about-nativetalk-right">
                <img src={Main} alt="" />
            </div>
        </div>
    )
}

export default AboutNativeTalk;