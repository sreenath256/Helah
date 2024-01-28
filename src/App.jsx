import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Collection from './Screens/Collection'
import Contact from './Screens/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
    <div className='font-messiri'>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/collection' element={<Collection/>}/>

      <Route path='/contact' element={<Contact/>}/>


  
    </Routes>

    <Footer/>
        </div>
    </>
  )
}

export default App
