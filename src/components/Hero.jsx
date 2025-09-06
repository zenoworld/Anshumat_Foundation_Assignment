import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-6">Empowering You with Financial Literacy</h1>
      <p className="max-w-2xl mb-6 text-lg">
        Understand your salary, taxes, and investments with clarity and confidence.
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 font-semibold cursor-pointer ">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
