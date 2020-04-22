import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header() {
    return (
        <Jumbotron>
        <h1>Book Finder</h1>
        <h5>Powered by Google Books API and Built with React</h5>
        <h3>Search for and Save Books of Interest</h3>

    </Jumbotron>
    )
}

export default Header;