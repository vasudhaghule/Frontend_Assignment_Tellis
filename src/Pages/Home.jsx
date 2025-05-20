import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
     className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-12 bg-gradient-to-tr from-[#68b6eb] via-[#9faeec] to-[#43f0c7]"

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <FaHome className="text-indigo-600 text-7xl mb-8 drop-shadow-md" />

      <motion.h1
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-tight drop-shadow-sm"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Own Your <span className="text-indigo-600">Dream Home</span> Today
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 max-w-xl sm:max-w-2xl leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Use our smart tools and insights to simplify your mortgage journey and
        take the first confident step toward your future home.
      </motion.p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <Link
          to="/start"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Start Now
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Home;
