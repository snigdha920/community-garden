/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { ButtonElement } from '../../components/elements/ButtonElement';
import { AddCommunityForm } from '../../components/forms/AddCommunityForm';
import { AppLayout } from '../../components/layout/AppLayout';
import { ContentLayout } from '../../components/layout/ContentLayout';
import { GridLayout } from '../../components/layout/GridLayout';
import { TextIcon } from '../../components/TextIcon';

const Places: NextPage = () => {
  const places = ['Pomona', 'Yorba Linda', 'Chino Hills'];
  const router = useRouter();
  return (
    <AppLayout>
      <>
        <ContentLayout title="My Community" form={<AddCommunityForm />} buttonLabel="Add a community">
          <div>
            <TextIcon
              icon={<img src="/icons/planting.png" width="50px" height="50px" alt="planting" />}
              className="pt-3 pb-2"
              alignIcon="left"
              alignText="left"
            >
              <>
                {' '}
                Select your community location to view and monitor the health of your plants. If you would like to have
                your own community garden, our project is open source and we can help with the installation process.
              </>
            </TextIcon>

            <GridLayout className="mt-4">
              {places.map((place, index) => {
                return (
                  <div key={index} style={{ height: '115px' }} className="mb-3">
                    <ButtonElement
                      variant="border"
                      className="h-100"
                      layout="stretch"
                      functions={{ onClick: () => router.push(`/my-community/${place}/dashboard`) }}
                      fontSize="28px"
                      icon={<img src="/icons/google-maps.png" width="40px" height="40px" />}
                    >
                      {place}
                    </ButtonElement>
                  </div>
                );
              })}
            </GridLayout>
          </div>
        </ContentLayout>
      </>
    </AppLayout>
  );
};

export default Places;
