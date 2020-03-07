import React from 'react'
import './App.scss'

import Toolbar from './components/Toolbar/Toolbar'
import Banner from './components/Banner/Banner'
import Calendar from './components/Calendar/Calendar'
import About from './components/About/About'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Banner />
      <Calendar />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
