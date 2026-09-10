import React from 'react';
import Project from './Project';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

const projects = [
  {
    projectTitle: 'GeoHexViz',
    projectDescription: 'A Python package for the generation of hexagonnally binnned geospatial visualizations!',
    imgUrl: '/images/ghv.png',
    link: '/projects/#geohexviz',
  },
  {
    projectTitle: 'EVASE',
    projectDescription: 'A web application that scans Python source for SQL injection vulnerabilities using abstract syntax trees.',
    imgUrl: '/images/evase.png',
    link: '/projects/#evase',
  },
  {
    projectTitle: 'Fake Amazon Bookstore',
    projectDescription: 'A SpringBoot-based web application that simulates the behaviour of an amazon bookstore',
    imgUrl: '/images/bookstore.png',
    link: '/projects/#fakeamazonbookstore',
  },
  {
    projectTitle: 'Sapphire Bot',
    projectDescription: 'A discord bot (created in Go) that provides users direct chat access to OpenAI models!',
    imgUrl: '/images/sapphire.png',
    link: '/projects/#sapphirebot',
  },
  {
    projectTitle: 'Elevator Subsystem',
    projectDescription: 'A concurrent real-time Java program that simulates the operation of an elevator!',
    imgUrl: '/images/elevator.png',
    link: '/projects/#elevatorsystem',
  },
  {
    projectTitle: 'RISK Game',
    projectDescription: 'An interactive RISK game made with Java Swing and the MVC architecture pattern!',
    imgUrl: '/images/risk.png',
    link: '/projects/#riskgame',
  },
];

const Projects = () => {
  return (
    <div id='projects' className='w-full text-gray-300 bg-[#181818]'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full min-h-screen px-4 py-24'>
        <Reveal className='pb-12 w-full flex justify-center'>
          <SectionHeading index='04' title='Projects' subtitle='Check out some of my best work!' />
        </Reveal>
        <Reveal stagger={50} className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
          {projects.map((project) => (
            <Project key={project.projectTitle} {...project} />
          ))}
        </Reveal>
      </div>
    </div>
  );
};
export default Projects;
