import React from 'react'
import Reveal from "../Reveal";

const EducationPage = () => {
    return (
        <div>
            <div id='education' className='w-full h-full text-gray-300 flex-nowrap bg-[#181818]'>

                <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
                    <div className='mt-36'>
                        <Reveal className='pb-8 w-full'>
                            <p className='text-4xl sm:text-5xl font-bold text-white'>
                                Education
                            </p>
                            <div className='accent-rule h-[3px] w-16 rounded-full mt-4' />
                        </Reveal>
                        <Reveal delay={60}>
                            <p className='text-3xl text-start text-gray-400'>Carleton University</p>
                        </Reveal>
                        <Reveal delay={120} className='mb-5 mt-5'>
                            <p>Program: <em>Software Engineering (SYSC)</em></p>
                            <p>Degree: <em>Bachelor of Engineering (B.Eng)</em></p>
                            <p>Years: <em>2019 to 2023</em></p>
                            <p>CGPA: <em>11.05 / 12</em></p>
                            <p>Award: <em>Entrance Scholarship</em></p>
                            <p className='mt-2'>I studied for a total of 4 years and did 1 year of co-op at Carleton University. </p>
                        </Reveal>
                        <div className='mb-5 mt-5'>

<div className="flex flex-col text-gray-300">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-bold px-6 py-4 text-left">
                Course Code
              </th>
              <th scope="col" className="text-sm font-bold px-6 py-4 text-left">
                Course Name
              </th>
              <th scope="col" className="text-sm font-bold px-6 py-4 text-left">
                Letter Grade
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-bold"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-bold"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium font-bold"></td>
            </tr>
            <tr className="border-b">
                <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level One Courses:</td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                CHEM 1101
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Chemistry for Eng. Students
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                B+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                CLCV 1002
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Survey of Greek Civilization
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                COMP 1805
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Discrete Structures I
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 1010
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Introduction to Engineering
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                C
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 1101
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Mechanics 1
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                MATH 1004
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Calculus for Eng. Students
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                MATH 1005
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Differential Equations and Infinite Series for Eng. Students
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                MATH 1104
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Linear Algebra for Eng. Students
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A-
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                PHYS 1003
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introduction to Mechanics and Thermodynamics 
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A-
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                PHYS 1004
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introductory Electromagnetism and Wave Motion 
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A-
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 1005
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introduction to Software Development
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                MUSI 1002
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Issues in Popular Music
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A
              </td>
            </tr>
            <tr className="border-b border-t">
                <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level Two Courses:</td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                CCDP 2100
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Communication Skills for Eng. Students
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                B+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 2050
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Design and Analysis of Engineering Experiments
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ELEC 2501
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Circuits and Signals
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                MATH 2004
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Multivariable Calculus for Eng. Students
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 2004
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Object-Oriented Software Development
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 2006
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Foundations of Imperative Programming
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 2100
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Algorithms and Data Structures
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 2310
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introduction to Digital Signatures
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 2320
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Computer Organization and Architecture
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr className="border-b border-t">
                <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level Three Courses:</td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                COMP 3005
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Database Management Systems
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 3800
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Engineering Economics
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 3101
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Programming Languages
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A-
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 3110
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Software Design Project
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 3310
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introduction to Real-time Systems
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A-
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 3600
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Systems and Simulation
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 3303
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Real-time Concurrent Systems
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 3120
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Software Requirements Engineering
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr className="border-b border-t">
                <td colSpan={3} className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level Four Courses:</td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ECOR 4995
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Professional Practice
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A-
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                ELEC 4705
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Electronic Devices, Materials, and Transmission Media
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4001
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Operating Systems
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A-
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4005
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Discrete Simulation/Modeling
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A- / A / A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4101
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Software Validation
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4106
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Software Economy and Project Management
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4120
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Software Architecture and Design
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A- / A / A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4415
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introduction to Machine Learning
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A- / A / A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4504
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introduction to Web Development
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A- / A / A+
              </td>
            </tr>
            <tr>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4806
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Software Laboratory
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A- / A / A+
              </td>
            </tr>
            <tr className='border-b'>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                SYSC 4810
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
              Introduction to Network and Software Security
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                A
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
                            <p className='mt-4 text-sm text-gray-500'>
                                Final-year courses show the grade range rather than the exact letter. Each was
                                an A-, A or A+; I no longer have the individual letters on hand.
                            </p>
                        </div>

                        <Reveal className='pb-8 w-full mt-16'>
                            <p className='text-4xl sm:text-5xl font-bold text-white'>
                                Courses
                            </p>
                            <div className='accent-rule h-[3px] w-16 rounded-full mt-4' />
                        </Reveal>
                        <Reveal delay={60} className='mb-5'>
                            <p>Angular, The Complete Guide. Udemy, 56 hours, 2025.</p>
                        </Reveal>

                        <Reveal className='pb-8 w-full mt-16'>
                            <p className='text-4xl sm:text-5xl font-bold text-white'>
                                Publications
                            </p>
                            <div className='accent-rule h-[3px] w-16 rounded-full mt-4' />
                        </Reveal>
                        <Reveal delay={60} className='mb-24'>
                            <p>
                                Abou Zeidan, T. M., &amp; Rempel, M. "GeoHexViz: A Python package for
                                visualizing hexagonally binned geospatial data." <em>Journal of Open
                                Source Software</em>, 2023.
                            </p>
                            <ul className='mt-3 flex flex-col gap-2'>
                                <li className='px-0 cursor-auto'>
                                    <a
                                        className='text-gray-400 hover:text-cyan-500 transition-colors duration-200 break-all'
                                        href='https://joss.theoj.org/papers/c051df96dac973486cc312452575e804'
                                    >
                                        joss.theoj.org/papers/c051df96dac973486cc312452575e804
                                    </a>
                                </li>
                                <li className='px-0 cursor-auto'>
                                    <a
                                        className='text-gray-400 hover:text-cyan-500 transition-colors duration-200 break-all'
                                        href='https://cradpdf.drdc-rddc.gc.ca/PDFS/unc381/p814091_A1b.pdf'
                                    >
                                        cradpdf.drdc-rddc.gc.ca/PDFS/unc381/p814091_A1b.pdf
                                    </a>
                                </li>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EducationPage