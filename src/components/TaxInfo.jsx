import React from "react";

const TaxInfo = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
          Tax Information
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Income Tax</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn about different tax slabs, exemptions, and deductions to plan your finances better.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Investment Benefits</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore tax-saving investment options like ELSS, PPF, NPS, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxInfo;
