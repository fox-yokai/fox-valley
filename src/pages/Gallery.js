import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import GallaryCard from '../components/gallaryCard/gallaryCard';

class Gallery extends React.Component {
    render() {
        return (
            <div>
            <Container>
                <Col md={{span: 7, offset: 3}}>
                    <br />
                    <br />
                    <GallaryCard />
                </Col>
            </Container>
            
        </div>
        );
    }
}

export default Gallery;