import React from 'react';
import ghv from '../../assets/ghv.png';
import evase from '../../assets/evase.png';
import ruby from '../../assets/ruby.png';
import sapphire from '../../assets/sapphire.png';
import elevator from '../../assets/elevator.png';
import risk from '../../assets/risk.png';
import bookstore from '../../assets/bookstore.png';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Projects
          </p>
          <p className='py-6 text-2xl'>Check out some of my best work!</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <Project projectTitle="GeoHexViz" projectDescription="A Python package for the generation of hexagonnally binnned geospatial visualizations!" imgUrl={ghv} link='/projects/#geohexviz'/>
          <Project projectTitle="EVASE" projectDescription="A Flask/React Web Application with the aim to detect vulnerabilities in backend Python code!" imgUrl={evase} link='/projects/#evase'/>
          <Project projectTitle="Fake Amazon Bookstore" projectDescription="A SpringBoot-based web application that simulates the behaviour of an amazon bookstore" imgUrl={bookstore} link='/projects/#fakeamazonbookstore'/>
          <Project projectTitle="Sapphire Bot" projectDescription="A discord bot (created in Go) that provides users direct chat access to OpenAI models!" imgUrl={sapphire} link='/projects/#sapphirebot'/>

          <Project projectTitle="Elevator Subsystem" projectDescription="A concurrent real-time Java program that simulates the operation of an elevator!" imgUrl={elevator} link='/projects/#elevatorsystem'/>
          <Project projectTitle="RISK Game" projectDescription="An interactive RISK game made with Java Swing and the MVC architecture pattern!" imgUrl={risk} link='/projects/#riskgame'/>
        </div>
      </div>
    </div>
  );
};
export default Projects;