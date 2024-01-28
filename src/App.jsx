import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'


function App() {

  return (
    <>
    <div className='font-messiri'>

    <Routes>
      <Route exact path='/' element={<Home/>} />

  
    </Routes>
    </div>
    </>
  )
}

export default App
