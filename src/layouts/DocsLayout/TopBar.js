import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Hidden,
  IconButton,
  makeStyles
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import LogoNamed from '../../components/Global/LogoNamed';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: theme.zIndex.drawer + 100
  },
  toolbar: {
    height: 64
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium
  }
}));

function TopBar({ onMobileNavOpen }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <LogoNamed />
          </RouterLink>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
        <Typography
          color="textSecondary"
          variant="h2"
        >
          Help Center
        </Typography>
        <Box
          ml={2}
          flexGrow={1}
        />
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
