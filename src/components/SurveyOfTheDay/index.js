import React from 'react'
import { Container, Grid, Box, Typography, Paper } from '@material-ui/core'

import CardSurveyOfTheDay from './Card'
import useStyles from './styles'

const SurveyOfTheDay = () => {
  const classes = useStyles()
  const images = [
    'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
    'https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80',
    'https://images.unsplash.com/photo-1606486544554-164d98da4889?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
  ]

  return (
    <Box pt={2} pb={8} className={classes.section}>
      <Container maxWidth="md">
        <Paper className={classes.paper} elevation={3}>
          <Box my={4}>
            <Typography align="center" variant="h4">Survey of The Day</Typography>
          </Box>
          <Box mb={6}>
            <Typography gutterBottom align="center" variant="body1">
              Yes! Feel free to use any of the random sentences for any project that you may be doing.
            </Typography>
          </Box>
          <Box my={6}>
            <Typography className={classes.title} gutterBottom align="center" variant="h2">
              8,112 people has voted
            </Typography>
          </Box>
          <Grid container spacing={2} style={{ padding: '0 50px' }}>
            <Grid item xs={12} md={4}>
              <CardSurveyOfTheDay image={images[0]} title="Exelsa Banjarnegara" />
            </Grid>
            <Grid item xs={12} md={4}>
              <CardSurveyOfTheDay image={images[1]} title="Exelsa Banjarnegara" />
            </Grid>
            <Grid item xs={12} md={4}>
              <CardSurveyOfTheDay image={images[2]} title="Exelsa Banjarnegara" />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box >
  )
}

export default SurveyOfTheDay
