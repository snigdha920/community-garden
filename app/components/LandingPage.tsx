/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const LandingPage: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Container fluid className="vh-100">
        <Row>
          <Col className="centerhome">
            <Container>
              <h1>
                Community Garden <br />
                Project
              </h1>
              <div>
                <h2 style={{ paddingTop: '50px', cursor: 'pointer' }} onClick={() => router.push('/my-community')}>
                  Go to My Community&nbsp;&nbsp;
                  <a href="/my-community">
                    <img src="/icons/next.svg" width="35" alt="arrow"></img>
                  </a>
                </h2>
              </div>
            </Container>
          </Col>
          {/* Logo is visible on medium screen sizes and above */}
          <Col className="d-none d-md-block">
            <img src="/icons/homepage-logo.svg" width="100%" height="100%" alt="homepage-logo"></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};
