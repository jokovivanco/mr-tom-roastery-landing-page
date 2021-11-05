import React from 'react'
import { AppBar, Container, Typography, Toolbar, Button, Grid, Hidden, IconButton, Menu, MenuItem } from '@material-ui/core'
import { MenuRounded } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import useStyles from './styles'

const Navigation = ({ coloredNavbar }) => {
  const classes = useStyles()
  const location = useLocation()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar color="transparent" className={`${classes.transition} ${coloredNavbar ? classes.coloredNavbar : null}`} elevation={coloredNavbar ? 2 : 0}>
      <Container maxWidth="md">
        <Toolbar className={classes.customToolbar}>
          <HashLink smooth to={'#home'} className={classes.title} style={{ textDecoration: 'none' }}>
            <Typography className={`${coloredNavbar && classes.fontInverted}`} variant="caption">Mr Tom Roastery</Typography>
          </HashLink>
          <Hidden xsDown>
            <Grid container spacing={3} className={classes.grid}>
              <Grid item component={Link} to="/" className={classes.gridItem}>
                <HashLink smooth to="/#home" style={{ textDecoration: 'none' }} >
                  <Button color="primary" className={location.pathname === '/' ? classes.active : null}>Home</Button>
                </HashLink>
              </Grid>
              <Grid item component={Link} to="/about" className={classes.gridItem}>
                <HashLink smooth to={'/about#home'} style={{ textDecoration: 'none' }} >
                  <Button color="primary" className={location.pathname === '/about' ? classes.active : null}>About</Button>
                </HashLink>
              </Grid>
              <Grid item>
                <HashLink smooth to={location.pathname === '/about' ? '/about#contact' : '#contact'} style={{ textDecoration: 'none' }}>
                  <Button color="primary" variant="contained" size="small">Contact Us</Button>
                </HashLink>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden smUp>
            <IconButton color="primary" onClick={handleClick} aria-controls="mobile-menu">
              <MenuRounded fontSize="large" />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/about">About</MenuItem>
            </Menu>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Navigation
