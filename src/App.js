import React, { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'

import Navigation from './components/Navigation'
import HeroImage from './components/HeroImage'
import Services from './components/Services'
import RoasterTraining from './components/RoasterTraining'
import SupplyRetail from './components/SupplyRetail'
import Franchise from './components/Franchise'
import SurveyOfTheDay from './components/SurveyOfTheDay'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
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


  return (
    <>
      <CssBaseline />
      <Navigation coloredNavbar={coloredNavbar} />
      <HeroImage />
      <Services />
      <RoasterTraining />
      <SupplyRetail />
      <div className='my-background-pattern'>
        <Franchise />
        <SurveyOfTheDay />
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
