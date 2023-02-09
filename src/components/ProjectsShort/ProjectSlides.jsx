import React, {useState} from 'react';
import ghv from '../../assets/ghv.png';
import evase from '../../assets/evase.png';
import ruby from '../../assets/ruby.png';
import sapphire from '../../assets/sapphire.png';
import elevator from '../../assets/elevator.png';
import risk from '../../assets/risk.png';
import { Carousel, Card, Alert } from 'flowbite-react'
import {Link} from "react-router-dom";

import ProjectSlide from './ProjectSlide'


function ProjectSlides() {

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div id='projects' className='w-full h-full text-gray-300 flex-nowrap bg-[#0a192f]'>
            <div className='max-w-[600px] mx-auto p-4 w-full h-full'>
                <div id="projects" className='mt-36'>
                    <div className='pb-8 w-full flex justify-center items-center flex-co'>
                        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                            Projects
                        </p>
                    </div>
                    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel>
                        <div className="flex h-full items-center justify-center dark:text-white">
                            <ProjectSlide title='GeoHexViz' imgUrl={ghv} link='/projects/#geohexviz' desc="description"/>
                        </div>
                        <div className="flex h-full items-center justify-center dark:text-white">
                            <ProjectSlide title='Evase' imgUrl={evase} link='/projects/#evase'/>
                        </div>
                        <div className="flex h-full items-center justify-center dark:text-white">
                            <ProjectSlide title='GeoHexViz' imgUrl={ghv} link='/projects/#geohexviz'/>
                        </div>
                    </Carousel>
                    </div>
                </div>
            </div>
        </div>
);
}

export default ProjectSlides;