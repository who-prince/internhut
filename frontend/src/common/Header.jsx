import React from "react";
import { Link } from "react-router-dom";
import v3 from "../assets/logo_2.png";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-primary px-8 h-20 sticky top-0 z-50">
      <Link to={"/"}>
        <img className=" w-36 " src={v3} alt="" />
      </Link>
      <div className="w-{30%} hidden md:flex justify-center items-center gap-24 font-medium text-2xl text-white uppercase font-mono ">
        <HashLink to={"/"}>Home</HashLink>
        <HashLink to={"/about"}>About</HashLink>
        <HashLink to={"/contact"}>Contact Us</HashLink>
      </div>
      <Link to={"/login"}>
        <button className="w-28 p-2 text-white rounded-md bg-color_1 font-medium text-xl font-mono uppercase hover:bg-opacity-80">
          Log In
        </button>
      </Link>
    </nav>
  );
};

export default Header;
