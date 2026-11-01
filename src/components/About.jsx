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
                A Secret-cleared software developer with a backend focus in Java and Spring Boot,
                working with Java Vaadin and Angular front ends. My work covers payment gateway and
                third-party API integration, application workflow design, performance tuning, and
                security remediation. I am also the first author of GeoHexViz, a peer-reviewed
                open-source Python package published in the Journal of Open Source Software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;