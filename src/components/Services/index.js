import React from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core'

import useStyles from './styles'
import CardService from './CardService'
import { box, saveOk, store } from '../../images'

const Services = () => {
  const classes = useStyles()

  const services = [
    {
      id: 1,
      title: 'Roaster Training',
      icon: <img alt="service1" src={saveOk} />,
      text: `It can also be a fun way to surprise others. The database of random sentences.`,
      textButton: 'Go'
    },
    {
      id: 2,
      title: 'Supply & Retail',
      icon: <img alt="service2" src={box} />,
      text: `Sure. We are always looking to expand the database of random sentences.`,
      textButton: 'Go'
    },
    {
      id: 3,
      title: 'Franchise',
      icon: <img alt="service3" src={store} />,
      text: `No, the random sentences in our generator are not computer generated. `,
      textButton: 'Go'
    },
  ]

  return (
    <Box pt={2} pb={8} className={classes.section}>
      <Container maxWidth="md">
        <div>
          <Box my={4}>
            <Typography align="center" variant="h4">Our Services</Typography>
          </Box>
          <Grid container justifyContent="space-between" spacing={3}>
            {services.map(service => (
              <Grid item key={service.id} xs={12} md={4}>
                <CardService title={service.title} icon={service.icon} text={service.text} textButton={service.textButton} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default Services
