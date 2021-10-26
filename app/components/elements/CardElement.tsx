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
      <div className="shadow-sm p-3 bg-body rounded">
        <div className="pb-1">{label}</div>
        <div className="d-flex align-content-center">
          <div>
            <img src={icon} alt="icon" style={{ width: '65px', height: '65px' }} className="d-inline"></img>
          </div>
          <div className="my-auto ps-3">
            <h3 className="d-inline">{value}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
