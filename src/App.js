import React, { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import Navigation from './components/Navigation'
import HeroImage from './components/HeroImage'
import Services from './components/Services'
import RoasterTraining from './components/RoasterTraining'
import SupplyRetail from './components/SupplyRetail'
import Franchise from './components/Franchise'
import SurveyOfTheDay from './components/SurveyOfTheDay'
import Contact from './components/Contact'
import Footer from './components/Footer'

import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const [coloredNavbar, setColoredNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const scrollTop = e.target.documentElement.scrollTop

      setColoredNavbar(scrollTop)
    })
    window.removeEventListener('scroll', (e) => {
      console.log('removed')
    })
  }, [])

  const theme = createTheme({
    palette: {
      primary: {
        light: '#E0C097',
        main: '#B85C38',
        dark: '#5C3D2E'
      },
      background: {
        default: '#2D2424'
      }
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation coloredNavbar={coloredNavbar} />
      <HeroImage />
      <div className='my-background-pattern'>
        <div className={classes.pattern1} />
        <div className={classes.pattern2} />
        <Services />
      </div>
      <div className='my-background-pattern'>
        <div className={classes.pattern3} />
        <div className={classes.pattern4} />
        <RoasterTraining />
        <SupplyRetail />
        <Franchise />
        <SurveyOfTheDay />
      </div>
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
