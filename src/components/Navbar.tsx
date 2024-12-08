"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const NavLink = [
    { name: "Home", href: "/" },
    { name: "Browse By", href: "#browse" },
    { name: "Stories", href: "#stories" },
    { name: "Agents", href: "#agents" },
  ];

  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider text-gray-800 dark:text-white">
              <span className="text-blue-500">Stay</span>Cation
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NavLink.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-gray-800 dark:text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-md font-medium ${
                  pathName === link.href ? "text-blue-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dark Mode Toggle for Desktop */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="focus:outline-none text-gray-800 dark:text-gray-300 hover:text-blue-500"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364 7.364l-1.414-1.414M7.05 7.05l-1.414-1.414m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.293 16.293A8 8 0 118 1.746m1.5 0V3.5M21 8h-1.5M3.5 8H2m9.75-6.75L12 2m-4.5 2.5l.75.75M4.5 19.5l.75-.75"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none text-gray-800 dark:text-white"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 fixed top-16 left-0 right-0 z-20 py-6 shadow-lg">
          <div className="space-y-4 text-center">
            {NavLink.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-800 dark:text-white block hover:text-blue-500 py-2 rounded-md text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="focus:outline-none text-gray-800 dark:text-gray-300 hover:text-blue-500"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364 7.364l-1.414-1.414M7.05 7.05l-1.414-1.414m12.728 0l-1.414 1.414M7.05 16.95l-1.414 1.414"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.293 16.293A8 8 0 118 1.746m1.5 0V3.5M21 8h-1.5M3.5 8H2m9.75-6.75L12 2m-4.5 2.5l.75.75M4.5 19.5l.75-.75"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
