import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PricesCard from "../components/pricesCard/pricesCard"

class Pricing extends React.Component {
    render() {
        return(
            <div>
            <Container>
                <Col md={{span: 7, offset: 3}}>
                    <br />
                    <br />
                    <PricesCard />
                </Col>
            </Container>
            </div>
        );
    }
}

export default Pricing;