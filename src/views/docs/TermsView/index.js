import React, { lazy, Suspense } from 'react';
import Page from '../../../components/Global/Page';

const Content = lazy(() => import('./Content.mdx'));

function TermsView() {
  return (
    <Page title="Terms & Conditions">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default TermsView;
