import React from 'react'
import { Container, Grid, Box, Typography } from '@material-ui/core'
import { AssignmentOutlined } from '@material-ui/icons'

import useStyles from './styles'
import CardService from './CardService'

const Services = () => {
  const classes = useStyles()

  const services = [
    {
      id: 1,
      title: 'Roaster Training',
      icon: <AssignmentOutlined fontSize="large" />,
      text: 'We train a new people that still fresh in coffee roastery and tell a lot of things about them.',
      textButton: 'Go'
    },
    {
      id: 2,
      title: 'Roaster Training',
      icon: <AssignmentOutlined fontSize="large" />,
      text: 'We train a new people that still fresh in coffee roastery and tell a lot of things about them.',
      textButton: 'Go'
    },
    {
      id: 3,
      title: 'Roaster Training',
      icon: <AssignmentOutlined fontSize="large" />,
      text: 'We train a new people that still fresh in coffee roastery and tell a lot of things about them.',
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
