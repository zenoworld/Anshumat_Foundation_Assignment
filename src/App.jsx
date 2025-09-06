import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SalaryBreakdown from "./components/SalaryBreakdown";
import TaxInfo from "./components/TaxInfo";
import FinancialEducation from "./components/FinancialEducation";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <SalaryBreakdown />
      <TaxInfo />
      <FinancialEducation />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;
