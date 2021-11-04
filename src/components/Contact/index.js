import React from 'react'
import { Container, TextField, Box, Typography, Grid, Button, Icon } from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'

import useStyles from './styles'

const Contact = () => {
  const classes = useStyles()

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box pb={8} className={classes.section} id="contact">
      <div className={classes.toolbar} />
      <div style={{ height: '600px' }}>
        <Box my={4}>
          <Typography align="center" variant="h4">Contact Us</Typography>
        </Box>
        <Container maxWidth="md">
          <div className={classes.subtitle}>
            <Typography variant="body2" component="p" className={classes.direction}>
              I would love to work together with you.
            </Typography>
            <Typography variant="body2" component="p" className={classes.direction}>
              Let's do ours better with our good cooperation.
            </Typography>
          </div>
          <Grid container>
            <Grid item md={3} />
            <Grid item xs={12} md={9}>
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
                  <Grid item xs={12} md={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<Icon>send</Icon>}
                    >
                      Send
                    </Button>
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
