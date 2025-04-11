import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll"; 

const AuthorBlurb = () => {
  return (
    <div
    id="home"
    className="h-screen w-full bg-[#181818]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a Software Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          I have 4 years of education at Carleton University in the Software Engineering program,
          and 1.5 years of coop experience at DND and NAV CANADA cumulatively. Currently, I am a developer
          at Canadian Bank Note Company, Limited. where I build web applications for identification systems.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#222222] cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className='mr-5'>
        <img
          src="images/me.png"
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3"
        />
      </div>
    </div>
  </div>
  );
};
export default AuthorBlurb;