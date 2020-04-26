import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';

function footer() {
    return (
        <Navbar fixed='sticky-bottom' variant='dark' bg='dark'>
        <Navbar.Brand>Book Finder</Navbar.Brand>
        <Nav.Link className="author">Built By: Rachael Andrew</Nav.Link>
        </Navbar>

    )
}

export default footer;