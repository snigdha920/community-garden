/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Col } from 'react-bootstrap';
import { CardElement } from '../elements/CardElement';
import { TextIcon } from '../TextIcon';
import { BoxLayout } from './BoxLayout';
import { GridLayout } from './GridLayout';
import { MDBSwitch } from 'mdb-react-ui-kit';

interface DashBoardLayoutProps {
  place: string;
}

export const DashboardLayout: React.FC<DashBoardLayoutProps> = ({ place }) => {
  const locationCharacteristics: Array<{ card: React.ReactElement }> = [
    {
      card: <CardElement label="Sunlight" value="Excellent" icon="/icons/sun.png"></CardElement>,
    },
    {
      card: <CardElement label="Temperature" value="30 °C" icon="/icons/thermometer.png"></CardElement>,
    },
    {
      card: <CardElement label="Humidity" value="50%" icon="/icons/humidity.png"></CardElement>,
    },
  ];

  const cropDataTableHeaders = ['Name', 'Soil Moisture', 'Water pump status'];
  const cropData: Array<{ name: string; soilMoisture: string; waterPumpStatus: React.ReactElement }> = [
    {
      name: 'Apple',
      soilMoisture: '20',
      // waterPumpStatus: <ButtonElement>TODO</ButtonElement>,
      waterPumpStatus: <MDBSwitch id='flexSwitchCheckDefault'></MDBSwitch>,
    },
    {
      name: 'Bananas',
      soilMoisture: '22',
      // waterPumpStatus: <ButtonElement>TODO</ButtonElement>,
      waterPumpStatus: <MDBSwitch id='flexSwitchCheckDefault'></MDBSwitch>,
    },
  ];

  return (
    <>
      <BoxLayout className="mt-5">
        <>
          <div style={{ minHeight: '80px' }}>
            <TextIcon
              icon={<img src="/icons/analytics.png" width="50px" height="50px" alt="pin" />}
              className="py-2"
              alignIcon="left"
              alignText="left"
            >
              Data collected from sensors placed at your location. This data is common for all your crops.
            </TextIcon>
          </div>
          <GridLayout className="mt-4">
            {locationCharacteristics.map((item, index) => {
              return (
                <Col key={index} className="mb-4">
                  {item.card}
                </Col>
              );
            })}
          </GridLayout>
        </>
      </BoxLayout>
      <BoxLayout className="mt-5">
        <>
          <div style={{ minHeight: '80px' }}>
            <TextIcon
              icon={<img src="/icons/plant.png" width="50px" height="50px" alt="pin" />}
              className="py-2"
              alignIcon="left"
              alignText="left"
            >
              Data collected about your crops from sensors placed at your location. This data is crop specific.
            </TextIcon>
          </div>

          <GridLayout className="mt-4">
            <>
              {cropDataTableHeaders.map((header, index) => {
                return <div key={index}><b>{header}</b></div>;
              })}
            </>
            <div className="h-1 w-100 border-top my-2"></div>
          </GridLayout>

          {cropData.map((data, index) => {
            return (
              <GridLayout className="my-1" key={index}>
                <Col><i>{data.name as string}</i></Col>
                <Col>{data.soilMoisture as string}</Col>
                <Col>{data.waterPumpStatus}</Col>
                <div className="h-1 w-100 border-top my-2"></div>
              </GridLayout>
            );
          })}
        </>
      </BoxLayout>
    </>
  );
};
