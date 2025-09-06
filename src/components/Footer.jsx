import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 bg-gray-100 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm  text-gray-800 dark:text-white">© {new Date().getFullYear()} Salaryfy.io - All Rights Reserved.</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li className="hover:text-white cursor-pointer text-gray-800 dark:text-white">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer text-gray-800 dark:text-white">Terms</li>
          <li className="hover:text-white cursor-pointer text-gray-800 dark:text-white">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
