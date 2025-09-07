import React from "react";
import { SalaryBreakdownData } from "../data";
import { data } from "motion/react-client";

const SalaryBreakdown = () => {
  return (
    <section className="py-20 bg-gray-300 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700 dark:text-white">Salary Breakdown</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {
            SalaryBreakdownData.map((data, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900  p-6 rounded-xl shadow-xl">
                <h3
                  className="text-xl text-gray-700 dark:text-white font-semibold mb-2">{data.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{data.content}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default SalaryBreakdown;
