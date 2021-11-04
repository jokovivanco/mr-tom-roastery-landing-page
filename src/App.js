import React, { useState, useEffect } from 'react'
import { CssBaseline, Typography } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import HeroImage from './components/HeroImage'
import Services from './components/Services'
import RoasterTraining from './components/RoasterTraining'
import SupplyRetail from './components/SupplyRetail'
import Franchise from './components/Franchise'
import SurveyOfTheDay from './components/SurveyOfTheDay'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  const [coloredNavbar, setColoredNavbar] = useState(false)

  const handleNavbar = () => {
    if (window.scrollY > 0) {
      setColoredNavbar(true)
    } else {
      setColoredNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavbar)
    return () => {
      window.removeEventListener('scroll', handleNavbar)
    }
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
      <Router>
        <CssBaseline />
        <Navigation coloredNavbar={coloredNavbar} />
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route exact path="/about">
            <About />
            <Contact />
          </Route>
          <Route exact path="*" component={() => <Typography>Not Found 404</Typography>} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
