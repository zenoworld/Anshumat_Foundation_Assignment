import React from "react";
import { TaxInfoData } from "../data";
const TaxInfo = () => {
  return (
    <section className="py-20 bg-gray-300 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-700 dark:text-white">
          Tax Information
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {
            TaxInfoData.map((data, index) => (
              <div 
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-white">{data.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {data.content}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default TaxInfo;
