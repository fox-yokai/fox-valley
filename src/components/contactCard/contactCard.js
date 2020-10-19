import React from 'react';
import { Card } from 'react-bootstrap';


class ContactCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Contact</Card.Title>
                    <Card.Text>
                    <p>Interested in commissioning a custom handmade plush from us or have any questions? 
                    </p>
                    <p>
                        Please email <a href="mailto:axel@foxvalley.studio?subject=Inquiry%20From%20Website">axel@foxvalley.studio</a>
                    </p>
                    <br />
                    <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default ContactCard;