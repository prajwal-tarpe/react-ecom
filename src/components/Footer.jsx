import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className='bg-gray-800 p-10 flex flex-col md:flex-row justify-between items-center'>
      <div className='text-center md:text-left mb-6 md:mb-0'>
        <div className='text-4xl font-semibold text-white mb-2'>Styletron.</div>
        <p className='text-lg text-gray-400 mb-4'>
          Fashion and electronics, all in one stylish destination.
        </p>
        <div className='flex justify-center md:justify-start space-x-4 text-white'>
          <p className='hover:text-gray-300 transition-colors duration-200 cursor-pointer'>
            <FaFacebook size={24} />
          </p>
          <p className='hover:text-gray-300 transition-colors duration-200 cursor-pointer'>
            <FaInstagram size={24} />
          </p>
          <p className='hover:text-gray-300 transition-colors duration-200 cursor-pointer'>
            <FaTwitter size={24} />
          </p>
          <p className='hover:text-gray-300 transition-colors duration-200 cursor-pointer'>
            <FaWhatsapp size={24} />
          </p>
        </div>
      </div>
      <div className='text-center md:text-left text-white'>
        <h1 className='text-xl font-semibold mb-2'>Links</h1>
        <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
          <NavLink to='/' className='hover:text-gray-300 transition-colors duration-200'>Home</NavLink>
          <NavLink to='/products' className='hover:text-gray-300 transition-colors duration-200'>Products</NavLink>
          <NavLink to='/contact' className='hover:text-gray-300 transition-colors duration-200'>Contact</NavLink>
          <NavLink to='/favourities' className='hover:text-gray-300 transition-colors duration-200'>WishList</NavLink>
          <NavLink to='/cart' className='hover:text-gray-300 transition-colors duration-200'>Cart</NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
