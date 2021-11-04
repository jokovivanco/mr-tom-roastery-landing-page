import React from 'react'
import { Container, Box, Typography, Grid } from '@material-ui/core'

import HeroImage from '../HeroImage'
import useStyles from './styles'
import { person, mascot } from '../../images'

const Contact = () => {
  const classes = useStyles()

  return (
    <>
      <HeroImage
        rightLogo={mascot}
        text="Hello I'm Mr Tom"
        subText="I'm a professional coffee roaster, I love coffee just like everyone who is visiting my website. If you have any interest with my roaster just contact me below."
      />
      <div className={classes.root}>
        <Box pt={2} pb={8}>
          <Container maxWidth="md">
            <Box my={4}>
              <Typography align="center" variant="h4">My Bio</Typography>
            </Box>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Typography variant="body2" gutterBottom>
                  For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  For writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces the writer to be creative when the sentence appears. There are a number of different ways a writer can use the random sentence for creativity. The most common way to use the sentence is to begin a story. Another option is to include it somewhere in the story. A much more difficult challenge is to use it to end a story. In any of these cases, it forces the writer to think creatively since they have no idea what sentence will appear from the tool.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <img src={person} alt="from unsplash" width="100%" />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  )
}

export default Contact
