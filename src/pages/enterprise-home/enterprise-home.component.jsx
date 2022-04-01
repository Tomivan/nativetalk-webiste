import React from "react";
import CustomerService from "../../components/customer-service/customer-service.component";
import EnterpriseMain from "../../components/enterprise-main/enterprise-main.component";
import FAQs from "../../components/FAQs/FAQs.component";
import Footer from "../../components/footer/footer.component";
import Nav from "../../components/nav/nav.component";
import Simplify from "../../components/simplify/simplify.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import Whitelabelled from "../../components/white-labelled/white-labelled.component";

const EnterpriseHome = () => {
    return(
        <div className="enterprise-home">
            <Nav />
            <EnterpriseMain />
            <Simplify />
            <CustomerService />
            <Testimonials />
            <FAQs />
            <Whitelabelled />
            <Footer />
        </div>
    )
}

export default EnterpriseHome