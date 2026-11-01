import React from 'react';

const skills = [
  'Java',
  'Java: Spring Boot',
  'Java: Vaadin',
  'JUnit',
  'Python',
  'Python: Flask',
  'Python: Pandas/NumPy',
  'SQL',
  'TypeScript',
  'JavaScript',
  'Angular',
  'ReactJS',
  'PostgreSQL/Oracle',
  'Docker',
  'CI/CD: Bamboo/Azure DevOps',
  'Git/GitHub',
];

const Skills = () => {
  return (
    <div id='skills' className='w-full h-screen bg-[#181818] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with:</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              {skills.map(skill => (
                  <div key={skill} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <p className='my-4'>{skill}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};
export default Skills;
