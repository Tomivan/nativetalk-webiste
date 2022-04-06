import React from 'react';
import CommitmentImage from "../../assets/images/commitment.png";
import './commitment.styles.css';

const Commitment = () => {
    return(
        <div className='commitment'>
            <h2>Our Commitment</h2>
            <p>We believe that customer experience in Africa can be more exceptional with the right business tools.</p>
            <p>Our business communication solutions are designed for SMEs, Startups and Enterprises who want to transform their customer <br/>
                experience and make their customers feel valued. With NativeTalk’s virtual phone system, you can grow your business without <br/>
                sacrificing customer experience or taking on capital-intensive overhead cost.</p> 
            <p>Our personal app is designed for creators and other digital natives who want to maintain their privacy and connect on their terms in an<br/> 
            increasingly open world.</p>
            <img src={CommitmentImage} alt='A man presenting to an audience in an office setting'/>
        </div>
    )
}

export default Commitment;