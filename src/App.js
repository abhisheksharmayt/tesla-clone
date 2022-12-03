import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import { useGlobalContext } from './globalContext'
const App = () => {
  const {isMenuOpen} = useGlobalContext();
  return (
    <div className='relative'>
      {isMenuOpen && <Menu/>}
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}

export default App