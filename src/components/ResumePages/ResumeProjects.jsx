import React from 'react';

function ResumeProjects() {

    return (
        <div className='w-full h-full text-gray-300 flex-nowrap bg-[#0a192f]'>
            <div id="report">
                <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
                    <div className='mt-36 pb-8 w-full'>
                        <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                            Profile
                        </p>
                    </div>
                    <div className='mb-5'>
                        <p>Tony Abou Zeidan is a soon-to-be graduate from Carleton University, enrolled in the Bachelor
                            of Engineering (Software) program.
                            Having completed four co-op terms with the Canadian Joint Operations Command and NAV Canada,
                            Tony is looking to join a progressive organization where he can use his technical and
                            communication skills and experience to help advance the organization’s software development
                            goals.</p>
                    </div>
                    <div className='pb-8 w-full'>
                        <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                            Education
                        </p>
                    </div>
                    <div className='mb-5'>
                        <p>Bachelor of Engineering, Software (SYSC)</p>
                        <p>Carleton University (Ottawa, ON)</p>
                        <p>September 2018 - May 2023</p>
                        <ul className='list-disc list-inside'>
                            <li>CGPA 11.30/12</li>
                            <li>Entrance Scholarship ($2000)</li>
                        </ul>
                    </div>
                    <div className='pb-8 w-full'>
                        <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                            Skills
                        </p>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>Languages</p>
                        <ul className='list-disc list-inside'>
                            <li>Python</li>
                            <li>Java</li>
                            <li>HTML, CSS, JavaScript</li>
                            <li>GoLang</li>
                            <li>C, C++</li>
                        </ul>
                        <p className='text-2xl mt-3'>Frameworks</p>
                        <ul className='list-disc list-inside'>
                            <li>Python Flask</li>
                            <li>React</li>
                            <li>Spring Boot</li>
                        </ul>
                        <p className='text-2xl mt-3'>Operating Systems</p>
                        <ul className='list-disc list-inside'>
                            <li>Windows</li>
                            <li>Linux</li>
                            <li>QNX</li>
                        </ul>
                        <p className='text-2xl mt-3'>Tools</p>
                        <ul className='list-disc list-inside'>
                            <li>MS Office</li>
                            <li>Git/GitHub</li>
                            <li>IBM Jazz</li>
                            <li>Python: Pandas, Numpy, Anaconda, Pip</li>
                        </ul>
                    </div>
                    <div className='pb-8 w-full'>
                        <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                            Applied Projects
                        </p>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>GeoHexViz</p>
                        <p className='text-1xl'>Lead Developer</p>
                        <p>Tools: Python (Pandas)</p>
                        <p>Date range: <em>February 2021 - Present</em></p>
                        <ul className='list-disc list-inside'>
                            <li>Designed a Python package for the generation of hexagonally binned geospatial
                                visualizations.
                            </li>
                            <li>Created various types of documentation including Sphinx documentation, and reference
                                manuals.
                            </li>
                            <li>Made continuous integration tests using GitHub actions workflows.</li>
                            <li>Packaged the project using setuptools and ensured correct installation through tests on
                                various systems and environments.
                            </li>
                            <li>Package currently being considered for publication within the Journal of Open Source
                                Software (JOSS).
                            </li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>Evase</p>
                        <p className='text-1xl'>Developer / Team Lead</p>
                        <p>Tools: ReactJS, Python (Flask), Docker</p>
                        <p>Date range: <em>September 2022 - Present</em></p>
                        <ul className='list-disc list-inside'>
                            <li>A Python web application for the security threat analysis of backend Python code.</li>
                            <li>Worked in a team conforming to AGILE methodologies.</li>
                            <li>Designed and developed portions of the SQL, and password guessing vulnerability
                                detection algorithms.
                            </li>
                            <li>Implemented the prototype of the React front-end.</li>
                            <li>Wrote many unit tests for various aspects of the back-end including those for
                                vulnerability detection algorithms.
                            </li>
                            <li>Containerized and deployed the program using Docker.</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>Sapphire Bot</p>
                        <p className='text-1xl'>Sole Developer</p>
                        <p>Tools: GoLang</p>
                        <p>Date range: <em>September 2021 - Present</em></p>
                        <ul className='list-disc list-inside'>
                            <li>Developed a discord chat bot that allows users to interact with OpenAI models directly
                                through Discord chats.
                            </li>
                            <li>Performed many manual tests in test discord servers and the ensured correct operation.
                            </li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>Elevator Control System</p>
                        <p className='text-1xl'>Developer / Team Lead</p>
                        <p>Tools: Java (Concurrent)</p>
                        <p>Date range: <em>September 2021 - May 2022</em></p>
                        <ul className='list-disc list-inside'>
                            <li>Designed and assembled a program that simulates an elevator control system that uses the
                                Shared Memory Model and UDP to send requests from one Thread to another.
                            </li>
                            <li>Developed an understanding of concurrency and concurrent processes working with and
                                competing against one another.
                            </li>
                            <li>Used JIRA to facilitate the tasks of each team member and coordinate efforts.</li>
                            <li>Used JIRA to facilitate the tasks of each team member and coordinate efforts.</li>
                            <li>Developed unit tests for the code using the JUnit framework to ensure consistent
                                output.
                            </li>
                            <li>Maintained Javadoc comments to make the source code clear and easy to understand.</li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>Ruby Bot</p>
                        <p className='text-1xl'>Sole Developer</p>
                        <p>Tools: Java (Gradle)</p>
                        <p>Date range: <em>September 2020 - September 2021</em></p>
                        <ul className='list-disc list-inside'>
                            <li>Designed and assembled a Discord chat bot for the management of Discord chat servers.
                            </li>
                            <li>Used the API for Discord to allow the bot to subscribe to incoming messages and respond
                                to them accordingly.
                            </li>
                            <li>Joined the Discord API community to seek help with using the API.</li>
                            <li>• Performed many manual tests in test discord servers and the ensured correct
                                operation.
                            </li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>RISK Game</p>
                        <p className='text-1xl'>Developer / Team Lead</p>
                        <p>Tools: Java (Swing)</p>
                        <p>Date range: <em>October 2019 - December 2019</em></p>
                        <ul className='list-disc list-inside'>
                            <li>Developed a Java implementation of the classic board game RISK using
                                Model-View-Controller architecture.
                            </li>
                            <li>Implemented the GUI of the game using multiple Swing views subscribed to the game model
                                (observer pattern).
                            </li>
                            <li>Created artificial players that would use an algorithm to determine their next best move
                                in-game.
                            </li>
                            <li>Wrote various unit tests and performed many manual tests.</li>
                        </ul>
                    </div>
                    <div className='pb-8 w-full flex justify-center flex-col'>
                        <p className='text-5xl text-start font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                            Work Experience
                        </p>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>NAV CANADA</p>
                        <p className='text-1xl'>Surveillance Engineering Student</p>
                        <p>Date range: <em>May 2022 - September 2022</em></p>
                        <ul className='list-disc list-inside'>
                            <li>Took part in an AGILE development team performing iteration planning, reviews, and
                                regular meetings.
                            </li>
                            <li>Created a configurable installation-site specific installer for a React project using
                                INNO Setup.
                            </li>
                            <li>Made various small changes to a program that ran on both QNX 6 and QNX 7 real-time
                                operating systems.
                            </li>
                            <li>Performed test cases for a wide range of applications and ensured that they met quality
                                control standards.
                            </li>
                            <li>Performed code reviews for various software changes that were being merged into the
                                codebase.
                            </li>
                        </ul>
                    </div>
                    <div className='mb-5'>
                        <p className='text-2xl'>DND - Canadian Joint Operations Command (CJOC)</p>
                        <p className='text-1xl'>Surveillance Engineering Student</p>
                        <p>Date range: <em>February 2021 - January 2022</em></p>
                        <ul className='list-disc list-inside'>
                            <li>Developed a Python package for plotting geospatial hexagonally binned data
                                (GeoHexViz).
                            </li>
                            <li>Extended the package with a script to make the process simple and repeatable.</li>
                            <li>Presented the package at two independent seminars.</li>
                            <li>Aided in the analysis for an aeronautical Search and Rescue study.</li>
                            <li>Participated in and contributed to weekly team meetings / activities.</li>
                            <li>Brainstormed with team members to discuss and select most-suitable designs.</li>
                            <li>Developed supporting documentation, including a reference document, sphinx
                                documentation, and an external publication document.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumeProjects;