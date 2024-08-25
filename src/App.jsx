import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Skills from './Components/Skills/Skills'
import Aboutme from './Components/Aboutme/Aboutme'
import Projects from './Components/Projects/Projects'

let App = () => {
  return (
    <div>
      
   <Navbar/>
  <Body/>
  <Skills/>
  <Aboutme/>
  <Projects/>

    </div>
  )
}

export default App