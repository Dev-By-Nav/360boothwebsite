import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav>
      <div
        className={`flex justify-between items-center h-24 min-w-full mx-auto px-12 text-white bg-white ${
          nav ? 'sticky top-0' : ''
        } z-50`}
      >
        <Link to='/'>
          <img src={logo} alt='' className='h-24 w-auto' />
        </Link>
        <ul className={`hidden md:flex font-semibold cursor-pointer text-[#c94b60] text-lg ${nav ? 'hidden' : ''}`}>
          <li className='p-4 hover:text-[#ad345c] font-medium'>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-4 hover:text-[#ad345c] font-medium'>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li className='p-4 hover:text-[#ad345c] font-medium'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='p-4 hover:text-[#ad345c] font-medium flex-row'>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className={`block md:hidden cursor-pointer text-[#c94b60] hover:text-white mr-4 ${nav ? 'hidden' : ''}`}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={`${
            nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] z-50'
          }`}
        >
          <ul className='p-4 cursor-pointer text-[#c94b60] font-semibold'>
            <li className='p-4 border-b hover:text-white border-[#c94b60] font-medium'>
              <Link to='/'>Home</Link>
            </li>
            <li className='p-4 border-b hover:text-white border-[#c94b60] font-medium'>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li className='p-4 border-b hover:text-white border-[#c94b60] font-medium'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='p-4 hover:text-white font-medium flex-row'>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ border: '1px solid #c94b60', margin: '0 0', position: 'sticky', top: '60px', zIndex: 49 }} />
    </nav>
  );
};

export default Navbar;
