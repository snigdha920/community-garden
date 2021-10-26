/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const LandingPage: React.FC = () => {
  return (
    <>
      <Container
        fluid
        style={{
          height: '100vh',
        }}
      >
        <Row>
          <Col className="centerhome">
            <Container>
              <h1>
                Community Garden <br />
                Project
              </h1>
              <div>
                <h2 style={{ paddingTop: '50px' }}>
                  Go to My Community&nbsp;&nbsp;
                  <a href="/my-community">
                    <img src="/icons/next.svg" width="35" alt="arrow"></img>
                  </a>
                </h2>
              </div>
            </Container>
          </Col>
          <Col>
            <img src="/icons/homepage-logo.svg" width="100%" height="100%" alt="homepage-logo"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};
