/* eslint-env mocha */
/* eslint-disable max-len */
import React from 'react';
import {
  renderWithStore,
} from '../test-utils';

import HomeView from '../../views/public/HomeView';
import Features from '../../views/public/HomeView/Features';
import Hero from '../../views/public/HomeView/Hero';
import CTA from '../../views/public/HomeView/CTA';

import Error404View from '../../views/public/Error404View';

describe('VIEWS / PUBLIC', () => {
  describe('FOLDER: HomeView', () => {
    it.skip('renders a <HomeView/> component with expected props', async () => {
      renderWithStore(
        <HomeView />
      );
    });
    it('renders a <Features/> component with expected props', async () => {
      renderWithStore(
        <Features />
      );
    });
    it.skip('renders a <Hero/> component with expected props', async () => {
      renderWithStore(
        <Hero />
      );
    });
    it.skip('renders a <CTA/> component with expected props', async () => {
      renderWithStore(
        <CTA />
      );
    });
  });
  describe('other views', () => {
    it.skip('renders a <Error404View/> component with expected props', async () => {
      renderWithStore(
        <Error404View />
      );
    });
  });
});
