import React from 'react'

import { Routes,Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </div>
  )
}

export default App
