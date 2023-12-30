import React, { useState } from "react";
import { authCardContext } from "../AppContext";
import { useContext } from "react";
import axios from "axios";

export const SignInCard = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    await axios
      .post("/api/v1/signin", { username, password })
      .then((res) => {
        res.redirect("/");
        console.log(res.status);
        console.log("logged in successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { auth, setAuth } = useContext(authCardContext);

  const handleCard = () => {
    setAuth(!auth);
    console.log(auth);
  };

  return (
    <div className="w-full md:w-[70%] rounded-2xl backdrop-brightness-90 flex justify-evenly items-center p-8 flex-col">
      <h1 className="uppercase text-white font-bold text-2xl">Sign-in</h1>
      <form
        method="POST"
        className=" w-full flex flex-col justify-center items-center gap-8 text-xl font-mono p-4 "
        spellCheck="false"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full outline-none border-none p-2 capitalize bg-color_1 bg-opacity-25 rounded-xl text-white"
          type="text"
          maxLength={"30"}
          placeholder="Username/Email"
          autoComplete="off"
          id="username"
          onChange={handleChange}
          required
        />

        <input
          className="w-full outline-none border-none p-2 bg-color_1 bg-opacity-25 rounded-xl text-white relative"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          title="Must conta in at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          id="password"
          onChange={handleChange}
        />

        <div className="flex justify-center gap-4">
          <input
            type="checkbox"
            onClick={handleShowPassword}
            size={"50"}
            className=" ml-28 md:ml-60 cursor-pointerw-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="text-sm text-white"> Show Password</label>
        </div>

        <button
          className="h-12 w-40 bg-color_1 rounded-xl text-xl font-mono hover:bg-green outline outline-2 -outline-offset-4 text-white uppercase hover:outline-offset-4 duration-200"
          type="submit"
        >
          Submit
        </button>

        <div>
          <p className="text-white">
            Don't have an account ?{" "}
            <span
              onClick={handleCard}
              className="cursor-pointer font-medium underline text-bubble-gum"
            >
              Sign-up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
