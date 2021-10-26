import { NextPage } from 'next';
import React from 'react';
import { ButtonElement } from '../../components/elements/ButtonElement';
import { AppLayout } from '../../components/layout/AppLayout';
import { ContentLayout } from '../../components/layout/ContentLayout';

const Places: NextPage = () => {
  const places = ['Pomona', 'Yorba Linda', 'Chino Hills'];
  return (
    <AppLayout>
      <>
        <ContentLayout title="My Community" form={<div>Dummy form contents</div>}>
          <div>
            <p className="m-4 mb-0">
              Select your community location to view and monitor the health of your plants. <br />
              If you would like to have your own community garden, our project is open source and we can help with the
              installation process.
            </p>
            <div className="d-flex flex-wrap">
              {places.map((place, index) => (
                <ButtonElement key={index} variant="border" className="m-4">
                  {place}
                </ButtonElement>
              ))}
            </div>
          </div>
        </ContentLayout>
      </>
    </AppLayout>
  );
};

export default Places;
