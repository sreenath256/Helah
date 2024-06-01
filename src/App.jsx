import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Collection from './Screens/Collection'
import Contact from './Screens/Contact'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Demo from './Screens/Demo'
import Frame1 from './Screens/Frame1'
import Collections from './Screens/Collections/Collections'


function App() {

  return (
    <>
    <div className='font-messiri '>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Frame1/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/collection' element={<Collection/>}/>
      <Route path='/collections' element={<Collections/>}/>

      <Route path='/contact' element={<Contact/>}/>
      <Route path='/frame1' element={<Home/>}/>


  
    </Routes>

    <Footer/>
        </div>
    </>
  )
}

export default App
