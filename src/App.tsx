import React from 'react'
import { Routes, Route } from 'react-router'
import Landing from './Landing'
import Contact from './Contact'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App