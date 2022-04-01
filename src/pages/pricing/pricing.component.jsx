import React from "react";
import Nav from '../../components/nav/nav.component';
import PricingMain from '../../components/pricing-main/pricing-main.component';
import Cards from '../../components/cards/cards.component';
import Footer from "../../components/footer/footer.component";

const Pricing = () => {
    return(
        <div className="pricing">
            <Nav />
            <PricingMain />
            <Cards />
            <Footer />
        </div>
    )
}

export default Pricing;