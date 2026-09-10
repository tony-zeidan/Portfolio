import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import useSpotlight from '../hooks/useSpotlight';

const roles = [
  {
    org: 'Canadian Bank Note Company',
    team: 'ID Systems',
    title: 'Software Developer',
    dates: 'September 2023 – Present',
    place: 'Ottawa, ON',
    note: 'Overseas government IT programs, delivered under client confidentiality. Five-developer team.',
    current: true,
    bullets: [
      "Three years' continuous ownership of two large-scale online public-service applications on an overseas program, built on a Java Spring backend with a Java Vaadin front end.",
      "Own features end to end: design, implementation, testing, release, and ongoing support. I make the architecture and design decisions behind them rather than building to someone else's spec.",
      'Integrated payment gateways and third-party APIs, and designed the multi-step online application processing workflows behind them.',
      'Delivered features across six overseas programs over the first two years, before the portfolio was divided and those deployments moved to a dedicated international team.',
      'Onboarded an incoming developer onto the programs transferring to that team, and act as the reference developer on the programs I retained.',
      'Took on two further programs in the past year, building backend services in Java and Spring Boot with supporting Angular front-end work.',
      'Own production defect resolution, from support intake through root cause to a shipped fix, including out-of-hours escalation when an issue is serious.',
      'Improve response times with caching and reworked backend data access paths, and hold large Vaadin data tables and combo boxes responsive under load with custom JavaScript.',
      'Remediate findings raised by third-party security assessments.',
      'Containerize services with Docker under Ubuntu Linux and Windows WSL; work against PostgreSQL and Oracle; ship through Bamboo and Azure DevOps pipelines.',
      'Build Python tooling for large-scale test data generation and trend analysis.',
    ],
  },
  {
    org: 'NAV Canada',
    team: 'Surveillance Engineering',
    title: 'Software Developer Co-op',
    dates: 'April – September 2022',
    place: 'Ottawa, ON',
    note: "NAV Canada runs the country's civil air navigation system; this team built the software that manages and distributes air traffic surveillance data.",
    bullets: [
      'Built and maintained configurable site-specific installation packages for a React JS project using INNO Setup.',
      'Wrote test procedures and cases across a range of surveillance applications running on QNX real-time systems, then executed them against quality control standards.',
      "Reviewed teammates' code changes before merge, and extended the documentation.",
    ],
  },
  {
    org: 'National Defence',
    team: 'Canadian Joint Operations Command',
    title: 'Developer / Analyst Co-op',
    dates: 'February 2021 – January 2022',
    place: 'Ottawa, ON',
    link: { href: 'https://github.com/mrempel/geohexviz', label: 'geohexviz' },
    bullets: [
      'Built GeoHexViz, a Pandas and NumPy based Python package for publication-quality visualization of hexagonally binned geospatial data, and published it as first author in the Journal of Open Source Software.',
      'Analyzed data for aeronautical Search and Rescue studies and identified performance trends that fed into operational recommendations.',
      'Presented the package at two seminars, replaced a manual map generation process with repeatable scripts, and co-authored a government reference document.',
    ],
  },
];

const Experience = () => {
  const onMouseMove = useSpotlight();

  return (
    <div id='experience' className='w-full bg-[#181818] text-gray-300'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full min-h-screen px-4 py-24'>
        <Reveal className='pb-12 w-full flex justify-center'>
          <SectionHeading index='02' title='Experience' />
        </Reveal>

        <Reveal stagger={70} className='relative flex flex-col gap-8 border-l border-white/10 pl-8 sm:pl-10'>
          {roles.map((role) => (
            <div
              key={role.org}
              onMouseMove={onMouseMove}
              className='spotlight relative rounded-xl bg-[#202020] border border-white/[0.07] p-6 sm:p-8 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-[transform,border-color] duration-200 ease-out'
            >
              <span
                className={`absolute top-8 h-3 w-3 rounded-full ring-4 ring-[#181818] -left-[38px] sm:-left-[46px] ${
                  role.current ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              />
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2'>
                <div>
                  <p className='text-xl font-bold text-white'>{role.title}</p>
                  <p className='text-gray-400 mt-1'>
                    {role.org} <span className='text-gray-600'>·</span> {role.team}
                  </p>
                </div>
                <div className='sm:text-right shrink-0 font-mono text-xs'>
                  <p className='text-cyan-500'>{role.dates}</p>
                  <p className='text-gray-500 mt-1'>{role.place}</p>
                </div>
              </div>

              {role.note && (
                <p className='text-sm text-gray-500 mt-4 border-l-2 border-white/10 pl-3'>
                  {role.note}
                </p>
              )}

              <ul className='list-disc list-outside pl-5 mt-5 flex flex-col gap-2.5 marker:text-cyan-500/60 leading-relaxed'>
                {role.bullets.map((bullet) => (
                  <li key={bullet} className='px-0 cursor-auto'>
                    {bullet}
                  </li>
                ))}
              </ul>

              {role.link && (
                <a
                  href={role.link.href}
                  className='mt-5 inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-cyan-500 transition-colors duration-200'
                >
                  <FaGithub size={18} /> {role.link.label}
                </a>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
};
export default Experience;
