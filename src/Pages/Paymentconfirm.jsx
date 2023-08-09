import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'

function Paymentconfirm() {
  return (
    <div>
        <Helmet>
        <title>Smilebooth360 - Deposit Confirmed</title>
        <meta name="description" content="Deposit confirmed, Thank you for booking with Smilebooth360" />
        </Helmet>
        <Navbar />
        <div className='h-96 my-16 flex items-center justify-center text-[#c94b60] flex-col mx-5'>
            <h1 className='text-2xl font-semibold font-montserrat'>Payment confirmed</h1>
            <p className='text-xl font-raleway my-5 text-center'>Thank you for booking with Smilebooth360. We will be in touch shortly.</p>
        </div>
        <Footer />
    </div>
  )
}

export default Paymentconfirm