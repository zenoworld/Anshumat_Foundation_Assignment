import React, { useState } from "react";

const Calculator = () => {
  const [salary, setSalary] = useState("");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    let taxable = salary * 0.1; // 10% sample
    setTax(taxable);
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Simple Tax Calculator</h2>
        <input
          type="number"
          placeholder="Enter your salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-600 rounded-md mb-4"
        />
        <button
          onClick={calculateTax}
          className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 cursor-pointer"
        >
          Calculate
        </button>
        {tax !== null && (
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Estimated Tax: ₹{tax}
          </p>
        )}
      </div>
    </section>
  );
};

export default Calculator;
