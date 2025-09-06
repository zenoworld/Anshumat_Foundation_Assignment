import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-700 dark:to-gray-900 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-6">Empowering You with Financial Literacy</h1>
      <p className="max-w-2xl mb-6 text-lg">
        Understand your salary, taxes, and investments with clarity and confidence.
      </p>
      <button className="px-8 py-3 bg-white text-blue-600 dark:bg-blue-600 dark:text-white rounded-lg shadow hover:bg-gray-300 dark:hover:bg-blue-500 font-semibold cursor-pointer ">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
