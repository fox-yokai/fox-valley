import React from 'react';
import Page from '../components/Page/Page';
import ContactText from '../components/ContactText/ContactText';

class Contact extends React.Component {
    render() {
        return (
        <main>
            <Page heading="Contact Information">
                <ContactText />
            </Page>
        </main>
        );
    }
}

export default Contact;