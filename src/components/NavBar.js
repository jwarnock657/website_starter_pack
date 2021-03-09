import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const NavigationBar = (props) => {

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#141414"}} variant="dark">
            <Navbar.Brand style={{color: "white"}} href="/">Insert <span style={{ "color": "#ffd000" }}>Name</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav ml-auto">
                    <Nav.Link style={{color: "#ffd000"}} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link style={{color: "#ffd000"}} as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>        
    );
};

export const Footer = () => {
    return (
        <div>
            <div className="phantom"/>
            <Navbar expand="lg" style={{backgroundColor: "black"}} variant="dark" fixed="bottom">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-n</Navbar.Collapse>av">
                    <Navbar.Text>Stick your address here</Navbar.Text>
                    
                    <div className="navbar-nav ml-auto">
                        <Navbar.Text>1234567890 &nbsp;</Navbar.Text>
                        <Navbar.Text><a href="mailto:test@test.com"> email</a></Navbar.Text>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};