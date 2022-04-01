import React from "react";
import Commitment from "../../components/commitment/commitment.component";
import Featured from "../../components/featured/featured.component";
import Footer from "../../components/footer/footer.component";
import Nav from "../../components/nav/nav.component";

const About = () => {
    return(
        <div className="about-us">
            <Nav />
            <Commitment />
            <Featured />
            <Footer />
        </div>
    )
}

export default About;