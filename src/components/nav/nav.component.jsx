import React from 'react';
import Logo from '../../assets/images/Group.png';
import { Link } from "@reach/router";
import './nav.styles.css';

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/"><img src={Logo} alt="The native talk logo" /></Link>
            <ul className="unorderd">
                <Link to="/" className='link'><li>Home</li></Link>
                <li>Product</li>
                <li>Resources</li>
                <Link to="/pricing" className='link'><li>Pricing</li></Link>
                <Link to="/about-us" className='link'><li>About us</li></Link>
            </ul>
            <div className="nav-buttons">
                <Link className="link" to="/signin"><button className="sign-in">Sign in</button></Link>
                <Link className="link" to="/signup"><button className='create'>Create free account</button></Link>
            </div>
        </div>
    )
}

export default Nav;