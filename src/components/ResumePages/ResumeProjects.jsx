import React from 'react';
import ExperienceEntry from "./ExperienceEntry";

function ResumeProjects() {

    return (
        <div className='w-full h-full text-gray-300 flex-nowrap bg-[#0a192f]'>
            <div id="report">
                <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
                    <div className='mt-36 pb-8 w-full'>
                        <div className="text-center border-b-4 border-cyan-500">
                            <p className="font-bold">Tony Zeidan</p>
                            <p>613-608-0124</p>
                            <p><a href="mailto:tony.azp25@gmail.com">tony.azp25@gmail.com</a></p>
                            <p><a href="www.tonyabouzeidan.com">www.tonyabouzeidan.com</a></p>
                        </div>
                        <div className='w-full'>
                            <a download href="/cv/Tony-Zeidan-CV.pdf">
                                <button>
                                    Download PDF
                                </button>
                            </a>
                        </div>
                        <p className='text-3xl text-start font-bold text-gray-300 mt-5'>
                            PROFILE
                        </p>
                        <div className="mt-3">
                            <p>
                                Tony Abou Zeidan holds a Bachelor’s Degree of Engineering (Software) from Carleton University. Mr.
                                Zeidan has completed four co-op terms with the Canadian Joint Operations Command and NAV Canada,
                                and is looking to join a progressive organization where he can use his technical and communication skills
                                and experience to help advance the organization’s software development goals. Mr. Zeidan brings
                                several skill-sets to bear including, but not limited to:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Conceptual Knowledge
                                    <ul className="list-disc list-inside">
                                        <li>Software Development</li>
                                        <li>Web Development</li>
                                        <li>Cybersecurity</li>
                                        <li>Data Science</li>
                                        <li>Machine learning</li>
                                    </ul>
                                </li>
                                <li>Programming Languages
                                    <ul className="list-disc list-inside">
                                        <li>Python</li>
                                        <li>Java</li>
                                        <li>C, C++</li>
                                        <li>GoLang</li>
                                        <li>HTML, CSS, JavaScript</li>
                                        <li>Visual Basic</li>
                                        <li>Databases: MySQL, SQLite, Oracle</li>
                                    </ul>
                                </li>
                                <li>Frameworks
                                    <ul className="list-disc list-inside">
                                        <li>ReactJS</li>
                                        <li>Python Flask</li>
                                        <li>SpringBoot</li>
                                        <li>Junit</li>
                                    </ul>
                                </li>
                                <li>Tooling
                                    <ul className="list-disc list-inside">
                                        <li>NodeJS</li>
                                        <li>Anaconda, Pip, PyPI</li>
                                        <li>Pandas, Numpy</li>
                                    </ul>
                                </li>
                                <li>Productivity
                                    <ul className="list-disc list-inside">
                                        <li>Office 365</li>
                                        <li>JIRA</li>
                                    </ul>
                                </li>
                                <li>
                                    Operating Systems
                                    <ul className="list-disc list-inside">
                                        <li>Windows</li>
                                        <li>Linux</li>
                                        <li>QNX</li>
                                    </ul>
                                </li>
                                <li>Version Control Systems
                                    <ul className="list-disc list-inside">
                                        <li>Git/GitHub</li>
                                        <li>Jazz Version Control System</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='pb-8 w-full'>
                        <p className='text-3xl text-start font-bold text-gray-300'>
                            EXPERIENCE
                        </p>
                        <ExperienceEntry
                            num="3"
                            dateStr="November 2022 – January 2023 (3 months)"
                            titleStr="Primary Developer/Analyst"
                            orgStr="Canadian Joint Operations Command, Department of National Defence"
                            projStr="GeoHexViz (Python)"
                            linkStr="https://github.com/mrempel/geohexviz"
                            infoLst={
                                [
                                    "Python package for the generation of hexagonally binned geospatial visualizations.",
                                    ["Extensive software documentation.", "Created a journal submission for the software.", "Made Sphinx generated code documentation."],
                                    "Made continuous integration tests using GitHub Actions.",
                                    "Packaged the project using setup tools and ensured correct installation through tests on various \n" +
                                    "systems and environments using PHP and shell scripting.",
                                    "Responded to JOSS (see below) peer-review and fixed issues with installation and running \n" +
                                    "code demos."
                                ]
                            }
                        />
                        <ExperienceEntry
                            num="2"
                            dateStr="April 2022 - September 2022 (6 months)"
                            titleStr="Surveillance Engineering Student"
                            orgStr="NAV Canada"
                            infoLst={
                            [
                                "Took part in an AGILE development team performing iteration planning, reviews, and regular \n" +
                                "meetings.",
                                "Created a configurable installation-site specific installer for a React project using INNO Setup.",
                                " Performed test cases for a wide range of applications and ensured that they met quality control \n" +
                                "standards.",
                                "Performed code reviews for various software changes that were being merged into the codebase.",
                                "Extended existing documentation to incorporate new and updated terminologies.",
                                "Worked in an AGILE team charged with the development of systems for managing and distributing air \n" +
                                "traffic surveillance data.",
                                " Attended daily scrums where we looked at tasks on the Kanban board and discussed our progress on \n" +
                                "those tasks.",
                                ["When tasks were competed they would go through a review and testing before being accepted.", "Performed code reviews for changes pending merge.", "Took on various testing tasks for changes."],
                                ["Worked with a system called SIN that ran on both QNX 6 and QNX 7 real-time operating systems.", "Made a variety of small patches to the system including terminology changes."],
                                ["Worked with SIN called CAMP4 that provided GUI and controls for the SIN software.", "Made a variety of configuration changes to CAMP4 and changes to the site-specific installer (installer was made using INNO setup script)."]
                            ]
                            }
                        />
                        <ExperienceEntry
                            num="1"
                            dateStr="February 2021 – February 2022 (13 months)"
                            titleStr="Developer/Analyst"
                            orgStr="Canadian Joint Operations Command, Department of National Defence"
                            projStr="GeoHexViz (Python)"
                            linkStr="https://github.com/mrempel/geohexviz"
                            infoLst={
                                [
                                    "Developed a Python package for plotting geospatial hexagonally binned data.",
                                    "Extended the package with a script to make the process simple and repeatable.",
                                    "Presented the package at two independent seminars.",
                                    "Aided in the analysis for an aeronautical Search and Rescue study.",
                                    "Participated in and contributed to weekly team meetings / activities.",
                                    "Brainstormed with team members to discuss and select most-suitable designs.",
                                    "Developed supporting documentation, including a reference document, sphinx documentation, and an \n" +
                                    "external publication document.",
                                    "Participated in weekly CJOC meetings.",
                                    "Worked closely with my mentor.",
                                    ["I was first tasked with generating hexagonally binned geospatial maps for a co-worker using Python.", "Upon demonstrating the power of Python for these maps, I was tasked with developing a Python \n" +
                                    "package for creating these maps.", "Extended this package to include a script for users with little technological knowledge."],
                                    "I presented the project at two independent organization-wide seminars due to interest in the project.",
                                    "The package was used by my co-worker to develop maps that were placed in a DND scientific report \n" +
                                    "(an aeronautical search and rescue study).",
                                    "During development I kept the code really-well documented.",
                                    ["I was tasked with writing a DND reference document for the software which was then published \n" +
                                    "internally.", <a href="https://cradpdf.drdc-rddc.gc.ca/PDFS/unc381/p814091_A1b.pdf">https://cradpdf.drdc-rddc.gc.ca/PDFS/unc381/p814091_A1b.pdf</a>, "I met with my mentor many times throughout this process for peer-review. "],
                                    ["My mentor and I (very happy with the quality of the product) decided to submit the software to the \n" +
                                    "Journal of Open Source Software (JOSS).", "Has been entered into the journal.", <a href="https://joss.theoj.org/papers/c051df96dac973486cc312452575e804">https://joss.theoj.org/papers/c051df96dac973486cc312452575e804</a>, " The software is currently open-source and will stay that way."]

                                ]
                            }
                        />
                    </div>
                    <div className='pb-8 w-full'>
                        <span className='text-3xl text-start font-bold text-gray-300 '>
                            <p className="inline">APPLIED PROJECTS</p> <p className="text-sm italic inline">(after-hours developmental projects)</p>
                        </span>
                        <ExperienceEntry
                            prefixStr="Applied Project"
                            num="5"
                            dateStr="September 2022 – May 2023 (9 months)"
                            titleStr="Primary Developer, Team Lead"
                            projStr="EVASE (Python Flask, React JavaScript)"
                            infoLst={
                                [
                                    "This is a capstone project that is a prerequisite for graduation.",
                                    ["Software web-application for the security analysis of Python back-end code.", "Detects potential SQL injection attack behaviours in Python back-end code."],
                                    ["Developed with a team using AGILE methodology.", "Weekly meetings with the supporting professor, many meetings with the team."],
                                    "Developed with client-server architecture.",
                                    "Designed and implemented the basic structures required for analysis.",
                                    "Participated in the design and development of the SQL injection vulnerability detection \n" +
                                    "algorithm.",
                                    "Designed and developed the prototype and final version of the React front-end.",
                                    "Wrote many unit tests for the software testing various aspects of the backend of the \n" +
                                    "system.",
                                    "Documented the functions within the software and generated professional Sphinx documentation."
                                ]
                            }
                        />
                        <ExperienceEntry
                            prefixStr="Applied Project"
                            num="4"
                            dateStr="January 2023 – May 2023 (5 months)"
                            titleStr="Primary Developer"
                            projStr="Fake Amazon Bookstore (SpringBoot, JavaScript/JQuery, Thymeleaf)"
                            linkStr="https://github.com/tony-zeidan/fake-amazon-bookstore"
                            infoLst={
                                [
                                    "Collaborated in a team using AGILE methodology to develop a \n" +
                                    "SpringBoot/Thymeleaf/JavaScript application simulating an Amazon Bookstore.",
                                    "Implemented user functionality for browsing, adding, and removing books from a \n" +
                                    "shopping cart, as well as checking out.",
                                    "Developed SpringBoot controllers and services, managing application logic and data \n" +
                                    "flow.",
                                    "Created JavaScript and HTML components to enhance the user experience, enabling \n" +
                                    "seamless cart interactions.",
                                    "Designed and implemented website CSS for an engaging and visually appealing user \n" +
                                    "interface.",
                                    "Integrated Aspect Oriented Programming to log service function times, optimizing \n" +
                                    "application performance.",
                                    "Assisted in the implementation of Circuit Breaker functionality to ensure system resilience \n" +
                                    "and fault tolerance.",
                                    "Developed comprehensive integration tests, leveraging GitHub Actions for automated \n" +
                                    "test execution and continuous integration.",
                                    "Diligently documented code with JavaDoc comments, ensuring readability and \n" +
                                    "maintainability for fellow team members and future developers."
                                ]
                            }
                        />
                        <ExperienceEntry
                            prefixStr="Applied Project"
                            num="3"
                            dateStr="January 2022 – May 2022 (5 months)"
                            titleStr="Primary Developer, Team Leader"
                            projStr="Elevator Control System (Java)"
                            linkStr="https://github.com/tony-zeidan/SYSC3303_elevator_project"
                            infoLst={
                                [
                                    "Designed and assembled a program that simulates an elevator control system that uses \n" +
                                    "the Shared Memory Model and UDP to send requests from one Thread to another.",
                                    "Developed an understanding of concurrency and concurrent processes working with and \n" +
                                    "competing against one another.",
                                    "Used JIRA to facilitate the tasks of each team member and coordinate efforts.",
                                    "Developed unit tests for the code using the JUnit framework to ensure consistent output.",
                                    "Maintained Javadoc comments to make the source code clear and easy to understand."
                                ]
                            }
                        />
                        <ExperienceEntry
                            prefixStr="Applied Project"
                            num="2"
                            dateStr="September 2020 – September 2021 (13 months)"
                            titleStr="Primary Developer"
                            projStr="Ruby Bot (Java)"
                            linkStr="https://github.com/tony-zeidan/RubyBot"
                            infoLst={
                                [
                                    "Designed and assembled a Discord chat bot for the management of Discord chat \n" +
                                    "servers.",
                                    "Used the API for Discord to allow the bot to subscribe to incoming messages and \n" +
                                    "respond to them accordingly.",
                                    "Joined the Discord API community to seek help with using the API.",
                                    "Performed many manual tests in test discord servers and the ensured correct operation."
                                ]
                            }
                        />
                        <ExperienceEntry
                            prefixStr="Applied Project"
                            num="1"
                            dateStr="September 2019 – January 2020 (5 months)"
                            titleStr="Primary Developer, Team Leader"
                            projStr="RISK Game (Java, Java Swing)"
                            linkStr="https://github.com/tony-zeidan/DreamTeam-Risk-SYSC3110"
                            infoLst={
                                [
                                    "Developed a Java Swing-based game inspired by the popular board game RISK as part of a school project.",
                                    "Designed and implemented the algorithms for the Artificial Intelligence (AI) players.",
                                    "Took responsibility for creating many aspects of the User Interface (UI), including the interactive map and stats panel.",
                                    "Documented all the functions and codebase using JavaDoc for better understanding and maintainability.",
                                    "Applied problem-solving skills to develop the game logic and to debug issues during development.",
                                    "Worked independently on the project, showing initiative and self-learning ability."
                                ]
                            }
                        />

                    </div>
                    <div className='pb-8 w-full'>
                        <p className='text-3xl text-start font-bold text-gray-300'>
                            EDUCATION
                        </p>
                        <div className="mt-3">
                            <p>Bachelor of Engineering, Software (SYSC), Carleton University (Ottawa ON), May 2023</p>
                            <ul className="list-disc list-inside">
                                <li>Entrance Scholarship ($2000)</li>
                                <li>
                                    <span className="inline">
                                        <p className="inline font-bold">Record of Grades</p> - Tony Abou Zeidan(Software Engineering – SYSC)
                                    </span>
                                    <ul className="list-disc list-inside">
                                        <li>Cumulative Grade Point Average: 11.05/12 (A)</li>
                                        <li>Number of Academic (4 month) Terms Completed: 8</li>
                                        <li> Co-op (4 Month) Work Terms Completed: 4</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='pb-8 w-full'>
                        <p className='text-3xl text-start font-bold text-gray-300'>
                            VOLUNTEER/EXTRACURRICULAR EXPERIENCE
                        </p>
                        <div className="mt-3">
                            <p className="font-bold">May 2023 – Present</p>
                            <p className="font-bold">Guest Lecturer</p>
                            <p className="italic">Holy Trinity Catholic High School, Ottawa ON</p>
                            <ul className="list-disc list-inside">
                                <li>Lectured various students in the Computer Science class about the field of Computer Science and what I learned during my education and work experience.</li>
                                <li>Answered many questions about Computer Science in general and difficulties within University.</li>
                                <li>Acted as a contact for students to ask questions apart from the guest lectures.</li>
                            </ul>
                        </div>
                        <div className="mt-3">
                            <p className="font-bold">March 2017 – April 2017 (2 months)</p>
                            <p className="font-bold">Coding Team Member</p>
                            <p className="italic">ECOO Coding Competition, Ottawa ON</p>
                            <ul className="list-disc list-inside">
                                <li>Gathered with team members to practice for the competition using coding problems from previous years.</li>
                                <li>Successfully competed to complete five difficult coding problems.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ResumeProjects;