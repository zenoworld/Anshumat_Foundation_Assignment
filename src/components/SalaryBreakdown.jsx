import React from "react";

const SalaryBreakdown = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Salary Breakdown</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Basic Salary</h3>
            <p className="text-gray-600 dark:text-gray-400">Fixed part of your earnings.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Allowances</h3>
            <p className="text-gray-600 dark:text-gray-400">HRA, DA, and other allowances.</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Deductions</h3>
            <p className="text-gray-600 dark:text-gray-400">PF, tax, and other deductions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryBreakdown;
