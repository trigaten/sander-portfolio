"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar({ variant }: { variant: "light" | "dark" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex flex-wrap justify-between items-center px-8 py-2 mt-6 p-4">
      <div className="text-lg font-skModernRegular md:p-4">
        <a
          href="/"
          className={`md:ml-12 ${
            variant == "light"
              ? "hover:text-green-700"
              : "hover:text-emerald-400"
          } transition-colors duration-300 ${
            variant === "light" ? "text-black" : "text-white"
          }`}
        >
          Sander Schulhoff 🌱
        </a>
      </div>

      <button className="md:hidden text-lg z-50" onClick={toggleMenu}>
        {isMenuOpen ? (
          <X size={24} color={variant === "light" ? "black" : "black"} />
        ) : (
          <Menu size={24} color={variant === "light" ? "black" : "white"} />
        )}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
        onClick={toggleMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white p-4 ${
            variant === "light" ? "bg-white" : "bg-gray-800"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-4 mt-16">
            <li className="text-lg font-skModernRegular">
              <a
                href="/projects"
                className={`${
                  variant == "light"
                    ? "hover:text-green-700"
                    : "hover:text-emerald-400"
                } transition-colors duration-300 ${"text-black"}`}
              >
                Projects & Research
              </a>
            </li>
            <li className="text-lg font-skModernRegular">
              <a
                href="/sander_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  variant == "light"
                    ? "hover:text-green-700"
                    : "hover:text-emerald-400"
                } transition-colors duration-300 ${"text-black"}`}
              >
                Resume
              </a>
            </li>
            <li className="text-lg font-skModernRegular">
              <a
                href="/blog"
                className={`${
                  variant == "light"
                    ? "hover:text-green-700"
                    : "hover:text-emerald-400"
                } transition-colors duration-300 ${"text-black"} `}
              >
                Blog
              </a>
            </li>
            <li className="text-lg font-skModernRegular">
              <Link
                href="#bottom"
                className={`${
                  variant == "light"
                    ? "hover:text-green-700"
                    : "hover:text-emerald-400"
                } transition-colors duration-300 ${"text-black"}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                  toggleMenu();
                }}
              >
                The Garden 🪴
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden md:flex md:flex-grow md:justify-center">
        <ul className="flex flex-row md:space-x-12">
          <li className="text-lg font-skModernRegular">
            <a
              href="/projects"
              className={`${
                variant == "light"
                  ? "hover:text-green-700"
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
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                variant == "light"
                  ? "hover:text-green-700"
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
                  ? "hover:text-green-700"
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

      <div className="hidden md:block text-lg font-skModernRegular">
        <Link
          href="#bottom"
          className={`${
            variant == "light"
              ? "hover:text-green-700"
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
        </Link>
      </div>
    </nav>
  );
}
