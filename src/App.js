import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Cart from './components/Cart'
import { useGlobalContext } from './globalContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/Product'
const App = () => {
  const { isMenuOpen } = useGlobalContext();
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      {isMenuOpen && <Menu />}
      <Routes>
        <Route exact path='/' element={<Hero />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/product/:name' element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App