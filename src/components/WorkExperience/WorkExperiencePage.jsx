import React from 'react';
import WorkExperience from './WorkExperience';

const WorkExperiencePage = () => {
    return (

        <div>
            <div id='projects' className='w-full md:h-screen text-gray-300 justify-center bg-[#0a192f]'>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                        <div className='pb-8 w-full flex justify-center items-center flex-col'>
                            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>
                                Industry Experience
                            </p>
                            <p className='py-6 text-2xl'>Please find my industry experience in software development below</p>
                        </div>
                        <div className="w-full">
                            <WorkExperience
                                title="NAV CANADA"
                                position="Surveillance Engineering Student"
                                start_date={new Date(2022, 4)}
                                end_date={new Date(2022, 8)}
                                bullets={[
                                    "Took part in an AGILE development team performing iteration planning, reviews, and regular \n" +
                                    "meetings.",
                                    "Created a configurable installation-site specific installer for a React project using INNO Setup.",
                                    "Performed test cases for a wide range of applications and ensured that they met quality \n" +
                                    "control standards.",
                                    "Performed code reviews for various software changes that were being merged into the \n" +
                                    "codebase.",
                                    " Extended existing documentation to incorporate new and updated terminologies."
                                ]}
                            />
                        </div>
                        <div className="mt-5 mb-5">
                            <WorkExperience
                                title="Canadian Joint Operations Command (CJOC)"
                                position="Joint Analyst"
                                start_date={new Date(2021, 1)}
                                end_date={new Date(2022, 0)}
                                bullets={[
                                    "Developed a Python package for plotting geospatial hexagonally binned data.",
                                    "Extended the package with a script to make the process simple and repeatable.",
                                    "Presented the package at two independent seminars.",
                                    "Aided in the analysis for an aeronautical Search and Rescue study.",
                                    "Participated in and contributed to weekly team meetings / activities.",
                                    "Brainstormed with team members to discuss and select most-suitable designs.",
                                    "Developed supporting documentation, including a reference document, sphinx \n" +
                                    "documentation, and an external publication document."
                                ]}
                            />
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default WorkExperiencePage;