import React from "react";
import Calls from "../../components/calls/calls.components";
import DoNativetalk from "../../components/do-nativetalk/do-nativetalk.component";
import FAQs from "../../components/FAQs/FAQs.component";
import Footer from "../../components/footer/footer.component";
import GetStarted from "../../components/get-started/get-started.component";
import Nav from "../../components/nav/nav.component";
import PersonalMain from "../../components/personal-main/personal-main.component";

const PersonalHomePage = () => {
    return(
        <div className="personal-home">
            <Nav />
            <PersonalMain />
            <Calls />
            <DoNativetalk />
            <GetStarted />
            <FAQs />
            <Footer />
        </div>
    )
}

export default PersonalHomePage;