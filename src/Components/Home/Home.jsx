import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Services from '../Services/Services'
import Banner from '../Banner/Banner'
import BannerText from '../Banner/BannerText'
import Blog from '../Blog/Blog'
// import Audio from '../Audio/Audio'
import Footer from '../Footer/Footer'
// import AudioPlayerPage from '../Audio/Audio'


function Home() {
  return <>
  <main className='overflow-x-hidden'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <BannerText/>
    <Blog/>
    
    <Footer/>
  </main>

  </>
}

export default Home
