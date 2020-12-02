import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import PricesCard from "../components/pricesCard/pricesCard"

import Page from '../components/Page/Page';
import PricesText from '../components/PricesText/PricesText';

class Pricing extends React.Component {
    render() {
        return(
            <div>
                <Page heading="Prices">
                    <PricesText />
                </Page>
            {/* <Container>
                <Col md={{span: 7, offset: 3}}>
                    <br />
                    <br />
                    <PricesCard />
                </Col>
            </Container> */}
            </div>
        );
    }
}

export default Pricing;