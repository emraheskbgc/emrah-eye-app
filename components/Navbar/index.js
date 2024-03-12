"use client"
import { useState } from "react";
import React from "react";
import { FaCaretDown } from "react-icons/fa";


function Navbar() {
  const menuItems = [
    {
    id:1,
    name:"Home"
  },
  {
    id:2,
    name:"About"
  },
  {
    id:3,
    name:"Team"
  },
  {
    id:4,
    name:"Reviews"
  },
];
  const [selectedItem, setSelectedItem] = useState(menuItems[0].id);
  return (
    <div className="flex justify-center ">
      <div className=" flex justify-between w-[90%] items-center ">
      <div>
      <img src="./assets/images/logo.png" alt="Logo" className="w-20 h-20" />
      </div>
      <div className="flex space-x-5">
        {menuItems.map((item, index) => (
          
          <span
          key={item.id}
          className={`text-grayHead cursor-pointer ${
            selectedItem === item.id ? "border-b-2 pb-2" : ""
          }`}
          onClick={() => setSelectedItem(item.id)}
        >
          {item.name}
        </span>
          
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
