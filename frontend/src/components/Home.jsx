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
      <div id="home" className="h-full w-full bg-secondary flex items-center">
        <div className=" w-full h-full gap-12 flex justify-center flex-col p-8 md:p-16">
          <div className="flex flex-col gap-4">
            <p className=" font-hatton font-bold text-5xl md:text-5xl leading-loose">
              Unlocking the Power
            </p>
            <p className=" font-hatton font-bold text-5xl md:text-5xl leading-loose">
              of Virtual Internships:
            </p>
            <p className=" font-hatton font-bold text-5xl md:text-5xl leading-loose">
              Shaping the future,
            </p>
            <p className=" font-hatton font-bold text-5xl md:text-5xl leading-loose">
              Creating Change.
            </p>
          </div>
          <p className="text-xl font-hatton">
            Your Destination for Career Building. Explore internships,
            <br /> acquire skills, and embark on your path to success.
          </p>
          <HashLink
            to={"#apply"}
            className=" scroll-smooth text-white font-bold uppercase bg-primary h-12 w-40 rounded-xl font-mono p-2 duration-200 text-xl text-center outline outline-2 outline-gray -outline-offset-4 hover:outline-offset-4 hover:bg-green"
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
