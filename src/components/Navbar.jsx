import React, { useEffect, useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link as L, useLocation } from 'react-router-dom';
import useActiveSection from '../hooks/useActiveSection';

const links = [
  { to: '/', label: 'Home', section: 'home' },
  { to: '/#about', label: 'About', section: 'about' },
  { to: '/#experience', label: 'Experience', section: 'experience' },
  { to: '/#skills', label: 'Skills', section: 'skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/#contact', label: 'Contact', section: 'contact' },
  { to: '/games', label: 'Games' },
];

const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const socials = [
  {
    href: 'https://www.linkedin.com/in/tony-zeidan',
    label: 'Linkedin',
    icon: <FaLinkedin size={30} />,
    bg: 'bg-blue-600',
  },
  {
    href: 'https://github.com/tony-zeidan',
    label: 'Github',
    icon: <FaGithub size={30} />,
    bg: 'bg-[#333333]',
  },
  {
    href: 'mailto:tony.zeidan@outlook.com',
    label: 'Email',
    icon: <HiOutlineMail size={30} />,
    bg: 'bg-[#6fc2b0]',
  },
  {
    href: '/cv/Tony-Zeidan-CV.pdf',
    label: 'Resume',
    icon: <BsFillPersonLinesFill size={30} />,
    bg: 'bg-[#565f69]',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const onHome = location.pathname === '/';
  const active = useActiveSection(sectionIds, onHome);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 12);
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const linkClass = (link) => {
    const isActive = onHome && link.section && link.section === active;
    return isActive
      ? 'text-cyan-400 transition-colors duration-200'
      : 'hover:text-cyan-500 transition-colors duration-200';
  };

  return (
    <>
    <div
      className={`fixed w-full h-[60px] flex justify-between items-center px-4 md:px-8 text-gray-300 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-[#181818]/80 supports-[backdrop-filter]:bg-[#181818]/60 backdrop-blur-md border-white/10'
          : 'bg-[#181818] border-transparent'
      }`}
    >
      <L to='/' className='flex items-center gap-2 group'>
        <img src='favicon.ico' alt='' className='w-[30px] h-[30px]'/>
        <span className='font-mono text-sm text-gray-400 group-hover:text-cyan-500 transition-colors duration-200 hidden sm:inline'>
          tonyzeidan.com
        </span>
      </L>
      {/* menu */}
      <ul className='hidden lg:flex gap-x-6 font-mono text-sm'>
        {links.map((link) => (
          <li key={link.label}>
            <L className={linkClass(link)} to={link.to}>
              {link.label}
            </L>
          </li>
        ))}
        <li>
          <a className='hover:text-cyan-500 transition-colors duration-200' href='/cv/Tony-Zeidan-CV.pdf'>
            Resume
          </a>
        </li>
      </ul>
      {/* Hamburger */}
      <button
        onClick={handleClick}
        aria-label={nav ? 'Close menu' : 'Open menu'}
        aria-expanded={nav}
        className='lg:hidden z-10'
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </button>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#181818] flex flex-col justify-center items-center overflow-y-auto font-mono'
        }
      >
        {links.map((link) => (
          <li key={link.label} className='py-4 text-3xl'>
            <L onClick={handleClick} to={link.to}>
              {link.label}
            </L>
          </li>
        ))}
        <li className='py-4 text-3xl'>
          <a onClick={handleClick} href='/cv/Tony-Zeidan-CV.pdf'>
            Resume
          </a>
        </li>
      </ul>
      <div
        aria-hidden='true'
        className='accent-rule absolute bottom-0 left-0 h-[2px] w-full origin-left'
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
    {/* Social icons */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-40'>
      <ul>
        {socials.map((social) => (
          <li
            key={social.label}
            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 ${social.bg}`}
          >
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={social.href}
            >
              {social.label} {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
export default Navbar;
