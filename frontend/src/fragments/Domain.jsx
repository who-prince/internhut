import React from "react";
import v1 from "../assets/gif_1.gif";

const Domain = () => {
  return (
    <div className=" w-full h-full bg-secondary p-8 flex justify-between flex-row items-center">
      <div className="hidden md:block">
        <img className="h-96" src={v1} alt="" />
      </div>
      <div className=" h-full w-[100%] md:w-[50%] flex justify-center flex-col gap-4 ">
        <div className=" w-full ">
          <h2 className="text-color_1 text-4xl font-mono font-bold hidden md:block">
            Domains We offer Internships in:
          </h2>
          <p className="text-color_1 text-4xl font-mono font-bold md:hidden">
            Our Domains:
          </p>
          <p className="text-md font-sans">
            At Intern Hut, we focus on various aspect of computer software
            engineering and give our 100% to bring your ideas to reality.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 font-mono mt-4">
          <div className=" w-full flex justify-center items-center gap-12 flex-col">
            <div className=" cursor-pointer h-12 flex items-center justify-center font-bold text-xl w-full md:w-80 bg-primary text-white rounded-md hover:bg-color_1 duration-200 ">
              Web Development (Basic)
            </div>
            <div className=" cursor-pointer h-12 flex items-center justify-center font-bold text-xl w-full md:w-80 bg-primary text-white rounded-md hover:bg-color_1 duration-200 ">
              Web Development (Advanced)
            </div>
            <div className=" cursor-pointer h-12 flex items-center justify-center font-bold text-xl w-full md:w-80 bg-primary text-white rounded-md hover:bg-color_1 duration-200 ">
              Android Development
            </div>
          </div>
          <div className=" w-full flex justify-center items-center gap-12 flex-col">
            <div className=" h-12 flex items-center justify-center font-bold text-xl w-full md:w-80 bg-primary text-white rounded-md hover:bg-color_1 duration-200 cursor-pointer ">
              Machine Learning
            </div>
            <div className=" h-12 flex items-center justify-center font-bold text-xl w-full md:w-80 bg-primary text-white rounded-md hover:bg-color_1 duration-200 cursor-pointer ">
              Data Science
            </div>
            <div className=" h-12 flex items-center justify-center font-bold text-xl w-full md:w-80 bg-primary text-white rounded-md hover:bg-color_1 duration-200 cursor-pointer ">
              More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
