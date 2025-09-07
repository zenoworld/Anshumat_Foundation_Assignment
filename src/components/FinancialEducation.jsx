import React from "react";
import { FinancialEducationData } from "../data";
const FinancialEducation = () => {

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-700 dark:text-white">
          Financial Education
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {
            FinancialEducationData.map((data, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl  shadow-2xl hover:shadow-lg transition duration-300 ease-in-out cursor-pointer  hover:rotate-4 md:hover:rotate-12 hover:shadow-blue-400"
              >
                <h3 className="text-xl text-gray-700 dark:text-white font-semibold mb-2">{data.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{data.content}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default FinancialEducation;
