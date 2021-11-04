import React from 'react'
import { Container, Grid, Box, Typography, Button } from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'

import useStyles from './styles'
import { logo, heroImage } from '../../images'
import { useLocation } from 'react-router-dom'

const HeroImage = ({ image, containerStyle, rightLogo, text, subText }) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <div className={classes.section} style={{
      backgroundImage: `url(${image ? image : heroImage})`,
      ...containerStyle
    }} id="home">
      {/* <div className={classes.toolbar} /> */}
      <Container className={classes.container} maxWidth="md">
        <div className={classes.overlay} />
        <Grid className={classes.content} spacing={2} container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={8} className={classes.grid}>
            {location.pathname === '/' && (
              <img src={logo} alt="mrtomroastery logo" style={{ marginTop: '70px' }} className={classes.logo} />
            )}
            <Typography variant="h2">{text || 'We Provide Better Coffee Quality'}</Typography>
            <Typography variant="h6">
              {subText || `We're not just serving coffees, we also educate you about coffee itself! Feel free to ask us about coffees and all about its qualities and prices`}
            </Typography>
            <Box my={3}>
              {location.pathname === '/' ? (
                <HashLink smooth to="/#services" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">See Our Services</Button>
                </HashLink>
              ) : (
                <HashLink smooth to="/about#contact" style={{ textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">Contact Me</Button>
                </HashLink>
              )}
            </Box>
          </Grid>
          {rightLogo && (
            <Grid justifyContent="center" alignItems="center" item xs={12} md={4}>
              <img src={rightLogo} alt="own logo" width="100%" />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}

export default HeroImage
