/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from '../../styles/styles';
import { CardElement } from '../elements/CardElement';
import { TextIcon } from '../TextIcon';
import { BoxLayout } from './BoxLayout';

interface DashBoardLayoutProps {
  place: string;
}

export const DashboardLayout: React.FC<DashBoardLayoutProps> = ({ place }) => {
  const locationCharacteristics: Array<{ card: React.ReactElement }> = [
    {
      card: (
        <CardElement
          label="Sunlight"
          value="Excellent"
          icon="/icons/sun.png"
        ></CardElement>
      ),
    },
    {
      card: (
        <CardElement
          label="Temperature"
          value="30 °C"
          icon="/icons/temperature.png"
        ></CardElement>
      ),
    },
    {
      card: (
        <CardElement
          label="Humidity"
          value="50%"
          icon="/icons/humidity.png"
        ></CardElement>
      ),
    },
  ];

  return (
    <>
      <BoxLayout className="mt-5">
        <>
          <div style={{ minHeight: '80px'}}>
            <TextIcon
              icon={<img src="/icons/analytics.png" width="20px" height="20px" alt="pin" />}
              className="px-4 pt-3 pb-2"
              alignIcon="left"
              alignText="left"
              iconSize="small"
            >
              <b>Data</b>
            </TextIcon>
          </div>
          <Container className='mb-4'>
            <Row>
              {locationCharacteristics.map((item, index) => {
                return <Col key={index}>{item.card}</Col>;
              })}
            </Row>
          </Container>
        </>
      </BoxLayout>
    </>
  );
};
