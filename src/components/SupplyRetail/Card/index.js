import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

import useStyles from './styles'

const CardSupplyRetail = ({ image, title, text }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent className={classes.wrap}>
        <Typography align="center" gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardSupplyRetail
