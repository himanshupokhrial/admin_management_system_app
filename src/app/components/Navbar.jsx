"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <button className="text-2xl font-bold hover:text-gray-200 transition duration-300">
            Company Portal
          </button>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/admin">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
              Admin Login
            </button>
          </Link>
          <Link href="/employee">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
              Employee Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
              Sign Up (Employee)
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="focus:outline-none text-white hover:text-gray-200 transition duration-300"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-blue-700 space-y-2 p-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/admin">
          <button className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300">
            Admin Login
          </button>
        </Link>
        <Link href="/employee">
          <button className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 mt-[2%]">
            Employee Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300  mt-[2%]">
            Sign Up (Employee)
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
