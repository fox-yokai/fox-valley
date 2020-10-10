import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import King from '../../images/king.jpg';

class GallaryCardLeft extends React.Component {
    render() {
        return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={King} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={King} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card> 
            <Card>
                <Card.Img variant="top" src={King} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>               
            </Card>

        </CardDeck>

        )
    }
}

export default GallaryCardLeft;