import React from 'react';
import Nav from '../../components/nav/nav.component';
import Main from '../../components/main/main.component';
import Connected from '../../components/connected/connected.components';
import NativeTalk from '../../components/nativetalk/nativetalk.component';
import NativeTalkEnterprise from '../../components/enterprise/enterprise.component';
import Impact from '../../components/impact/impact.component';
import FAQs from '../../components/FAQs/FAQs.component';
import SmartPhoneNumber from '../../components/smart-phonenumber/smartPhoneNumber.component';
import Customers from '../../components/customers/customers.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
    return(
        <div>
            <Nav />
            <Main />
            <Connected />
            <NativeTalk />
            <NativeTalkEnterprise />
            <Impact />
            <FAQs />
            <SmartPhoneNumber />
            <Customers />
            <Footer />
        </div>
    )
}

export default Home;