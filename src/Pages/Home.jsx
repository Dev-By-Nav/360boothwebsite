import React from 'react'
import { Helmet } from 'react-helmet';
import Navbar from '../Components/Navbar'
import Celebrity from '../Components/Celebrity'
import Footer from '../Components/Footer'
import About from '../Components/About'
import Hero from '../Components/Hero'
import Review from '../Components/Review'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - Home</title>
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
      </Helmet>

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