import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../images/logo-banner.png';

class NavComponent extends React.Component {
    render() {
        return (
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">
                        <img
                            alt="fox valley logo"
                            src={Logo}
                            className="d-inline-block align-top"
                            height="50"
                        />{' '}
                       </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/pricing">Prices</Nav.Link>
                    <Nav.Link href="/tos">Terms of Serice</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default NavComponent;