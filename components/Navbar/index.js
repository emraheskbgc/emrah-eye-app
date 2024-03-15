"use client";
import { useState } from "react";
import React from "react";
import { FaBars, FaCaretDown } from "react-icons/fa";

function Navbar() {
  const menuItems = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "About"
    },
    {
      id: 3,
      name: "Team"
    },
    {
      id: 4,
      name: "Reviews"
    },
  ];

  const [selectedItem, setSelectedItem] = useState(menuItems[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-full max-w-screen-lg items-center px-4 sm:px-6 lg:px-8">
        <div>
          <img src="./assets/images/logo1.png" alt="Logo" className="w-14 h-16" />
        </div>
        <div className="flex sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-grayHead cursor-pointer focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <div className={`sm:flex space-x-5 ${isMenuOpen ? "flex flex-col mt-4" : "hidden"}`}>
          {menuItems.map((item, index) => (
            <span
              key={item.id}
              className={`text-grayHead cursor-pointer ${
                selectedItem === item.id ? "border-b-2 pb-2" : ""
              }`}
              onClick={() => {
                setSelectedItem(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="hidden sm:flex justify-center items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2">
          <div className="text-xs">Live Help</div>
          <div className="text-2xl">
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
