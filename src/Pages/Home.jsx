import React from 'react'
import Navbar from '../Components/Navbar'
import Celebrity from '../Components/Celebrity'
import Footer from '../Components/Footer'
import About from '../Components/About'

function Home() {
  return (
    <div>
        <Navbar />
        <About />
        <Celebrity />
        <Footer />
    </div>
  )
}

export default Home