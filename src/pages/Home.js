import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HomeCard from '../components/homeCard/homeCard';

class Home extends React.Component {
    render() {
        return (
        <div>
            <Container>
                <Col md={{span: 7, offset: 3}}>
                    <br />
                    <br />
                    <HomeCard />
                </Col>
            </Container>
            
        </div>

        );
    }
}

export default Home;