import React from "react";
import { Link } from "react-router-dom";
import v3 from "../assets/logo_2.png";

const Header = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-primary px-8 h-20 sticky top-0 z-50">
      <Link to={"/"}>
        <img className=" w-36 " src={v3} alt="" />
      </Link>
      <Link to={"/auth"}>
        <button className="w-full px-4 py-3 flex justify-center items-center text-white rounded-xl bg-color_1 font-medium text-xl font-mono  hover:bg-opacity-80 outline outline-2 outline-gray -outline-offset-4 hover:outline-offset-4 duration-300 hover:outline-white">
          Register/Login
        </button>
      </Link>
    </nav>
  );
};

export default Header;
