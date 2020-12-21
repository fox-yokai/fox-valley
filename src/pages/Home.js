import React from 'react';
import Page from '../components/Page/Page';
import HomeText from '../components/HomeText/HomeText';
import Logo from '../images/logo.PNG';
import Twitter from '../components/Twitter/Twitter'

class Home extends React.Component {
    render() {
        return (
            <main>
            <Page heading="Fox Valley Custom Plushes" logoImg={Logo} logoImgAlt="Fox Valley Custom Plush Toys logo">
                <HomeText />
            </Page>
            <Page>
                <Twitter />
            </Page>
            </main>
        );
    }
}

export default Home;