import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import TermsCard from "../components/tosCard/tosCard";

class Terms extends React.Component {
    render() {
        return (
        <div>
            <Container>
                <Col md={{span: 7, offset: 3}}>
                    <br />
                    <br />
                    <TermsCard />
                </Col>
            </Container>
        </div>
        );
    }
}

export default Terms;