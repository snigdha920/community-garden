import React from 'react';
import { Styles } from '../styles/styles';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export const NavBar: React.FC = () => {
  return (
    <>
      <Navbar fixed="top" style={{padding: 2 }}>
        <div style={{ marginLeft: 20 }}>
          <Navbar.Brand href="#home">
            <img src="/icons/sapling.svg" width="30" height="30" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
        </div>
        {/* Figure out the font */}
        <Nav style={{ marginLeft: 'auto', marginRight: 15 }}>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">My Community</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact us</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
