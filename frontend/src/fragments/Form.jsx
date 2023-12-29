import React from "react";
import { HashLink } from "react-router-hash-link";
import I1 from "../assets/logo1.png";

const Form = () => {
  return (
    <div class=" scale-90 md:scale-100 w-full md:w-[50%]">
      <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div class="flex justify-center mb-8">
            <img src={I1} alt="Logo" class="w-30 h-20" />
          </div>
          <h1 class="text-2xl font-semibold uppercase text-color_1 text-center text-gray-500 mt-8 mb-6">
            Application Form
          </h1>
          <form>
            <div class="mb-4">
              <input
                placeholder="Full Name"
                type="text"
                id="nombre"
                name="nombre"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div class="mb-4">
              <input
                placeholder="Email"
                type="email"
                id="apellido"
                name="apellido"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <div class="mb-4">
              <select
                placeholder="Select Domain"
                className=" w-full border rounded-lg px-4 py-2"
                name="Select Domain"
                id=""
                required
              >
                <option value="none" selected disabled hidden>
                  Select an Option
                </option>
                <option value="Web">Web Development</option>
                <option value="Data">Data Science</option>
                <option value="Android">Android Development</option>
                <option value="AI/ML">AI/ML</option>
              </select>
            </div>
            <div class="mb-6">
              <input
                type="link"
                id="confirmPassword"
                name="confirmPassword"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Github Profile Link"
                required
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                id="password"
                name="password"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="State and city"
                required
              />
            </div>
            <div class="mb-4">
              <input
                type="text"
                id="password"
                name="password"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Name of College"
                required
              />
            </div>
            <div class="mb-4">
              <select
                className=" w-full border rounded-lg px-4 py-2"
                name="sem"
                id="sem"
                required
              >
              <option value="none" selected disabled hidden>
                  Select Semester
                </option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
              </select>
            </div>
            <div className="flex justify-start items-center mb-2 gap-4 p-2">
              <input type="checkbox" className=" cursor-pointer" required  />
              <label htmlFor="" className=" font-extralight text-xs">
                Agree to our{" "}
                <HashLink
                  to={"https://www.google.com/"}
                  target="blank"
                  className=" text-green"
                >
                  terms & conditions.
                </HashLink>
              </label>
            </div>
            <div class="w-full flex justify-center items-center">
              <HashLink
                to={"#apply"}
                className=" scroll-smooth text-white font-bold uppercase bg-color_1 h-12 w-40 rounded-md font-mono p-2 duration-200 text-xl text-center outline outline-2 outline-secondary -outline-offset-4 hover:outline-offset-4 hover:bg-green"
              >
                Apply Now
              </HashLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
