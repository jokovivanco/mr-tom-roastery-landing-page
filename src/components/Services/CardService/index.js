import React from 'react'
import { Card, CardHeader, CardContent, Box, Typography, CardActions, Button } from '@material-ui/core'

import useStyles from './styles'

const CardService = ({ title, icon, text, textButton }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader title={title} />
      <CardContent className={classes.content}>
        <Box my={3}>
          {icon}
        </Box>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button fullWidth size="small" color="primary" variant="contained">
          {textButton}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardService
