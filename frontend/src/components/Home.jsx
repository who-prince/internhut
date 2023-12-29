import React from "react";
import { HashLink } from "react-router-hash-link";
import v2 from "../assets/graphic_1.png";
import Apply from "../fragments/Apply";
import DescriptionCard from "../fragments/DescriptionCard";

// #db0000 red	(219,0,0)
// #000000 black	(0,0,0)
// #ffffff white	(255,255,255)
// #564d4d grey	(86,77,77)
// #831010 maroon	(131,16,16)

const Home = () => {
  return (
    <>
      <div id="home" className=" h-full w-full bg-secondary flex">
        <div className=" w-full h-full gap-12 flex justify-center flex-col p-8 md:p-16">
          <h3 className=" font-mono font-bold text-5xl md:text-6xl text-white leading-normal">
            Empowering <br />
            Enthusiasts <br />
            <span className=" text-color_1 animate-change ">:Intern Hut</span>
          </h3>
          <p className=" text-white text-xl font-sans">
            Your Destination for Career Building. Explore internships,
            <br /> acquire skills, and embark on your path to success.
          </p>
          <HashLink
            to={"#apply"}
            className=" scroll-smooth text-white font-bold uppercase bg-color_1 h-12 w-40 rounded-md font-mono p-2 duration-200 text-xl text-center outline outline-2 -outline-offset-4 hover:outline-offset-4 hover:bg-green"
          >
            Apply Now
          </HashLink>
        </div>
        <div className=" w-full h-full hidden md:flex items-center justify-center drop-shadow-2xl">
          <img className="animate-wiggle" src={v2} alt="" />
        </div>
      </div>
      <DescriptionCard />
      <Apply />
    </>
  );
};

export default Home;
