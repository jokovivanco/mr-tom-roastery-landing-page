import React from 'react'
import { AppBar, Container, Typography, Toolbar, Button } from '@material-ui/core'

import useStyles from './styles'

const Navigation = ({ coloredNavbar }) => {
  const classes = useStyles()

  return (
    <AppBar color="transparent" className={coloredNavbar ? classes.coloredNavbar : null} elevation={coloredNavbar > 465 ? 2 : 0}>
      <Container maxWidth="md">
        <Toolbar className={classes.customToolbar}>
          <Typography className={`${classes.title} ${coloredNavbar && classes.fontInverted}`} variant="caption">Mr Tom Roastery</Typography>
          <Button color="primary" variant="contained">Get Coffee</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation
