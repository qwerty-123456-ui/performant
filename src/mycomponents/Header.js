import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import FormControl from 'react-bootstrap/FormControl';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { BrowserRouter as  Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Performant</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        {/* <br /> */}
      </>
    </div>
  );
}

export default Header;
