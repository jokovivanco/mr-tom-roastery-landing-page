import React from 'react'
import { Container, Box, Typography, useTheme } from '@material-ui/core'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import useStyles from './styles'
import CardSupplyRetail from './Card'
import { SR_1, SR_2, SR_3, SR_4 } from '../../images'


const SupplyRetail = (props) => {
  const classes = useStyles()
  const theme = useTheme()

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

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
          <Carousel responsive={responsive}>
            {contents.map(content => (
              <CardSupplyRetail key={content.id} title={content.title} text={content.text} image={content.image} />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box >
  )
}

export default SupplyRetail
