import React from "react";
import { Link } from "react-router-dom";
import l1 from "../assets/logo_2.png";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <div className=" h-full md:h-56 w-full bg-secondary p-8 md:p-16 ">
      <div className=" flex md:flex-row flex-col justify-between">
        <div className=" md:w-[18%] w-full md:block flex flex-col justify-center items-center">
          <Link to={'/'}><img className="h-12" src={l1} alt="" /></Link>
          <p className=" font-bold text-color_1 uppercase font-mono mt-4 tracking-widest animate-change">
            Empowering Enthusiasts.
          </p>
          <div className="w-80 h-[1px] bg-white rounded-xl animate-anima"></div>
        </div>
        <div className="flex justify-center gap-16 font-mono mt-4 md:mt-0">
          <div className=" text-white font-bold uppercase flex flex-col gap-2">
            <Link to={"/resources"}>Resources</Link>
            <Link to={"/affiliates"}>Affiliates</Link>
            <Link to={"/community"}>Community</Link>
          </div> 
          <div className=" text-white font-bold uppercase flex flex-col gap-2">
            <Link to={"/about"}>About Us</Link>
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/glossary"}>Glossary</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className=" h-[1px] w-80 bg-white mt-2"></div>
        <div className="flex p-4 gap-10 text-white">
          <Link to={"https://www.facebook.com/prince.chaurasia.169405"}>
            <Facebook />
          </Link>
          <Link to={"https://twitter.com/shutup_prince"}>
            <Twitter />
          </Link>
          <Link to={"https://www.linkedin.com/in/princechaurasia"}>
            <Linkedin />
          </Link>
          <Link to={"https://www.instagram.com/mr_95.2/"}>
            <Instagram />
          </Link>
          <Link to={"https://github.com/mr-dev-prince"}>
            <Github />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
