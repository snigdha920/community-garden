import { NextPage } from 'next';
import React from 'react';
import { AppLayout } from '../../components/layout/AppLayout';
import { ContentLayout } from '../../components/layout/ContentLayout';

const Places: NextPage = () => {
  return (
    <AppLayout>
      <>
        <ContentLayout title="Places" onBtnClick={() => console.log('clicked!')} />
      </>
    </AppLayout>
  );
};

export default Places;
