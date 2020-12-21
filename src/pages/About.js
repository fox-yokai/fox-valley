import React from 'react';
import AboutText from '../components/AboutText/AboutText';
import Page from '../components/Page/Page';


class About extends React.Component {
    render() {
        return (
        <main>
            <Page heading="About Me">
                <AboutText />
            </Page>
        </main>
        );
    }
}

export default About;