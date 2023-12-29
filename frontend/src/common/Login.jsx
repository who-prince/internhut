import React from "react";
import L1 from "../assets/login.png";
import Logincard from "../fragments/Logincard";

const Login = () => {
  return (
    <div className="h-[100vh] w-full bg-secondary flex justify-center items-center ">
      <div className="w-[50%] hidden md:flex justify-center items-center">
        <div className="h-full flex justify-center items-center flex-col p-4 ml-12 gap-12">
          <img className="h-96 animate-wiggle" src={L1} alt="" />
          <h1 className=" font-mono text-white text-4xl text-center uppercase font-extrabold">
            practical Step into the <br />
            <span className=" text-color_1">world of tech.</span>
          </h1>
        </div>
      </div>
      <div className="h-full w-full md:w-[50%] p-8 flex justify-center items-center -mt-28">
        <Logincard />
      </div>
    </div>
  );
};

export default Login;
