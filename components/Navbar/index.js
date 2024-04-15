"use client";
import { useState,useEffect } from "react";
import React from "react";

import Link from "next/link";
import AnimatedHamburgerButton from "./AnimatedHamburgerButton";
import { MobileMenu } from "./MobileMenu";

function Navbar() {
  // Menü öğeleri listesi
  const menuItems = [
    {
      id: 1,
      name: "Home",
      linkPath:"/"
    },
    {
      id: 2,
      name: "About",
      linkPath:"/about"
    },
    {
      id: 3,
      name: "Team",
      linkPath:"/team"
    },
    {
      id: 4,
      name: "Reviews",
      linkPath:"/reviews"
    },
  ];
  

 
  const [selectedItem, setSelectedItem] = useState("Home"); 
 
  const [active, setActive]= useState(false)



const handleClickLocalItem = (item) => {
  setSelectedItem(item)
}

  const phoneNumber = "+14807267009";
  const call = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const message = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div className="flex justify-center h-20 bg-gray-50">
      <div className="flex relative justify-between  px-5 items-center md:w-full w-[90%]     sm:px-6 mt-2 md:mt-0 shadow-2xl md:shadow-none rounded-2xl md:rounded-none ">
        <div className="  z-10 bg-grayHead bg-opacity-5 rounded-full w-24 h-24 md:w-64 md:h-64 flex justify-center items-center  md:mt-20">
          <div className=" bg-grayHead bg-opacity-10 rounded-full w-20 h-20 md:w-56 md:h-56 flex justify-center items-center ">
            <div className=" bg-white/90 backdrop-brightness-200      rounded-full p-2 w-16 h-16 md:w-48 md:h-48 flex justify-center items-center ">
            
              {/* Logo */}
              <img src="./assets/images/logo/logo-04.png " className="hidden md:block" alt="Logo" />
              <img src="./assets/images/logo/logo-02.png "  className="block md:hidden" alt="Logo" />


            </div>
          </div>
        </div>
        <div className=" sm:flex space-x-5 ">
          {menuItems.map((item) => (
            <Link href={item.linkPath} key={item.linkPath} >
             <span
              
              className={`text-grayHead cursor-pointer md:block hidden scale-90 hover:scale-100 hover:duration-500 duration-300  ${
                selectedItem === item.name ? "border-b-2 pb-2 border-grayHead" : ""
              }`}
              onClick={() => {
                handleClickLocalItem(item.name);
              }}
            >
              {item.name}
            </span>
            </Link>
           
          ))}
        </div>
        <div className=" flex sm:hidden border  rounded-lg bg-darkRed ">
          {/* Mobil cihazlarda menüyü açma/kapama butonu */}
              <AnimatedHamburgerButton active={active} setActive={setActive}/>
        </div>
        {/* Mobil cihazlarda menü tam ekran olarak açıldığında */}
        {active && (
          <div className="absolute top-0 left-0 mt-20 w-full md:hidden z-50">
           <MobileMenu menuItems={menuItems} selectedItem={selectedItem} setSelectedItem={setSelectedItem} setActive={setActive}/>
          </div>
         
        )}
        {/* Diğer cihazlarda görünen yardım butonu */}
        <div className="md:flex hidden space-x-2 ">
        <Link href="/contact">
        <div
            
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">Schedule Exam</div>
          </div>
        </Link>
          <div
            onClick={call}
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">Call Center</div>
          </div>
          <div
            onClick={message}
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100 hover:duration-500 duration-300">Chat with us</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
