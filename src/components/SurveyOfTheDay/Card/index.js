import React from 'react'
import { Card, CardMedia, CardActions, Typography, Button } from '@material-ui/core'

import useStyles from './styles'

const CardSurveyOfTheDay = ({ image, title }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        alt="image from unsplash.com"
        className={classes.media}
        image={image}
        title={title}
        style={{ position: 'relative' }}
      >
        <div className={classes.overlay} />
        <Typography className={classes.title} variant="subtitle1" align="center">
          {title}
        </Typography>
      </CardMedia>
      <CardActions>
        <Button fullWidth size="medium" variant="contained" className={classes.button}>Vote</Button>
      </CardActions>
    </Card>
  )
}

export default CardSurveyOfTheDay
