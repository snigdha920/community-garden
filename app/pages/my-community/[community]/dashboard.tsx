import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { AppLayout } from '../../../components/layout/AppLayout';
import { ContentLayout } from '../../../components/layout/ContentLayout';
import { DashboardLayout } from '../../../components/layout/DashboardLayout';
import { TextIcon } from '../../../components/TextIcon';

const Places: NextPage = () => {
  const places = ['Pomona', 'Yorba Linda', 'Chino Hills'];
  const router = useRouter();
  const community = router.query.community as string;
  return (
    <AppLayout>
      <>
        <ContentLayout
          title={community}
          form={<div>Dummy form contents</div>}
          variant="hideContainer"
          buttonLabel="Add a crop"
        >
          <div>
            Hello
          </div>
        </ContentLayout>
      </>
    </AppLayout>
  );
};

export default Places;
