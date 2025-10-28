"use client";

import { useContext, useState } from "react";
import { FiSearch, FiBell, FiUser, FiMenu, FiSun, FiMoon, FiLogOut, FiSettings } from "react-icons/fi";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Navbar({ toggleSidebar }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="md:hidden mr-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
          <FiMenu size={24} />
        </button>
        <div className="relative">
          <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
          <FiBell size={20} />
        </button>
        <div className="relative">
          <button onClick={toggleProfileMenu} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
            <FiUser size={20} />
          </button>
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1">
              <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                <FiUser className="mr-2" /> Profile
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                <FiSettings className="mr-2" /> Settings
              </a>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                <FiLogOut className="mr-2" /> Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
