import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <div name="about" id="about" className="w-full bg-[#181818] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full min-h-screen px-4 py-24">
        <div className="w-full max-w-[1000px] rounded-xl bg-[#202020] border border-white/[0.07] p-8 sm:p-12 lg:p-16">
          <Reveal>
            <SectionHeading index="01" title="About" align="left" />
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-5">
            <Reveal className="sm:col-span-2 text-3xl sm:text-4xl font-bold text-white leading-tight">
              <p>
                Hi. I'm Tony Zeidan.
              </p>
            </Reveal>
            <Reveal delay={80} className="sm:col-span-3">
              <p className="leading-relaxed text-gray-400">
                My focus is backend work in Java and Spring Boot, with Java Vaadin and Angular
                front ends. That covers payment gateway and third-party API integration,
                application workflow design, performance tuning, and security remediation. I
                hold a Bachelor of Engineering in Software from Carleton University. I'm the
                first author of a peer-reviewed open-source Python package.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
