import React from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const groups = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['Spring Boot', 'Java Vaadin', 'Angular', 'React', 'Flask', 'JUnit', 'Thymeleaf'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'Oracle', 'Pandas', 'NumPy'],
  },
  {
    label: 'Platform',
    items: ['Docker', 'Bamboo', 'Azure DevOps', 'Git', 'Maven', 'Linux', 'Windows', 'QNX'],
  },
];

const notes = [
  {
    label: 'Focus',
    text: 'Payment gateway integration, third-party APIs, application workflow design, performance tuning, security remediation, production support.',
  },
  {
    label: 'Also',
    text: 'C/C++, Go, MySQL, SQLite from coursework and personal projects.',
  },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full bg-[#181818] text-gray-300'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full min-h-screen px-4 py-24'>
        <Reveal className='pb-12 w-full flex justify-center'>
          <SectionHeading index='03' title='Skills' subtitle="Technologies I've worked with." />
        </Reveal>

        <div className='flex flex-col gap-8'>
          {groups.map((group) => (
            <div key={group.label} className='grid gap-3 sm:grid-cols-[140px_1fr] sm:gap-6 sm:items-baseline'>
              <Reveal>
                <p className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-500'>
                  {group.label}
                </p>
              </Reveal>
              <Reveal stagger={40} className='flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className='inline-block rounded-md bg-[#202020] border border-white/[0.07] px-3 py-1.5 font-mono text-sm text-gray-300 hover:border-cyan-500/40 hover:text-white hover:-translate-y-0.5 transition-[transform,border-color,color] duration-200 ease-out'
                  >
                    {item}
                  </span>
                ))}
              </Reveal>
            </div>
          ))}
        </div>

        <div className='mt-12 flex flex-col gap-6 border-t border-white/[0.07] pt-8'>
          {notes.map((note, i) => (
            <Reveal key={note.label} delay={i * 80} className='grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6'>
              <p className='font-mono text-xs uppercase tracking-[0.2em] text-cyan-500'>
                {note.label}
              </p>
              <p className='text-gray-400 leading-relaxed'>{note.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
