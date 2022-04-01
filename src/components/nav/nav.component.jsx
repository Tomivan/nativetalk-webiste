import React from 'react';
import Logo from '../../assets/images/Group.png';
import { Link } from "@reach/router";
import './nav.styles.css';

const Nav = () => {
    return(
        <div className="nav">
            <img src={Logo} alt="The native talk logo" />
            <ul className="unorderd">
                <li>Home</li>
                <li>Product</li>
                <li>Resources</li>
                <li>Pricing</li>
                <li>About us</li>
            </ul>
            <div className="nav-buttons">
                <button className="sign-in"><Link className="link" to="signin">Sign in</Link></button>
                <button className='create'><Link className="link" to="/signup">Create free account</Link></button>
            </div>
        </div>
    )
}

export default Nav;