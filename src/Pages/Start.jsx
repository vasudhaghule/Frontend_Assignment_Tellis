import React from "react";
import Simg from "../assets/betty1.webp";
const Start = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 animate-gradient-x py-20">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-10 w-full max-w-md mx-auto border border-white/30">
        
        <img
          src={Simg}
          alt="Betty"
          className="w-20 h-20 rounded-full mx-auto mb-6 shadow-md border-4 border-white"
        />

        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Start Your Mortgage Application
        </h2>

        <p className="text-center text-gray-600 mb-8">
          Fill in a few basic details to begin your journey.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="vasudhaghule33@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Property Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none">
              <option>Home Purchase</option>
              <option>Refinance</option>
              <option>Investment</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Start Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Start;
