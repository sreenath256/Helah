import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/LandingPage/Hero'
import FlashSaleBanner from '@/Components/Banners/FlashSaleBanner'
import SecondBanner from '@/Components/Banners/SecondBanner'
import CollectionCategory from '../Components/Banners/CollectionCategory'
import AmericanDiamond from '@/Components/Banners/AmericanDiamond'
import Footer from '@/Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='mt-8'>

      <FlashSaleBanner/>
      </div>
      <div className='mt-10'>
        <SecondBanner/>
      </div>
      <div className='mt-10'>
        <CollectionCategory/>
      </div>
      
      <div className='my-16'>
        <AmericanDiamond/>
      </div>
      <div className='mt-16 px-5'>
        <Footer/>
      </div>
    </div>

)

}

export default Home
