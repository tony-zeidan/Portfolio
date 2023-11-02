import React, {useEffect} from 'react'
import Navbar from "../Navbar";

const EducationPage = () => {
    return (
        <div>
            <Navbar/>
            <div id='projects' className='w-full h-full text-gray-300 flex-nowrap bg-[#181818]'>

                <div className='max-w-[1000px] mx-auto p-4 w-full h-full'>
                    <div id="geohexviz" className='mt-36'>
                        <div className='pb-8 w-full'>
                            <p className='text-5xl text-start font-bold border-b-4 text-gray-300 border-cyan-500'>
                                Education
                            </p>
                        </div>
                        <div>
                            <p className='text-3xl text-start text-gray-400'>Carleton University</p>
                        </div>
                        <div className='mb-5 mt-5'>
                            <p>Program: <em>Software Engineering</em></p>
                            <p>Degree: <em>Bachelors of Engineering (B.Eng)</em></p>
                            <p>CGPA: <em>11.30 / 12</em></p>
                            <p className='mt-2'>I studied for a total of 4 years and did 1 year of co-op at Carleton University. </p>
                        
<div class="flex flex-col text-gray-300">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-bold px-6 py-4 text-left">
                Course Code
              </th>
              <th scope="col" class="text-sm font-bold px-6 py-4 text-left">
                Course Name
              </th>
              <th scope="col" class="text-sm font-bold px-6 py-4 text-left">
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
            <tr className="border-b" colspan='3'>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level One Courses:</td>
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
            <tr className="border-b border-t" colspan='3'>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level Two Courses:</td>
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
            <tr className="border-b border-t" colspan='3'>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level Three Courses:</td>
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
            <tr className="border-b border-t" colspan='3'>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">Level Four Courses:</td>
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
                In Progress
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
                In Progress
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
                In Progress
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
                In Progress
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
                In Progress
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EducationPage