import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import "./navbar.css"
export default function NavComponent(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Hunter APAMSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="https://us6.list-manage.com/survey?u=40df5102d206d3b304e227508&id=403969c2b5">Join Us</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="/resources/mentalhealth">Mental Health</NavDropdown.Item>
              <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item>
              <NavDropdown.Item href="/Newsletter">Newsletter</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}