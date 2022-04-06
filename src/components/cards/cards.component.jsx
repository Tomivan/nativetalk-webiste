import React from "react";
import Personal from "../../assets/images/personal.png";
import Enterprise from "../../assets/images/enterprise.png";
import Business from "../../assets/images/business.png";
import Checked from "../../assets/images/checked.png";
import "./cards.styles.css";

const Cards = () => {
    return(
        <div className="cards">
            <div className="cards-card">
                <div className="card-top">
                    <img src={Personal} alt="" />
                    <h3>Personal</h3>
                </div>
                <hr/>
                <div className="card-bottom">
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Virtual Phone Numbers</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Conference Call Participants</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Automatic Call Routing</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Automated Company Greeting</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Email Support</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Call Hunting</p>
                    </div>
                </div>
            </div>
            <div className="cards-card">
                <div className="card-top">
                    <img src={Business} alt="" />
                    <h3>Business</h3>
                </div>
                <hr/>
                <div className="card-bottom">
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Virtual Phone Numbers</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Conference Call Participants</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Automatic Call Routing</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Automated Company Greeting</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Email Support</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Call Hunting</p>
                    </div>
                </div>
            </div>
            <div className="cards-card">
                <div className="card-top">
                    <img src={Enterprise} alt="" />
                    <h3>Enterprise</h3>
                </div>
                <hr/>
                <div className="card-bottom">
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Virtual Phone Numbers</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Conference Call Participants</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Automatic Call Routing</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Automated Company Greeting</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Email Support</p>
                    </div>
                    <div className="card-details">
                        <img src={Checked} alt="checked box" />
                        <p>Call Hunting</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;