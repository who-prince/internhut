import React from "react";

import V1 from "../assets/feedback.png";
import {
  SendHorizonal,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="h-full w-full bg-secondary">
      <div className="h-full text-white flex justify-center items-center">
        <h1 className=" hidden md:block font-mono text-3xl md:text-6xl uppercase font-bold">
          We'd love to hear from you !
        </h1>
        <h1 className="text-white text-4xl font-bold uppercase md:hidden">Contact Us</h1>
      </div>
      <div className="w-full h-[90%] flex justify-between items-center p-4 md:p-12">
        <div className=" h-full w-full md:w-[50%] flex flex-col gap-4 justify-between items-center ">
          <div className=" w-full h-[30%] bg-tertiary bg-opacity-30 p-4 rounded-xl flex justify-between flex-col mt-8">
            <h1 className=" uppercase text-color_1 text-xl font-bold text-center">
              Ping us at
            </h1>
            <div className=" text-white w-full flex justify-between ">
              <Link to={"https://www.facebook.com/prince.chaurasia.169405"}>
                <Facebook size={'58'} className=" scale-50 md:scale-100 duration-200 hover:scale-75" />
              </Link>
              <Link to={"https://twitter.com/shutup_prince"}>
                <Twitter size={"58"} className="scale-50 md:scale-100 duration-200 hover:scale-75" />
              </Link>
              <Link to={"https://www.linkedin.com/in/princechaurasia"}>
                <Linkedin size={"58"} className=" scale-50 md:scale-100 duration-200 hover:scale-75" />
              </Link>
              <Link to={"https://www.instagram.com/mr_95.2/"}>
                <Instagram size={"58"} className=" scale-50 md:scale-100 duration-200 hover:scale-75" />
              </Link>
              <Link to={"https://github.com/mr-dev-prince"}>
                <Github size={"58"} className=" scale-50 md:scale-100 duration-200 hover:scale-75" />
              </Link>
            </div>
          </div>
          <div className="w-full ">
            <form
              className=" w-full flex flex-col gap-4"
              action=""
              spellCheck="false"
            >
              <textarea
                className=" border-none outline-none rounded-xl bg-primary p-4 resize-none h-[60%] tracking-wide font-medium bg-opacity-40 text-white text-md"
                autoFocus
                name=""
                id=""
                cols="20"
                rows="10"
                placeholder="Feedback or Queries ?"
              ></textarea>
              <div className=" flex justify-between">
                <input
                  className="w-[88%] h-12 rounded-xl border-none outline-none p-4 font-bold tracking-wide"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="w-[10%] flex justify-center items-center text-white rounded-xl bg-color_1 hover:bg-green duration-200"
                >
                  <SendHorizonal />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" h-full w-[50%] animate-wiggle hidden md:flex justify-center items-center">
          <img className="h-96" src={V1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
