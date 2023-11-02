import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div id='projects' className='w-full md:h-screen text-gray-300 bg-[#181818]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Projects
          </p>
          <p className='py-6 text-2xl'>Check out some of my best work!</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <Project projectTitle="GeoHexViz" projectDescription="A Python package for the generation of hexagonnally binnned geospatial visualizations!" imgUrl="/images/ghv.png" link='/projects/#geohexviz'/>
          <Project projectTitle="EVASE" projectDescription="A Flask/React Web Application with the aim to detect vulnerabilities in backend Python code!" imgUrl="/images/evase.png" link='/projects/#evase'/>
          <Project projectTitle="Fake Amazon Bookstore" projectDescription="A SpringBoot-based web application that simulates the behaviour of an amazon bookstore" imgUrl="/images/bookstore.png" link='/projects/#fakeamazonbookstore'/>
          <Project projectTitle="Sapphire Bot" projectDescription="A discord bot (created in Go) that provides users direct chat access to OpenAI models!" imgUrl="/images/sapphire.png" link='/projects/#sapphirebot'/>

          <Project projectTitle="Elevator Subsystem" projectDescription="A concurrent real-time Java program that simulates the operation of an elevator!" imgUrl="/images/elevator.png" link='/projects/#elevatorsystem'/>
          <Project projectTitle="RISK Game" projectDescription="An interactive RISK game made with Java Swing and the MVC architecture pattern!" imgUrl="/images/risk.png" link='/projects/#riskgame'/>
        </div>
      </div>
    </div>
  );
};
export default Projects;