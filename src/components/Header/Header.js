import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container className="text-start pt-2">
                <Navbar.Brand href="#home"><img className="w-25" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="px-2 text-dark text-decoration-none" to="/home">Home</NavLink>
                        <NavLink className="px-2 text-dark text-decoration-none" to="/donation">Donation</NavLink>
                        <NavLink className="px-2 text-dark text-decoration-none" to="/events">Events</NavLink>
                        <NavLink className="px-2 text-dark text-decoration-none" to="/blog">Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
                {/* Buttons here  */}
                <div>
                    <Link to="/register"><Button className="me-2">Register</Button></Link>
                    <Link to="/admin"><Button variant="dark">Admin</Button></Link>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;