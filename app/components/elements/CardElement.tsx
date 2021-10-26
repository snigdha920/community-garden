/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

interface CardProps {
  label: string;
  value: string;
  icon: string;
}

export const CardElement: React.FC<CardProps> = ({ label, value, icon }) => {
  return (
    <>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
        <div className="p-1">{label}</div>
        <div className="d-flex align-content-center">
          <div>
            <img src={icon} alt="icon" style={{ width: '65px', height: '65px' }} className="d-inline"></img>
          </div>
          <div className="my-auto">
            <h3 className="d-inline">{value}</h3>
          </div>
        </div>
      </div>
      {/* <Card style={{ width: '20rem',
        // overflow: 'hidden', // this class is important if the child divs also have a border radius
        boxShadow: '0 5px 5px -3px rgba(5, 30, 55, 0.1), 0 3px 15px 2px rgba(5, 30, 55, 0.05)',
      }}>
        <p className="cardLabel">{label}</p>
        <style jsx>{`
            .cardLabel {
                margin: 0px 16px;
            }
        `}
        </style>
        <Card.Body>
          <Row>
            <Col className='d-flex justify-content-center align-content-center'>
              <img src={icon} alt="icon" style={{ width: '65px', height: '65px' }}></img>
            </Col>
            <Col className='d-flex justify-content-left align-content-center'>
              <h3>{value}</h3>
            </Col>
          </Row>
        </Card.Body>
      </Card> */}
    </>
  );
};
