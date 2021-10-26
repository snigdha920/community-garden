import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { AppLayout } from '../../../components/layout/AppLayout';
import { ContentLayout } from '../../../components/layout/ContentLayout';

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
          <div></div>
        </ContentLayout>
      </>
    </AppLayout>
  );
};

export default Places;
