/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export const NavBar: React.FC = () => {
  return (
    <>
      <Navbar
        fixed="top"
        style={{
          padding: 2,
          height: '50px',
          backgroundImage: 'linear-gradient(to right, #1CD8D2 0%, #93EDC7  51%, #1CD8D2  100%)',
        }}
      >
        <div style={{ marginLeft: 20 }}>
          <Navbar.Brand href="/">
            <img src="/icons/sapling.svg" width="30" height="30" className="d-inline-block align-top" alt="logo" />
          </Navbar.Brand>
        </div>
        {/* Figure out the font */}
        <Nav style={{ marginLeft: 'auto', marginRight: 15 }}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/places">My Community</Nav.Link>
          <Nav.Link href="#AboutTheProjectSection">About</Nav.Link>
          <Nav.Link href="#ContactUsSection">Contact us</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

//  .btn-grad {background-image: linear-gradient(to right, #1CD8D2 0%, #93EDC7  51%, #1CD8D2  100%)}
//  .btn-grad {
//     margin: 10px;
//     padding: 15px 45px;
//     text-align: center;
//     text-transform: uppercase;
//     transition: 0.5s;
//     background-size: 200% auto;
//     color: white;
//     box-shadow: 0 0 20px #eee;
//     border-radius: 10px;
//     display: block;
//   }

//   .btn-grad:hover {
//     background-position: right center; /* change the direction of the change here */
//     color: #fff;
//     text-decoration: none;
//   }
