import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'

import useStyles from './styles'
import CardSupplyRetail from './Card'


const SupplyRetail = () => {
  const classes = useStyles()

  const contents = [
    {
      id: 1,
      title: 'Decade Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee. Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: 'https://images.unsplash.com/photo-1590411914259-ab083f58d04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80'
    },
    {
      id: 2,
      title: 'Quirk Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee. Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: 'https://images.unsplash.com/photo-1605495984007-ccb84be932b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 3,
      title: 'Cosplay Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee . Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: 'https://images.unsplash.com/photo-1568417847905-1ba5effadab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 4,
      title: 'Costume Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee. Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: 'https://images.unsplash.com/photo-1609687532637-967130b8f32f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 5,
      title: 'Star Wars Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee. Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: 'https://images.unsplash.com/photo-1478479474071-8a3014d422c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
    },
  ]

  return (
    <Box pt={2} pb={8} className={classes.section}>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography align="center" variant="h4">Supply & Retail</Typography>
        </Box>
        <Box pb={3} className={classes.horizontal}>
          {contents.map(content => (
            <CardSupplyRetail key={content.id} title={content.title} text={content.text} image={content.image} />
          ))}
        </Box>
      </Container>
    </Box >
  )
}

export default SupplyRetail
