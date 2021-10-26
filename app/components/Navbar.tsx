/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavBar: React.FC = () => {
  const navItems: Array<{ label: string; href: string }> = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'My Community',
      href: '/my-community',
    },
    {
      label: 'About',
      href: '/#AboutTheProjectSection',
    },
    {
      label: 'Contact us',
      href: '/#ContactUsSection',
    },
  ];
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        style={{
          height: '60px',
          backgroundImage: 'linear-gradient(to right, #1CD8D2 0%,  #93EDC7  51%)',
          padding: '0 40px',
          zIndex: 10,
        }}
        className="btn-grad"
      >
        <Navbar.Brand href="/">
          <img src="/icons/sapling.svg" width="30" height="30" className="d-inline-block align-top " alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          id="responsive-navbar-nav"
          style={{
            height: '60px',
            border: 'none',
          }}
        />
        <Navbar.Collapse style={{ backgroundImage: 'linear-gradient(to right, #1CD8D2 0%,  #93EDC7  51%)' }}>
          <Nav className="ms-auto">
            {navItems.map((item, index) => {
              return (
                <Nav.Link key={index} href={item.href} className="ps-4">
                  {item.label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
