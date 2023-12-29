import React from "react";

const Logincard = () => {
  const togglePassword = () => {
    let x = document.getElementById("passInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  return (
    <div className="w-full md:w-[70%] rounded-2xl backdrop-brightness-90 flex justify-evenly items-center p-8 flex-col">
      <h1 className="uppercase text-white font-bold text-2xl">Login</h1>
      <form
        action=""
        className=" w-full flex flex-col justify-center items-center gap-8 text-xl font-mono p-4 "
        spellCheck="false"
      >
        <input
          className="w-full outline-none border-none p-2 capitalize bg-color_1 bg-opacity-25 rounded-xl text-white"
          type="text"
          maxLength={"30"}
          placeholder="Full Name"
          autoComplete="off"
        />
        <input
          className="w-full outline-none border-none p-2 bg-color_1 bg-opacity-25 rounded-xl text-white"
          type="email"
          placeholder="E-mail"
        />
        <input
          className="w-full outline-none border-none p-2 bg-color_1 bg-opacity-25 rounded-xl text-white"
          type="tel"
          maxLength={"14"}
          placeholder="Phone Number"
        ></input>
        <div>
          <input
            className="w-full outline-none border-none p-2 bg-color_1 bg-opacity-25 rounded-xl text-white relative"
            type="password"
            placeholder="New Password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            id="passInput"
          />
          <input
            type="checkbox"
            onClick={() => {
              togglePassword();
            }}
            className=" ml-28 md:ml-60 cursor-pointer"
          />
          <label className="text-sm text-white">
            {" "}Show Password
          </label>
        </div>
        <button
          className="h-12 w-40 bg-color_1 rounded-xl text-xl font-mono hover:bg-green outline outline-2 -outline-offset-4 text-white uppercase hover:outline-offset-4 duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Logincard;
