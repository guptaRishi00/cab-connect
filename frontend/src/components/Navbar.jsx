import React from "react";
import logo from "../assets/logo2.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="px-5 py-5 bg-black flex items-center justify-between">
        <img src={logo} alt="" className="invert w-14" />
        <div className="flex items-center gap-5">
          <Link to={"/user-login"}>
            <h1 className="text-white">Log in</h1>
          </Link>
          <Link to="/user-register">
            <h1 className="rounded-full bg-white px-3 py-2 text-sm font-medium">
              Sign in
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
