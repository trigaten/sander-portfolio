"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
// import resume from "../../../public/resume/sander_resume.pdf";

export default function Navbar({ variant }: { variant: "light" | "dark" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-2 mt-6 p-4 ">
      <div className="text-lg font-skModernRegular p-4">
        <a
          href="/"
          className={`ml-12 ${
            variant == "light"
              ? "hover:text-emerald-700"
              : "hover:text-emerald-400"
          } transition-colors duration-300 ${
            variant === "light" ? "text-black" : "text-white"
          }`}
        >
          Sander Schulhoff 🌱
        </a>
      </div>

      <button className="md:hidden text-lg" onClick={toggleMenu}>
        {isMenuOpen ? (
          <X size={24} color={variant === "light" ? "black" : "white"} />
        ) : (
          <Menu size={24} color={variant === "light" ? "black" : "white"} />
        )}
      </button>

      <div
        className={`w-full md:w-auto md:flex-grow md:flex md:justify-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 mt-4 md:mt-0">
          <li className="text-lg font-skModernRegular">
            <a
              href="/projects"
              className={`${
                variant == "light"
                  ? "hover:text-emerald-700"
                  : "hover:text-emerald-400"
              } transition-colors duration-300 ${
                variant === "light" ? "text-black" : "text-white"
              }`}
            >
              Projects & Research
            </a>
          </li>
          <li className="text-lg font-skModernRegular">
            <a
              href="/sander_resume.pdf"
              download="sander_resume.pdf"
              className={`${
                variant == "light"
                  ? "hover:text-emerald-700"
                  : "hover:text-emerald-400"
              } transition-colors duration-300 ${
                variant === "light" ? "text-black" : "text-white"
              }`}
            >
              Resume
            </a>
          </li>
          <li className="text-lg font-skModernRegular">
            <a
              href="/blog"
              className={`${
                variant == "light"
                  ? "hover:text-emerald-700"
                  : "hover:text-emerald-400"
              } transition-colors duration-300 ${
                variant === "light" ? "text-black" : "text-white"
              } `}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* The Garden link */}
      <div
        className={`w-full md:w-auto text-lg font-skModernRegular mt-4 md:mt-0 ${
          isMenuOpen ? "block" : "hidden md:block"
        }`}
      >
        <a
          href="#bottom"
          className={`${
            variant == "light"
              ? "hover:text-emerald-700"
              : "hover:text-emerald-400"
          } transition-colors duration-300 ${
            variant === "light" ? "text-black" : "text-white"
          } mr-12`}
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
