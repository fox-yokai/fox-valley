import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../images/logo-banner.png';
import { TiSocialTwitter } from "react-icons/ti";
import { IconContext } from "react-icons";

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
                    <Nav.Link href="/tos">Terms of Service</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    <Nav>
                        <IconContext.Provider value={{ color: "blue", size: "1.5em" , className: "react-icons" }}>
                            <Nav.Link href="https://twitter.com/f0xvalley" target="_blank">
                                <TiSocialTwitter />
                            </Nav.Link>
                        </IconContext.Provider>      
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}

export default NavComponent;