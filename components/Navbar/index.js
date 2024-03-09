"use client"
import { useState } from "react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";


function Navbar() {
  const menuItems = ["Home", "About", "Team", "Reviews"];
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div className="flex justify-center ">
      <div className=" flex justify-between w-[90%] items-center my-3  p-3">
      <div>
      <img src="./assets/images/logo.png" alt="Logo" className="w-18 h-14" />
      </div>
      <div className="flex space-x-5">
        {menuItems.map((item, index) => (
          <>
          <div
          key={index}
          className={`text-grayHead cursor-pointer ${
            selectedItem === index ? "border-b-2 pb-2" : ""
          }`}
          onClick={() => setSelectedItem(index)}
        >
              <span >{item}</span>
            </div>
          </>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2">
        <div className="text-xs">Live Help</div>
        <div className="text-2xl"> <FaCaretDown/></div>
      </div>
    </div>
    </div>
  
  );
}

export default Navbar;
