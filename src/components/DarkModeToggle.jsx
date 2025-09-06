import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 
                 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer ">
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default DarkModeToggle;
