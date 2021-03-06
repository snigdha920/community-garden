import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { AddCommunityForm } from '../../../components/forms/AddCommunityForm';
import { AppLayout } from '../../../components/layout/AppLayout';
import { ContentLayout } from '../../../components/layout/ContentLayout';
import { DashboardLayout } from '../../../components/layout/DashboardLayout';

const Places: NextPage = () => {
  const places = ['Pomona', 'Yorba Linda', 'Chino Hills'];
  const router = useRouter();
  const community = router.query.community as string;
  return (
    <AppLayout>
      <>
        <ContentLayout title={community} form={<AddCommunityForm />} variant="hideContainer" buttonLabel="Add a crop">
          <div>
            <DashboardLayout place={community}></DashboardLayout>
          </div>
        </ContentLayout>
      </>
    </AppLayout>
  );
};

export default Places;
