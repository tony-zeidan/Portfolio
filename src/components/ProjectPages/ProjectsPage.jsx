import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";

import ghv from '../../assets/geohexviz.png';
import evase from '../../assets/evase.png';
import ruby from '../../assets/ruby.png';
import sapphire from '../../assets/sapphire.png';
import elevator from '../../assets/elevator.png';
import risk from '../../assets/risk.png';
import bookstore from '../../assets/bookstore.png';
import {FaGithub, FaJournalWhills} from "react-icons/fa";
import Navbar from "../Navbar";

const ProjectsPage = () => {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"})
        }
    }, [location,])

    return (
        <div>
            <Navbar/>
            <div id='projects' className='w-full h-full text-gray-300 flex-nowrap bg-[#0a192f]'>

                <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
                    <div id="geohexviz" className='mt-36'>
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                GeoHexViz
                            </p>
                        </div>
                        <div className='mb-5 flex flex-row'>
                            <a className='mr-10' href="https://github.com/mrempel/geohexviz">
                                <FaGithub size={30}/>
                                Repository
                            </a>
                            <a className='mr-14' href="https://joss.theoj.org/papers/c051df96dac973486cc312452575e804">
                                <FaJournalWhills size={30}/>
                                Journal
                            </a>
                            <a className='mr-10' href="https://cradpdf.drdc-rddc.gc.ca/PDFS/unc381/p814091_A1b.pdf">
                                <FaJournalWhills size={30}/>
                                Reference Document
                            </a>

                        </div>
                        <p className='mt-2 mb-5'>This is one of the projects I'm most proud of. Meet GeoHexViz!</p>
                        <div
                            style={{backgroundImage: `url(${ghv})`}}
                            className='shadow-lg shadow-[#040c16] w-96 h-96 bg-contain group container rounded-md flex justify-center items-center mx-auto'
                        />
                        <div className='mb-5 mt-5'>
                            <p>Often times creating detailed geospatial visualizations is difficult and time-consuming.
                                These visualizations are important because they help convey the results of analysis to
                                analysts and decision makers. A lack of technical knowledge is often a barrier when it
                                comes to generating these visualizations. GeoHexViz is a package that allows both
                                technical and non-technical users alike to create hexagonally binned geospatial
                                visualizations with Python or through the command-line script provided.</p>
                            <p>GeoHexViz combines the power of Uber's H3 library and Geopandas.</p>
                        </div>
                    </div>
                    <div id="evase">
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                Evase
                            </p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://github.com/Bruce-liushaopeng/Evase">
                                <FaGithub size={30}/>
                            </a>
                            <p className='mt-2'>This project is my Carleton University capstone project.</p>
                        </div>
                        <div
                            style={{backgroundImage: `url(${evase})`}}
                            className='shadow-lg shadow-[#040c16] group container w-96 h-96 bg-contain rounded-md  flex justify-center items-center mx-auto'
                        />
                        <div className='mb-5 mt-5'>
                            <p>It is often the case that security is an afterthought in development. The Evase project is a web application that takes in backend Python code and analyzes it for vulnerabilities; most notably SQL injection vulnerabilities.</p>
                            <p>This project helped me refine my knowledge of cybersecurity concepts, the ReactJS front-end framework, and the Flask back-end framework. </p>
                        </div>
                    </div>
                    <div id="fakeamazonbookstore">
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                Fake Amazon Bookstore
                            </p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://github.com/tony-zeidan/fake-amazon-bookstore">
                                <FaGithub size={30}/>
                            </a>
                            <p className='mt-2'>This project simulates an Amazon Bookstore where users can interact with books that a page-administrator puts up for sale. The administrator role can control inventory quantities, edit book descriptions, and upload new books! The users can browse the store, filter, and add books to their cart.</p>
                        </div>
                        <div
                            style={{backgroundImage: `url(${bookstore})`}}
                            className='shadow-lg shadow-[#040c16] group container w-96 h-96 bg-contain rounded-md  flex justify-center items-center mx-auto'
                        />
                        <div className='mb-5 mt-5'>
                            <p>I learned a lot during this project. I enhanced my knowledge of the SpringBoot framework, JavaScript/JQuery, HTML, CSS, and lots more. I also learned about the Circuit Breaker pattern and Aspect-Oriented Programming by implementing them in the project. Moreover, I learned a lot about web-development in general such as best practices for security, and where the burden of processing should be placed. </p>
                        </div>
                    </div>
                    <div id="sapphirebot">
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                Sapphire Bot
                            </p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://github.com/tony-zeidan/SapphireBot">
                                <FaGithub size={30}/>
                            </a>
                            <p className='mt-2'>This is my first in-depth GoLang project!</p>
                        </div>
                        <div
                            style={{backgroundImage: `url(${sapphire})`}}
                            className='shadow-lg shadow-[#040c16] group container w-96 h-96 bg-contain rounded-md  flex justify-center items-center mx-auto'
                        />
                        <div className='mb-5 mt-5'>
                            <p>Sapphire is a Discord bot that allows users to directly interact with the power of OpenAI
                                models directly through the chat. It uses existing libraries and HTTP requests to
                                retrieve information from the OpenAI API. </p>
                        </div>
                    </div>
                    <div id="elevatorsystem">
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                Elevator Control System
                            </p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://github.com/tony-zeidan/SYSC3303_elevator_project">
                                <FaGithub size={30}/>
                            </a>
                            <p className='mt-2'>
                                This project helped me refine my knowledge of concurrent programming and the OSI model.
                            </p>
                        </div>
                        <div
                            style={{backgroundImage: `url(${elevator})`}}
                            className='shadow-lg shadow-[#040c16] group container bg-contain rounded-md w-96 h-96 bg-contain  flex justify-center items-center mx-auto'
                        />
                        <div className='mb-5 mt-5'>
                            <p>This project is a Java program that simulates the real-time nature of a elevator control
                                system. It began by allowing multiple threads to communicate via directly shared memory,
                                but it was then expanded to use remote procedure calls.</p>
                        </div>
                    </div>
                    <div id="rubybot">
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                Ruby Bot
                            </p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://github.com/tony-zeidan/RubyBot">
                                <FaGithub size={30}/>
                            </a>
                            <p className='mt-2'>This is my first Discord-related project!</p>
                        </div>
                        <div
                            style={{backgroundImage: `url(${ruby})`}}
                            className='shadow-lg shadow-[#040c16] group container bg-contain rounded-md w-96 h-96 bg-contain  flex justify-center items-center mx-auto'
                        />
                        <div className='mb-5 mt-5'>
                            <p>Often times chat management in Discord is convoluted and difficult. Ruby is a Discord bot
                                written in Java with the purpose of making the jobs of chat managers easier. </p>
                        </div>
                    </div>
                    <div id="riskgame">
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                Risk Game
                            </p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://github.com/tony-zeidan/DreamTeam-Risk-SYSC3110">
                                <FaGithub size={30}/>
                            </a>
                            <p className='mt-2'>
                                One of my all-time favorite projects. I refined a lot of my architecture design
                                knowledge with this project.
                            </p>
                        </div>
                        <div
                            style={{backgroundImage: `url(${risk})`}}
                            className='shadow-lg shadow-[#040c16] group container bg-contain rounded-md w-96 h-96 bg-contain  flex justify-center items-center mx-auto'
                        />
                        <div className='mb-5 mt-5'>
                            <p>This project is an implementation of the classic game RISK. It was developed using the
                                Model-View-Controller architecture pattern where various Java Swing views are subscribed
                                to the game model. We created artifial players that would analyze the status of the
                                board and then subsequently make a decision.</p>
                            <p>Over the duration of this project I refined my skills in Java, and learned more about the
                                Gradle framework.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProjectsPage