import React from 'react'
import { Container, Box, Typography, useTheme } from '@material-ui/core'
import Carousel from 'react-grid-carousel'

import useStyles from './styles'
import CardSupplyRetail from './Card'
import { SR_1, SR_2, SR_3, SR_4 } from '../../images'

const MyDot = ({ isActive }) => {
  const theme = useTheme()

  return (
    <span
      style={{
        display: 'inline-block',
        borderRadius: '50%',
        height: isActive ? '8px' : '5px',
        width: isActive ? '8px' : '5px',
        background: theme.palette.primary.main,
        marginTop: '20px'
      }}
    ></span>
  )
}


const SupplyRetail = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  // const matches = [useMediaQuery(theme.breakpoints.down('xs')), useMediaQuery(theme.breakpoints.down('sm'))]
  // const matchXsAndSm = matches[0] || matches[1]

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
    <Box pb={8} className={classes.section}>
      <div className={classes.toolbar} />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography align="center" variant="h4">Supply & Retail</Typography>
        </Box>
        <Box pb={3}>
          <Carousel cols={3} rows={1} loop autoplay={3000} dot={MyDot} showDots={true}>
            {contents.map(content => (
              <Carousel.Item key={content.id}>
                <CardSupplyRetail title={content.title} text={content.text} image={content.image} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box >
  )
}

export default SupplyRetail
