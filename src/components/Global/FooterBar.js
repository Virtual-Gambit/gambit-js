import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    '& dt': {
      marginTop: theme.spacing(2)
    }
  }
}));

const companyOptions = [
  {
    title: 'Company',
    items: [
      {
        name: 'Privacy Policy',
        link: '/docs/privacy'
      },
      {
        name: 'Terms & Conditions',
        link: '/docs/terms'
      }
    ]
  }
];

function FooterBar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Box my={3}>
          <Divider />
        </Box>
        <Grid
          container
          spacing={3}
          component="dl"
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
          >
            <Typography
              variant="h3"
              color="textPrimary"
            >
              Gambit
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <Link
              component={RouterLink}
              to="/docs"
              variant="h4"
              color="textPrimary"
            >
              Visit Help Center
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            {companyOptions.map((section) => (
              <>
                <Box>
                  <Typography
                    variant="h4"
                    color="textPrimary"
                    style={{ marginBottom: 10 }}
                  >
                    {`${section.title}`}
                  </Typography>
                </Box>
                {section.items.map((item) => (
                  <Box key={item.name}>
                    <Typography>
                      <Link
                        component={RouterLink}
                        to={item.link}
                        variant="h6"
                        color="textPrimary"
                      >
                        {item.name}
                      </Link>
                    </Typography>
                  </Box>
                ))}
              </>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
          >
            <Box p={1}>
              <Typography
                variant="body4"
                color="textPrimary"
              >
                © 2020 Samy Inc.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

FooterBar.propTypes = {
  className: PropTypes.string
};

export default FooterBar;
