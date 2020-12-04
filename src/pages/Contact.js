import React from 'react';
import Page from '../components/Page/Page';
import ContactText from '../components/ContactText/ContactText';

class Contact extends React.Component {
    render() {
        return (
        <div>
            <Page heading="Contact Information">
                <ContactText />
            </Page>
        </div>
        );
    }
}

export default Contact;