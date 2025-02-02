import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping} from "react-icons/fa6";
import DarkMode from './DarkMode';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //   setIsMenuOpen(!isMenuOpen);
    // };

  return (
    <div className='bg-primary duration-200 relative z-40'>
        {/* Upper Navbar */}
            <div className=' container flex justify-between items-center py-2'>
                <div className='text-secondary text-xl font-bold'>
                    <h2>SKiNY</h2>
                </div>

                {/* Hamburger Menu Icon for small screens */}
                {/* <div className='sm:hidden'>
                    <button onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <FaTimes className='text-xl cursor-pointer' />
                    ) : (
                        <FaBars className='text-xl cursor-pointer' />
                    )}
                    </button>
                </div> */}

                <div>
                    <div className='flex justify-center text-gray-700 text-sm'>
                        <ul className='sm:flex hidden items-center  gap-5'>
                            <li>
                                <Link to='/' className='inline-block px-4 hover:text-secondary duration-200'>Home</Link>                            </li>
                            <li>
                                <Link to='/shop' className='inline-block px-4 hover:text-secondary duration-200'>Shop</Link>
                            </li>
                            <li>
                                <a href='#' className='inline-block px-4 hover:text-secondary duration-200'>Contact</a>
                            </li>
                            {/* simple Dropdown and links */}
                            <li className='group relative cursor-pointer'>
                                <a href='#' className='flex items-center gao-[2px] py-2'>Categories
                                  <span>
                                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                                  </span>

                                </a> 
                                <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-secondary p-2 text-white shadow-md'>
                                    <ul>
                                        <li>
                                            <a href='#' className='inline-block w-full rounded-md p-2 hover:text-secondary hover:bg-primary'>Make Up</a>
                                        </li>
                                        <li>
                                            <Link to='/SkinCare'  className='inline-block w-full rounded-md p-2 hover:text-secondary hover:bg-primary'>Skin Care</Link>
                                        </li>
                                        <li>
                                            <a href='#' className='inline-block w-full rounded-md p-2 hover:text-secondary hover:bg-primary'>Body Care</a>
                                        </li>
                                        <li>
                                            <a href='#' className='inline-block w-full rounded-md p-2 hover:text-secondary hover:bg-primary'>Hair Care</a>
                                        </li>
                                        <li>
                                            <a href='#' className='inline-block w-full rounded-md p-2 hover:text-secondary hover:bg-primary'>Group Products</a>
                                        </li>
                                    </ul>
                                </div>                          
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center gap-3'>

                    {/* Search bar */}
                    <div className='relative group hidden sm:block'>
                        <input type="text" placeholder='Search'
                         className='w-[100px] sm:w-[100px] group-hover:w-[200px] 
                         transition-all duration-300 rounded-full border border-grey-300
                         px-2 py-1 focus:outline-none focus:border-2 focus:border-secondary ' />
                        <IoIosSearch className='text-gray-500 group-hover:text-secondary absolute top-1/2
                         -translate-y-1/2 right-3' />
                    </div>

                    {/* Cart */}
                    < Link to='/cart' className='group'>
                        <button
                        className ="bg-gradient-to-r from-secondary to-secondary transition-all duration-200
                        text-white px-4 py-2 rounded-full flex items-center gap-3 group" 
                        >
                            <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                            <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                    </Link>

                    {/* Dark Mode */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        

        {/* <div className={`sm:hidden fixed top-0 left-0 h-full w-64 bg-primary transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-4'>
          <button onClick={toggleMenu} className='text-secondary'>
            <FaTimes className='text-xl' />
          </button>
        </div> */}
        {/* <ul className='p-4'>
          <li>
            <Link to='/' className='block py-2 hover:text-secondary duration-200' onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to='/shop' className='block py-2 hover:text-secondary duration-200' onClick={toggleMenu}>Shop</Link>
          </li>
          <li>
            <a href='#' className='block py-2 hover:text-secondary duration-200' onClick={toggleMenu}>Contact</a>
          </li> */}
          {/* Dropdown */}
          {/* <li className='group relative cursor-pointer'>
            <a href='#' className='flex items-center gap-[2px] py-2'>Categories
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='ml-4'>
              <a href='#' className='block py-2 hover:text-secondary hover:bg-primary'>Make Up</a>
              <a href='#' className='block py-2 hover:text-secondary hover:bg-primary'>Skin Care</a>
              <a href='#' className='block py-2 hover:text-secondary hover:bg-primary'>Body Care</a>
              <a href='#' className='block py-2 hover:text-secondary hover:bg-primary'>Hair Care</a>
              <a href='#' className='block py-2 hover:text-secondary hover:bg-primary'>Group Products</a>
            </div>
          </li>
        </ul>
      </div> */}

      {/* Overlay for mobile menu */}
      {/* {isMenuOpen && (
        <div
          className='sm:hidden fixed inset-0 bg-black bg-opacity-50 z-30'
          onClick={toggleMenu}
        ></div>
      )}

    </div> */}
    </div>
  )
}

export default Navbar