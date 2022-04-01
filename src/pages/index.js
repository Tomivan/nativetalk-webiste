import React from 'react';
import { Router } from "@reach/router";
import Home from './home/home.component';
import ConfirmAccount from './confirm-account/confirm-account.component';
import Demo from './demo/demo.component';
import EnterpriseHome from './enterprise-home/enterprise-home.component';
import FAQPage from './FAQs/FAQs.component';
import ForgotPassword from './forgot-password/forgot-password.component';
import OTP from './OTP/OTP.component';
import PersonalHomePage from './personal-home/personal-home.component';
import Pricing from './pricing/pricing.component';
import SignIn from './sign-in/signin.component';
import Signup from './signup/signup.component';
import SmallBusinessHomePage from './small-business-home/small-business-home.component';
import About from './about/about.component';

const Pages = () => {
    return(
        <Router className='pages'>
            <Home exact path="/"/>
            <About path="/about-us" />
            <ConfirmAccount path="/confirm-account" />
            <Demo path="/demo" />
            <EnterpriseHome path="/home-page-enterprise" />
            <FAQPage path="/frequently-asked-questions" />
            <ForgotPassword path="/forgot-password" />
            <OTP path="/otp" />
            <PersonalHomePage path="/personal-home-page" />
            <Pricing path="/pricing" />
            <SignIn path="/signin" />
            <Signup path="/signup" />
            <SmallBusinessHomePage path="/small-business-home-page" />
        </Router>
    )
}

export default Pages;