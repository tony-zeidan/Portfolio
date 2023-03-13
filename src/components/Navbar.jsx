import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link as L} from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <h1 className='font-thin text-2xl italic font-serif'>T.A</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <L to='/'>
            Home
          </L>
        </li>
        <li>
          <L to='/#about'>
            About
          </L>
        </li>
        <li>
          <L to='/#skills'>
            Skills
          </L>
        </li>
        <li>
          <L to='/projects'>
            Projects
          </L>
        </li>
        <li>
          <L to='/resume'>
            Resume
          </L>
        </li>
        <li>
          <L to='/#contact'>
            Contact
          </L>
        </li>
        <li>
          <L to='/games'>
            Games
          </L>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <L onClick={handleClick} to='/'>
            Home
          </L>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <L onClick={handleClick} to='/#about'>
            About
          </L>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <L onClick={handleClick} to='/#skills'>
            Skills
          </L>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <L onClick={handleClick} to='/projects'>
            Projects
          </L>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <L onClick={handleClick} to='/resume'>
            Resume
          </L>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <L onClick={handleClick} to='/#contact'>
            Contact
          </L>
        </li>
      </ul>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/tony-abou-zeidan-609429195/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/tony-zeidan'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto: tony.azp25@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <L
              className='flex justify-between items-center w-full text-gray-300'
              to='/resume'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </L>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;