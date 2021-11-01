import React from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core'
import Masonry from 'react-masonry-css'

import useStyles from './styles'
import { RT_1, RT_2, RT_3, RT_4 } from '../../images'

const RoasterTraining = () => {
  const classes = useStyles()

  const sources = [RT_1, RT_2, RT_3, RT_4]

  return (
    <Box pt={2} pb={8} className={classes.section}>
      <Container maxWidth="md">
        <div>
          <Box my={4}>
            <Typography align="center" variant="h4">Roaster Training</Typography>
          </Box>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={12} md={6}>
              <Masonry
                breakpointCols={2}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {sources.map((source, i) => (
                  <img width="100%" height={i === 0 || i === 3 ? '300px' : '150px'} src={source} alt="source from unsplash" key={i} />
                ))}
              </Masonry>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" gutterBottom>
                I’m a professional copywriter, content designer and content strategist with nearly 20 years' experience. I’ve written everything you can imagine for huge brands like Adobe, PayPal, Grab, Afterpay, Curtin University, The Perth Mint, and many, many more.
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom>
                My clients keep coming back because I deliver results. I’m not just talking good writing, but the right messages to the right people at the right time. I deliver above-target return on investment, time and again.
              </Typography>
              <br />
              <Typography variant="body1" gutterBottom>
                But my real joy? Helping others do what I do. Supporting young and aspiring writers as they discover all the wonderful nuances of a career in content.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box >
  )
}

export default RoasterTraining
