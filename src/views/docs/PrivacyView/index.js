import React, { lazy, Suspense } from 'react';
import Page from '../../../components/Global/Page';

const Content = lazy(() => import('./Content.mdx'));

function PrivacyView() {
  return (
    <Page title="Privacy Policy">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default PrivacyView;
