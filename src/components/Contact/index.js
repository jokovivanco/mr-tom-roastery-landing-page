import React from 'react'
import { Container, TextField, Box, Typography, Grid } from '@material-ui/core'

import useStyles from './styles'

const Contact = () => {
  const classes = useStyles()

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Sent!')
  }

  return (
    <Box pt={2} pb={8} className={classes.section}>
      <div style={{ height: '600px' }}>
        <Box my={4}>
          <Typography align="center" variant="h4">Contact Us</Typography>
        </Box>
        <Container maxWidth="md">
          <Typography variant="body2" component="p" className={classes.direction}>
            I would love to work together with you.
          </Typography>
          <Typography variant="body2" component="p" className={classes.direction}>
            Let's do ours better with our good cooperation.
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={onSubmit}>
                <Grid container spacing={3} className={classes.grid}>
                  <Grid item xs={12} md={12}>
                    <TextField id="name" label="Name" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField id="email" label="Email" type="email" fullWidth />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField id="message" label="Message" multiline minRows={3} variant="outlined" fullWidth />
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box >
  )
}

export default Contact
