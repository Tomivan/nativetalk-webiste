import React from "react";
import Customers from "../../components/customers/customers.component";
import FAQs from "../../components/FAQs/FAQs.component";
import Footer from "../../components/footer/footer.component";
import Nav from "../../components/nav/nav.component";
import './FAQs.styles.css';

const FAQPage = () => {
    return(
        <div className="faq">
            <Nav />
            <h2>Frequently Asked Questions</h2>
            <FAQs />
            <Customers />
            <Footer />
        </div>
    )
}

export default FAQPage;