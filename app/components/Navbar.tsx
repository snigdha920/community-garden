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
      label: 'My community',
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
        fixed="top"
        style={{
          height: '60px',
          backgroundImage: 'linear-gradient(to right, #1CD8D2 0%,  #93EDC7  51%)',
          padding: '0 40px',
          zIndex: 0,
        }}
        className="btn-grad"
      >
        <div>
          <Navbar.Brand href="/">
            <img src="/icons/sapling.svg" width="30" height="30" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
        </div>
       
        <Nav style={{ marginLeft: 'auto' }}>
          {navItems.map((item, index) => {
            return (
              <Nav.Link key={index} href={item.href} style={{ paddingLeft: '30px' }}>
                {item.label}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar>
    </>
  );
};
