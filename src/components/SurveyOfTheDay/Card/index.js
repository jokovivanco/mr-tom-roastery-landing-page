import React from 'react'
import { Card, CardMedia, CardActions, Typography, Button, Paper } from '@material-ui/core'

import useStyles from './styles'

const CardSurveyOfTheDay = ({ image, title }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={0}>
      <div className={classes.card}>
        <img src={image} alt="coffee beans" className={classes.image} />
        <Typography variant="subtitle1" className={classes.caption}>{title}</Typography>
        <Button fullWidth color="primary" className={classes.button} variant="contained">Vote</Button>
      </div>
    </Paper>
  )
}

export default CardSurveyOfTheDay
