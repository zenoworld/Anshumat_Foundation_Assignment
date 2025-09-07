import React from "react";
import { footerItems } from "../data";
const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm  text-gray-800 dark:text-white">© {new Date().getFullYear()} Salaryfy.io - All Rights Reserved.</p>

        <ul className="flex gap-6 mt-4 md:mt-0">
        {
          footerItems.map((item,index) => (
            <li key={index} className="text-gray-800 hover:text-gray-700 cursor-pointer  dark:text-white dark:hover:text-gray-400">{item.name}</li>
          ))
        }
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
