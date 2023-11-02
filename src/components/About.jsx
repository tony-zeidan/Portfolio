import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#181818] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#222222] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 rounded-lg">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Tony Zeidan.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A software developer with experience in both Desktop and Web Applications.
                I have a special interest in the fields of Machine Learning and Cybersecurity.
                I am well-knowledged in UI/UX principles and practices. 
                In addition to software development, I am also a
                technical writer having published various documents corresponding to my software projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;