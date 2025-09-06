import React from "react";

const FinancialEducation = () => {
  const topics = [
    { title: "Budgeting Basics", desc: "Learn how to create and follow a monthly budget." },
    { title: "Investments", desc: "Understand stocks, mutual funds, and long-term wealth building." },
    { title: "Savings", desc: "Tips to save more effectively and grow emergency funds." },
    { title: "Retirement Planning", desc: "Plan for a financially secure retirement." },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Financial Education
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialEducation;
