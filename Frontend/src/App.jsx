import React from 'react'

import { Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Searchpage from './pages/Searchpage'
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Searchpage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
