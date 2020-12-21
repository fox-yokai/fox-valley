import React from 'react';
import Page from '../components/Page/Page';
import TosText from "../components/TosText/TosText";



class Terms extends React.Component {
    render() {
        return (
            <main>
                <Page heading="Terms of Service">
                        <TosText />
                </Page>
            </main>

        );
    }
}

export default Terms;