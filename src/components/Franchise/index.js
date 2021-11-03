import React from 'react'
import { Container, Grid, Box, Typography, Paper } from '@material-ui/core'

import useStyles from './styles'
import { FC_1, FC_2 } from '../../images'

const Franchise = () => {
  const classes = useStyles()

  return (
    <Box pt={2} pb={8} className={classes.section}>
      <Container maxWidth="md">
        <div>
          <Box my={4}>
            <Typography align="center" variant="h4">Franchise</Typography>
          </Box>
          <Box mb={2}>
            <Grid container justifyContent="space-between" spacing={3}>
              <Grid item xs={12} md={3}>
                <Paper elevation={0} className={classes.paper} square>
                  <img className={classes.image} alt="from unsplash.com" src={FC_1} variant="outlined" />
                </Paper>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="h6" gutterBottom>Warung Banjarnegara</Typography>
                <Typography variant="body1" gutterBottom>
                  For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box mb={2}>
            <Grid container justifyContent="space-between" spacing={3} className={classes.direction}>
              <Grid item xs={12} md={9}>
                <Typography variant="h6" gutterBottom>Kopi Kedai Lanzelot</Typography>
                <Typography variant="body1" gutterBottom>
                  If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper elevation={0} className={classes.paper}>
                  <img className={classes.image} alt="from unsplash.com" src={FC_2} variant="outlined" />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </Box >
  )
}

export default Franchise
