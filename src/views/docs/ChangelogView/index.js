import React, { lazy, Suspense } from 'react';
import Page from '../../../components/Global/Page';

const Content = lazy(() => import('./Content.mdx'));

function ChangelogView() {
  return (
    <Page title="Changelog">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default ChangelogView;
