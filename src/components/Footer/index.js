import React from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core'

import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <Box pt={2} pb={8} className={classes.section}>
      <Container maxWidth="md">
        <div>
          <Box my={4}>
            <Typography align="center" variant="h4">Thanks for Coming</Typography>
          </Box>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="h6" gutterBottom>Role</Typography>
              <Typography variant="body2" gutterBottom>UI / UX Designer - Firdaus</Typography>
              <Typography variant="body2" gutterBottom>Developer - Joko P</Typography>
              <Typography variant="body2" gutterBottom>Frontman - Windi / MrTom</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="h6" gutterBottom>Instagram</Typography>
              <Typography variant="body2" gutterBottom>@ef_ferdaus</Typography>
              <Typography variant="body2" gutterBottom>@jokovivanco</Typography>
              <Typography variant="body2" gutterBottom>@windi_yulianto93</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="h6" gutterBottom>Personal Website</Typography>
              <Typography variant="body2" gutterBottom>None of those in the internet</Typography>
              <Typography variant="body2" gutterBottom>Ambiguity web</Typography>
              <Typography variant="body2" gutterBottom>Every webs in the internet</Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box >
  )
}

export default Footer
