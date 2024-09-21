import React from 'react'
import Home from './Pages/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Course from './Pages/Course'
import Faq from './Pages/Faq'
import Login from './Pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/course' element={<Course />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App