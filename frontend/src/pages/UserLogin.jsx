import React, { useState } from "react";
import logo2 from "../assets/logo2.svg";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();

    setUserData({
      email: email,
      password: password,
    });
    console.log(email, password);

    console.log(userData);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-5 h-screen flex flex-col justify-between ">
      <div className="">
        <Link to={"/"}>
          <img src={logo2} alt="" className="w-14 md:w-20 mb-10" />
        </Link>
        <form
          className="md:w-1/2 md:mx-auto md:mt-20"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            required
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/user-register" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base md:w-1/2 md:mx-auto"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
