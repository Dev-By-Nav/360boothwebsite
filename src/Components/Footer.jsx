import React from 'react'
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#c94b60] text-white py-6">
      <hr style={{ border: '1px solid #d6c6b9', margin: '0 0' }} />
      {/* For mobile, stack the sections below each other */}
      <div className="flex flex-col sm:flex-row pl-10 md:pl-20 pt-4">
        <div className="footer-section mb-4 sm:mb-0 md:w-1/3">
          {/* Content for the first section */}
          <h1 className=" font-semibold pb-3 white">Smilebooth360</h1>
          <p>Phone: +447513324033 </p>
          <p>Email: info@smilebooth360.com</p><br/>
          <p className='w-'>We Service Across The UK.</p>
        </div>
        <div className="footer-section mb-4 sm:mb-0  w-1/3">
          {/* Content for the second section */}
          <h1 className=""></h1>
          <Link to='/gallery'><p>See Our Work</p></Link>
          <Link to='/services'><p>See Our Services & Pricing</p></Link>
          <Link to='/contact-us'><p>Check Our Availability</p></Link>
          <Link to='/contact-us'><p>Get In Touch</p></Link>
          <Link to='/services'><p>Frequently Asked Questions</p></Link>
          <Link to='/'><p>Read Our Reviews</p></Link>
        </div>
        <div className="footer-section mb-4 sm:mb-0  w-1/3">
          {/* Content for the second section */}
          <h1 className=""></h1>
          <a href='https://www.instagram.com/smilebooth360uk/' target="_blank" rel="noopener noreferrer">
          <span className="inline-block align-middle text-4xl pr-2">
            <FaInstagram />
          </span>
        </a>
        <a href='https://www.tiktok.com/@smilebooth360uk' target="_blank" rel="noopener noreferrer">
          <span className="inline-block align-middle text-3xl pl-2 pr-2">
            <FaTiktok />
          </span>
        </a>
        <a href='https://api.whatsapp.com/send?phone=447513324033' target="_blank" rel="noopener noreferrer">
          <span className="inline-block align-middle text-4xl pl-2">
            <FaWhatsapp />
          </span>
        </a>
        </div>
      </div>

      <div className="text-center mt-16 text-sm">
      <p>
        Web Design & Development by Bold Edge Media |{' '}
        <a href='https://www.instagram.com/boldedgemedia/' target="_blank" rel="noopener noreferrer">
          <span className="inline-block align-middle text-xl">
            <FaInstagram />
          </span>
        </a>
      </p>
    </div>

    </footer>
  )
}

export default Footer