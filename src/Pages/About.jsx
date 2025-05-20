import React from "react";

const About = () => {
  return (
  <div className="relative min-h-screen overflow-y-auto bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 animate-gradient-x">
  <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

  

  <div className="relative z-10 max-w-3xl mx-auto mt-24 p-10 bg-white/70 rounded-2xl shadow-xl backdrop-blur-lg border border-white/20">
    <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center drop-shadow-md">
   About Us
    </h2>

    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
      At <span className="font-semibold text-indigo-600">Better Mortgage</span>, our mission is to simplify and streamline the mortgage process for everyone — whether you're buying your first home or refinancing...
    </p>

    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
     Our platform offers; an intuitive mortgage calculator, helpful resources...
    </p>

    <p className="text-lg text-gray-700 leading-relaxed">
      Whether you're exploring loan options or just getting started, Better Mortgage is here to help...
    </p>
  </div>
</div>

  );
};
export default About;
