import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AboutCard from '../components/aboutCard/aboutCard';

class About extends React.Component {
    render() {
        return (
        <div>
            <Container>
                <Col md={{span: 7, offset: 3}}>
                    <br />
                    <br />
                    <AboutCard />
                </Col>
            </Container>
        </div>
        );
    }
}

export default About;