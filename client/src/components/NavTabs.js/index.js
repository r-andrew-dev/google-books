import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap/';


function NavTabs() {
  return (
      <Navbar bg='dark' variant='dark' expand='lg'>
          <Navbar.Brand href='#home'>Book Finder (Powered by Google Books API)</Navbar.Brand>
      <Nav.Link>
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
    </Nav.Link>
    <Nav.Link>
        <Link
          to="/save"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          Saved
        </Link>
    </Nav.Link>
    </Navbar>
  );
}

export default NavTabs;