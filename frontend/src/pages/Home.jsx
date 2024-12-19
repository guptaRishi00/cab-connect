import React from "react";
import hero4 from "../assets/hero4.jpg";
import cab from "../assets/cab1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { FaDotCircle } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col justify-between w-full">
        {/* Hero Section */}
        <div className="bg-black py-10 px-5 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Content Section */}
          <div className="flex flex-col gap-10 lg:w-1/2 lg:h-[500px]">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Go anywhere with Cab Connect!
            </h1>
            <div className="flex flex-col gap-5 md:w-3/4">
              <p className="text-white">Request a ride, hop in, and go.</p>
              <span className="relative">
                <FaDotCircle className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="text"
                  className="bg-white rounded px-10 py-2 w-full"
                  placeholder="Enter location"
                />
              </span>
              <span className="relative">
                <FaVectorSquare className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="text"
                  className="bg-white rounded px-10 py-2 w-full"
                  placeholder="Enter destination"
                />
              </span>
              <button className="bg-white rounded px-5 py-3 font-medium md:w-1/2">
                See Prices
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 lg:h-[500px] flex items-center justify-center">
            <img
              src={hero4}
              alt="Hero"
              className="rounded-md w-full h-full object-cover aspect-square"
            />
          </div>
        </div>

        {/* Captain Section */}
        <div className="bg-white py-10 px-5 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">
              Drive when you want, make what you need
            </h1>
            <p className="font-light">
              Make money on your schedule with deliveries or rides—or both. You
              can use your own car or choose a rental through&nbsp;Uber.
            </p>
          </div>
          <Link to="/captain-login">
            <button className="bg-black rounded py-5 px-10 text-white">
              Login as Captain
            </button>
          </Link>
          <img src={cab} alt="Cab" className="rounded" />
        </div>
      </div>
    </div>
  );
}

export default Home;
