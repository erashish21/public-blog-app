
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Projects from './pages/Projects'
import Dashbaord from './pages/Dashbaord'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/dashbaord' element={<Dashbaord/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
