import React from "react";
import P1 from "../assets/1adb6fb9-d408-4c07-8045-1de61f971223.jpg";
import P2 from "../assets/useVector.png";

const About = () => {
  return (
    <div className="h-full w-full bg-secondary flex flex-col justify-between items-center ">
      <div className=" h-12 w-full flex justify-center items-center mt-4">
        <h1 className=" text-5xl text-white uppercase font-extrabold tracking-widest ">
          About Us
        </h1>
      </div>
      <div className="flex h-full w-full mt-4 ">
        <div className="w-[100%] md:w-[50%] h-[90%] p-8 flex flex-col gap-4 text-white">
          <p className="tracking-widest">
            At intern hut, we believe in nurturing talent, fostering innovation,
            and providing real-world experiences to the next generation of
            professionals.
          </p>
          <div className=" w-full flex gap-4 flex-col tracking-widest bg-primary bg-opacity-30 p-2 rounded-md">
            <p className="font-sans">
              <h1 className="font-bold uppercase underline text-lg font-mono text-color_1">
                Diverse Opportunities:
              </h1>{" "}
              Our internship programs gives you opportunities to create real
              world applications.No matter your field of interest, we have an
              internship that suits you.
            </p>
            <p>
              <h1 className="font-bold underline text-lg font-mono text-color_1 uppercase">
                Hands-on Experience:
              </h1>{" "}
              You won't be making coffee runs here. Our interns get to work on
              meaningful projects from day one, gaining valuable experience that
              will set them apart in their future careers.
            </p>
            <p>
              <h1 className="font-bold uppercase underline text-lg font-mono text-color_1">
                Mentorship:
              </h1>{" "}
              We understand that learning doesn't happen in isolation. That's
              why our internships come with dedicated mentors who will guide and
              support you throughout your journey.
            </p>
          </div>
          <div className="mt-2 flex flex-col md:flex-row justify-between items-center bg-green bg-opacity-20 rounded-md p-2">
            <img className="h-28 w-28 rounded-full" src={P1} alt="" />
            <p className="w-full md:w-[80%] tracking-wide font-semibold">
              Prince Kumar Chaurasia is a student pursuing bachelor's in
              technology. <br />
              <br />
              He is a technology enthusiast who wants to help the students to
              experience real-world and practical implementation of the skills
              they aquire in the field of computer software and technology.
            </p>
          </div>
        </div>
        <div className=" h-[90%] w-[50%] hidden md:flex justify-center items-center">
          <img className=" h-[120%] animate-wiggle" src={P2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
