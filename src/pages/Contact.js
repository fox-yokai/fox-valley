import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ContactCard from '../components/contactCard/contactCard';

class Contact extends React.Component {
    render() {
        return (
        <div>
            <Container>
                <Col md={{span: 7, offset: 3}}>
                    <br />
                    <br />
                    <ContactCard />
                </Col>
            </Container>
        </div>
        );
    }
}

export default Contact;