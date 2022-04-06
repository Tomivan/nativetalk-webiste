import React from "react";
import Nav from '../../components/nav/nav.component';
import PricingMain from '../../components/pricing-main/pricing-main.component';
import Cards from '../../components/cards/cards.component';
import Footer from "../../components/footer/footer.component";
import For from "../../components/for/for.component";
import FAQs from "../../components/FAQs/FAQs.component";

const Pricing = () => {
    return(
        <div className="pricing">
            <Nav />
            <PricingMain />
            <Cards />
            <For />
            <FAQs />
            <Footer />
        </div>
    )
}

export default Pricing;