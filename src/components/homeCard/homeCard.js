import React from 'react';
import { Card } from 'react-bootstrap';
import Logo from '../../images/logo.PNG';

class HomeCard extends React.Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Img variant='top' src={Logo} />
                    <Card.Title>Fox Valley Custom Plushes</Card.Title>
                    <Card.Text>
                    <p>Lorem ipsum dolor sit amet, facer efficiantur deterruisset pri id, augue dicit offendit pri te, at eros mentitum accusamus usu. Case omnes torquatos no mea. Nonumes deleniti est id. Ut pro ipsum tractatos appellantur, an ius perfecto philosophia. At sit postea postulant, ei vis atqui alienum definitiones.
                    </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HomeCard;