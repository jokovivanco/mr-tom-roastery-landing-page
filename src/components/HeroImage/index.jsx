import React from 'react'
import { Container, Grid, Box, Typography, Button } from '@material-ui/core'

import useStyles from './styles'

const HeroImage = () => {
  const classes = useStyles()

  return (
    <div className={classes.section}>
      {/* <div className={classes.toolbar} /> */}
      <Container className={classes.container} maxWidth="md">
        <div className={classes.overlay} />
        <Grid className={classes.content} container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h2">We Provide Better Coffee Quality</Typography>
            <Typography variant="h5">We're not just serving coffees, we also educate you about coffee itself! Feel free to ask us about coffees and all about its qualities and prices</Typography>
            <Box my={3}>
              <Button variant="contained" color="primary">Get coffee</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default HeroImage
