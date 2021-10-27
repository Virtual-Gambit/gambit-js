import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from '../../../components/Global/Page';
import FooterBar from '../../../components/Global/FooterBar';
import Hero from './Hero';
import Features from './Features';
import CTA from './CTA';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      <Hero />
      <Features />
      <CTA />
      <FooterBar />
    </Page>
  );
}

export default HomeView;
