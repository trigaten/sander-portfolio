"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-2 mt-6 p-4 ">
      <div className="text-lg font-skModern p-4">
        <a
          href="/"
          className="ml-12 hover:text-green-700 transition-colors duration-300 text-black"
        >
          Sander Schulhoff 🌱
        </a>
      </div>

      <button className="md:hidden text-lg" onClick={toggleMenu}>
        {isMenuOpen ? (
          <X size={24} color="black" />
        ) : (
          <Menu size={24} color="black" />
        )}
      </button>

      <div
        className={`w-full md:w-auto md:flex-grow md:flex md:justify-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 mt-4 md:mt-0">
          <li className="text-lg font-skModern">
            <a
              href="/projects"
              className="hover:text-green-700 transition-colors duration-300 text-black"
            >
              Projects & Research
            </a>
          </li>
          <li className="text-lg font-skModern">
            <a
              href="/resume"
              className="hover:text-green-700 transition-colors duration-300 text-black"
            >
              Resume
            </a>
          </li>
          <li className="text-lg font-skModern">
            <a
              href="/blog"
              className="hover:text-green-700 transition-colors duration-300 text-black "
            >
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* The Garden link */}
      <div
        className={`w-full md:w-auto text-lg font-skModern mt-4 md:mt-0 ${
          isMenuOpen ? "block" : "hidden md:block"
        }`}
      >
        <a
          href="#bottom"
          className="hover:text-green-700 transition-colors duration-300 text-black mr-12"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }}
        >
          The Garden 🪴
        </a>
      </div>
    </nav>
  );
}
