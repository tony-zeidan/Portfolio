import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const elsewhere = [
  { href: 'https://github.com/tony-zeidan', label: 'github.com/tony-zeidan', icon: <FaGithub size={16} /> },
  { href: 'https://www.linkedin.com/in/tony-zeidan', label: 'linkedin.com/in/tony-zeidan', icon: <FaLinkedin size={16} /> },
]

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-[#181818]'>
      <div className='flex flex-col justify-center items-center w-full min-h-screen px-4 py-24'>
        <Reveal className='pb-12 w-full flex justify-center'>
          <SectionHeading index='05' title='Contact' subtitle='Send me a message.' />
        </Reveal>
        <Reveal delay={80} className='w-full max-w-[600px] flex flex-col items-center'>
          <a
            href='mailto:tony.zeidan@outlook.com'
            className='group flex w-full items-center justify-center gap-3 rounded-xl bg-[#202020] px-6 py-5 text-gray-200 border border-white/[0.07] hover:border-cyan-500 hover:-translate-y-0.5 transition-[transform,border-color] duration-200 ease-out'
          >
            <HiOutlineMail size={22} className='text-cyan-500' />
            <span className='font-mono text-sm sm:text-base'>tony.zeidan@outlook.com</span>
          </a>
          <ul className='mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2'>
            {elsewhere.map((item) => (
              <li key={item.label} className='cursor-auto'>
                <a
                  href={item.href}
                  className='flex items-center gap-2 rounded-md border border-transparent px-3 py-2 font-mono text-sm text-gray-500 hover:text-cyan-500 hover:border-white/10 transition-colors duration-200'
                >
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  )
}
export default Contact
