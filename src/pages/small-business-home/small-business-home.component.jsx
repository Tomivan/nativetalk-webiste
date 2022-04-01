import React from "react";
import Benefits from "../../components/benefits/benefits.component";
import Customers from "../../components/customers/customers.component";
import FAQs from "../../components/FAQs/FAQs.component";
import Features from "../../components/features/features.component";
import Footer from "../../components/footer/footer.component";
import Nav from "../../components/nav/nav.component";
import SmallBusinessMain from "../../components/small-business-main/small-business-main.component";
import Testimonials from "../../components/testimonials/testimonials.component";

const SmallBusinessHomePage = () => {
    return(
        <div>
            <Nav />
            <SmallBusinessMain />
            <Benefits />
            <Features />
            <Testimonials />
            <FAQs />
            <Customers />
            <Footer />
        </div>
    )
}

export default SmallBusinessHomePage;