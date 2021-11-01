import React from 'react'
import { Container, Box, Typography } from '@material-ui/core'

import useStyles from './styles'
import CardSupplyRetail from './Card'
import { SR_1, SR_2, SR_3, SR_4 } from '../../images'


const SupplyRetail = () => {
  const classes = useStyles()

  const contents = [
    {
      id: 1,
      title: 'Decade Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee. Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: SR_1
    },
    {
      id: 2,
      title: 'Quirk Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee. Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: SR_2
    },
    {
      id: 3,
      title: 'Cosplay Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee . Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: SR_3
    },
    {
      id: 4,
      title: 'Costume Coffee',
      text: 'Coffee that can henshin to be something else then has fullpower after it. Gain some muscles on their body and spreading smells of coffee. Well, they can service you in a cosplay theme and henshin your coffee into a theme that\'s relatives.',
      image: SR_4
    }
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
