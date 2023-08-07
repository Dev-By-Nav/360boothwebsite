import React from 'react'
import Navbar from '../Components/Navbar'
import Celebrity from '../Components/Celebrity'
import Footer from '../Components/Footer'
import About from '../Components/About'
import Hero from '../Components/Hero'
import Review from '../Components/Review'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Celebrity />
        <Review />
        <Footer />
    </div>
  )
}

export default Home