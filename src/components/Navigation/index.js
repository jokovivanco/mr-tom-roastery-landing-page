import React from 'react'
import { AppBar, Container, Typography, Toolbar, Button, Grid } from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import useStyles from './styles'

const Navigation = ({ coloredNavbar }) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <AppBar color="transparent" className={`${classes.transition} ${coloredNavbar ? classes.coloredNavbar : null}`} elevation={coloredNavbar ? 2 : 0}>
      <Container maxWidth="md">
        <Toolbar className={classes.customToolbar}>
          <HashLink smooth to={'#home'} className={classes.title} style={{ textDecoration: 'none' }}>
            <Typography className={`${coloredNavbar && classes.fontInverted}`} variant="caption">Mr Tom Roastery</Typography>
          </HashLink>
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
                <Button color="primary" variant="contained">Contact Us</Button>
              </HashLink>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar >
  )
}

export default Navigation
