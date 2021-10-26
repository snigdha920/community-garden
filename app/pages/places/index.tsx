import { NextPage } from 'next';
import React from 'react';
import { AppLayout } from '../../components/layout/AppLayout';
import { ContentLayout } from '../../components/layout/ContentLayout';

const Places: NextPage = () => {
  return (
    <AppLayout>
      <>
        <ContentLayout />
      </>
    </AppLayout>
  );
};

export default Places;
