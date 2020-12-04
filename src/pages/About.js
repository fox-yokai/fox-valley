import React from 'react';
import AboutText from '../components/AboutText/AboutText';
import Page from '../components/Page/Page';


class About extends React.Component {
    render() {
        return (
        <div>
            <Page heading="About Me">
                <AboutText />
            </Page>
        </div>
        );
    }
}

export default About;