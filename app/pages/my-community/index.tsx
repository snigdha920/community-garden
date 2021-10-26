import { NextPage } from 'next';
import React from 'react';
import { ButtonElement } from '../../components/elements/ButtonElement';
import { AppLayout } from '../../components/layout/AppLayout';
import { ContentLayout } from '../../components/layout/ContentLayout';

const Places: NextPage = () => {
  return (
    <AppLayout>
      <>
        <ContentLayout title="Places" form={<div>Dummy form contents</div>}>
          <ButtonElement variant="border">Dummy</ButtonElement>
        </ContentLayout>
      </>
    </AppLayout>
  );
};

export default Places;
