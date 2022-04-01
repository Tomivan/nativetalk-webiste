import React from "react";
import CustomisedForm from "../../components/customised-form/customised-form.component";
import Footer from "../../components/footer/footer.component";
import Nav from "../../components/nav/nav.component";

const Demo = () => {
    return(
        <div className="demo">
            <Nav />
            <CustomisedForm />
            <Footer />
        </div>
    )
}

export default Demo