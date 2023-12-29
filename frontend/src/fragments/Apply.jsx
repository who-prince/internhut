import React from "react";
import Form from "./Form";
import img1 from "../assets/pngwing.com (1).png";

const Apply = () => {
  return (
    <div
      id="apply"
      className=" p-8 h-full bg-secondary w-full flex justify-between items-center"
    >
      <Form />
      <div class="w-[50%] h-full hidden md:flex justify-center items-center">
        <img src={img1} class="w-[80%] rounded-xl" alt="" />
      </div>
    </div>
  );
};

export default Apply;
