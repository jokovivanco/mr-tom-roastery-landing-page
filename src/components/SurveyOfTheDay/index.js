import React from 'react'
import { Container, Grid, Box, Typography, Paper } from '@material-ui/core'

import useStyles from './styles'
import CardSurveyOfTheDay from './Card'
import { SOTD_1, SOTD_2, SOTD_3 } from '../../images'

const SurveyOfTheDay = () => {
  const classes = useStyles()

  const images = [
    {
      id: 1,
      image: SOTD_1,
      title: 'Exelsa Banjarnegara'
    },
    {
      id: 2,
      image: SOTD_2,
      title: 'Robusta Banjarnegara'
    },
    {
      id: 3,
      image: SOTD_3,
      title: 'BARA Blend 50%'
    }
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
          <Grid container spacing={2} className={classes.grid}>
            {images.map((image) => (
              <Grid item xs={12} md={4}>
                <CardSurveyOfTheDay key={image.id} image={image.image} title={image.title} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box >
  )
}

export default SurveyOfTheDay
