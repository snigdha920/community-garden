import { NextPage } from 'next';
import React from 'react';
import { ButtonElement } from '../../components/elements/ButtonElement';
import { AppLayout } from '../../components/layout/AppLayout';
import { ContentLayout } from '../../components/layout/ContentLayout';
import { TextIcon } from '../../components/TextIcon';

const Places: NextPage = () => {
  const places = ['Pomona', 'Yorba Linda', 'Chino Hills'];
  return (
    <AppLayout>
      <>
        <ContentLayout title="My Community" form={<div>Dummy form contents</div>}>
          <div>
            <TextIcon
              icon={<img src="/icons/planting.png" width="70px" height="70px" />}
              className="px-4 pt-3 pb-2"
              alignIcon="left"
            >
              <>
                {' '}
                Select your community location to view and monitor the health of your plants. If you would like to have
                your own community garden, our project is open source and we can help with the installation process.
              </>
            </TextIcon>

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
