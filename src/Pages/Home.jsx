import React from 'react'
import Navbar from '../Components/Navbar'
import Celebrity from '../Components/Celebrity'
import Footer from '../Components/Footer'
import About from '../Components/About'
import Hero from '../Components/Hero'
import Review from '../Components/Review'
import Booth from '../Components/Booth'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Celebrity />
        <Booth />
        <Review />
        <Footer />
    </div>
  )
}

export default Home