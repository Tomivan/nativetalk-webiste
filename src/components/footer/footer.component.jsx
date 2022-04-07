import React from "react";
import { Link } from "@reach/router"
import Logo from "../../assets/images/Group.png";
import Facebook from '../../assets/images/facebook.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import './footer.styles.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-above">
                <img src={Logo} alt="" />
                <div className="footer-item">
                    <p><span>Products</span></p>
                    <Link to="/personal-home-page" className="link"><p>NativeTalk Personal</p></Link>
                    <Link to="/small-business-home-page" className="link"><p>NativeTalk Business</p></Link>
                    <Link to="/enterprise-home-page" className="link"><p>NativeTalk Enterprise</p></Link>
                </div>
                <div className="footer-item">
                    <p><span>Plans and pricing</span></p>
                    <Link to="/pricing" className="link"><p>Direct Link </p></Link>
                </div>
                <div className="footer-item">
                    <p><span>Resources</span></p>
                    <p>Blog</p>
                    <p>Customer stories</p>
                    <p>Tutorials</p>
                </div>
                <div className="footer-item">
                    <p><span>Company</span></p>
                    <Link to="/about-us" className="link"><p>About us</p></Link>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="footer-item">
                    <p><span>Products</span></p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
            <div className="footer-below">
                <hr className="footer-line"/>
                <p>&copy; 2022 Tech4mation LTD</p>
                <div className="media">
                    <img src={Facebook} alt="" className="media-icon"/>
                    <img src={Twitter} alt="" className="media-icon"/>
                    <img src={Instagram} alt="" className="media-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;