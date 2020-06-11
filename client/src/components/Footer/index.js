import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';

function footer() {
    return (
        <Navbar fixed='sticky-bottom' variant='dark' bg='dark'>
        <Navbar.Brand>Book Finder</Navbar.Brand>
        <a href="https://github.com/r-andrew-dev" className="author">Built By: Rachael Andrew</a>
        </Navbar>

    )
}

export default footer;