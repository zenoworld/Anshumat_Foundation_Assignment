import React from "react";
import { navbarMenuItems } from "../data";
import DarkToggle from "./DarkToggle";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Salaryfy.io</h1>
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
            {
              navbarMenuItems.map((item, index) => (
                <li key={index} className="hover:text-blue-500 cursor-pointer">{item.name}</li>
              ))
            }
          </ul>
          <DarkToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
