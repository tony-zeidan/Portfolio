import React from 'react';
import { HiArrowNarrowRight, HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-scroll";
import Reveal from './Reveal';

const links = [
  { href: 'mailto:tony.zeidan@outlook.com', label: 'Email', icon: <HiOutlineMail size={18} /> },
  { href: 'https://github.com/tony-zeidan', label: 'GitHub', icon: <FaGithub size={16} /> },
  { href: 'https://www.linkedin.com/in/tony-zeidan', label: 'LinkedIn', icon: <FaLinkedin size={16} /> },
];

const AuthorBlurb = () => {
  return (
    <div id="home" className="grain relative w-full bg-[#181818] overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen gap-12 px-4 py-28 md:flex-row md:gap-16 md:py-0">
        <div className="flex flex-col justify-center">
          <Reveal stagger={60}>
            <p className="font-mono text-sm text-cyan-500 tracking-[0.2em] uppercase">
              Tony Zeidan
            </p>
            <h1 className="bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mt-3">
              I'm a Software Developer
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-5 font-mono text-xs text-gray-400">
              <span className="flex items-center gap-2 rounded-md border border-white/10 bg-[#202020] px-2.5 py-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
                Open to remote
              </span>
              <span className="rounded-md border border-white/10 bg-[#202020] px-2.5 py-1">Ottawa, ON</span>
              <span className="rounded-md border border-cyan-500/30 bg-cyan-500/5 px-2.5 py-1 text-cyan-400">
                Secret clearance
              </span>
            </div>
            <p className="text-gray-400 py-6 max-w-xl leading-relaxed">
              I'm a secret-cleared software developer with three years on large-scale online
              public-service applications delivered for overseas government programs.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-[#202020] cursor-pointer border border-white/10 hover:border-cyan-500 hover:-translate-y-0.5 transition-[transform,border-color] duration-200 ease-out"
              >
                About Me
                <span className="group-hover:translate-x-1 transition-transform duration-200 ease-out">
                  <HiArrowNarrowRight size={22} className="ml-3" />
                </span>
              </Link>
              <ul className="flex flex-wrap items-center gap-x-2 gap-y-2 -ml-4">
                {links.map((link) => (
                  <li key={link.label} className="cursor-auto">
                    <a
                      href={link.href}
                      className="flex items-center gap-2 rounded-md border border-transparent px-3 py-2 font-mono text-sm text-gray-400 hover:text-cyan-500 hover:border-white/10 transition-colors duration-200"
                    >
                      {link.icon} {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120} className="w-2/3 max-w-[320px] shrink-0 md:w-1/2">
          <picture>
            <source srcSet="images/me.webp" type="image/webp" />
            <img
              src="images/me.png"
              alt="Tony Zeidan"
              width="700"
              height="700"
              className="rounded-2xl w-full border border-white/10"
            />
          </picture>
        </Reveal>
      </div>
    </div>
  );
};
export default AuthorBlurb;
