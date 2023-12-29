import React from "react";
import { Blocks, Code, GitBranch, Users2 } from "lucide-react";
import Domain from "./Domain";

const DescriptionCard = () => {
  return (
    <div className=" h-full w-full bg-secondary">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 p-4 md:p-12">
        <div className="outline-dashed outline-silver bg-opacity-80 hover:bg-opacity-100 p-4 flex flex-col flex-wrap gap-6 text-white font-sans font-medium duration-200 outline-2 rounded-md md:h-[40%] w-[100%] md:w-[25%] bg-primary drop-shadow-md ">
          <div className="h-20 w-20 rounded-full bg-color_1 flex justify-center items-center">
            <Code size={40} />
          </div>
          <h3 className="uppercase font-bold">Nurture Your Basics</h3>
          <p>
            We believe in networking to connect with other interns who are
            interested in the same things.
          </p>
        </div>
        <div className="outline-dashed outline-silver bg-opacity-80 hover:bg-opacity-100 p-4 flex flex-col gap-6 text-white font-sans font-medium duration-200 outline-2 rounded-md md:h-[40%] w-[100%] md:w-[25%] bg-primary drop-shadow-md ">
          <div className="h-20 w-20 rounded-full bg-color_1 flex justify-center items-center">
            <Blocks size={40} />
          </div>
          <h3 className="uppercase font-bold">Improve your basics</h3>
          <p>
            We believe in networking to connect with other interns who are
            interested in the same things.
          </p>
        </div>
        <div className="outline-dashed outline-silver bg-opacity-80 hover:bg-opacity-100 p-4 flex flex-col gap-6 text-white font-sans font-medium duration-200 outline-2 rounded-md md:h-[40%] w-[100%] md:w-[25%] bg-primary drop-shadow-md ">
          <div className="h-20 w-20 rounded-full bg-color_1 flex justify-center items-center">
            <Users2 size={40} />
          </div>
          <h3 className="uppercase font-bold">Network with people</h3>
          <p>
            We believe in networking to connect with other interns who are
            interested in the same things.
          </p>
        </div>
        <div className="outline-dashed outline-silver bg-opacity-80 hover:bg-opacity-100 p-4 flex flex-col gap-6 text-white font-sans font-medium duration-200 outline-2 rounded-md md:h-[40%] w-[100%] md:w-[25%] bg-primary drop-shadow-md ">
          <div className="h-20 w-20 rounded-full bg-color_1 flex justify-center items-center">
            <GitBranch size={40} />
          </div>
          <h3 className="uppercase font-bold">Nurture Your Basics</h3>
          <p>
            We believe in networking to connect with other interns who are
            interested in the same things.
          </p>
        </div>
        </div>
        <Domain/>
    </div>
  );
};

export default DescriptionCard;
