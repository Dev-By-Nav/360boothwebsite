import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#c94b60] text-white py-6">
      <hr style={{ border: '1px solid #d6c6b9', margin: '0 0' }} />
      {/* For mobile, stack the sections below each other */}
      <div className="flex flex-col sm:flex-row pl-10 md:pl-20 pt-4">
        <div className="footer-section mb-4 sm:mb-0 md:w-1/2">
          {/* Content for the first section */}
          <h1 className=" font-semibold pb-3 white">Smile Booth 360</h1>
          <p>See Our Work</p>
          <p>See Our Services & Pricing</p>
          <p className='w-'>Serving Surrey, Delta, Burnaby, Richmond, and Vancouver</p>
        </div>
        <div className="footer-section mb-4 sm:mb-0  w-1/2">
          {/* Content for the second section */}
          <h1 className=""></h1>
          <Link to='/gallery'><p>See Our Work</p></Link>
          <Link to='/services'><p>See Our Services & Pricing</p></Link>
          <Link to='/contact-us'><p>Check Our Availability</p></Link>
          <Link to='/contact-us'><p>Get In Touch</p></Link>
          <Link to='/services'><p>Frequently Asked Questions</p></Link>
          <Link to='/'><p>Read Our Reviews</p></Link>
        </div>
      </div>

      <div className="text-center mt-16 text-sm">
      <p>
        Web Design & Development by Bold Edge Media |{' '}
        <a href='https://www.instagram.com/boldedgemedia/' target="_blank" rel="noopener noreferrer">
          <span className="inline-block align-middle">
            <FaInstagram />
          </span>
        </a>
      </p>
    </div>

    </footer>
  )
}

export default Footer