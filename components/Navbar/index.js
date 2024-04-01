"use client";
import { useState } from "react";
import React from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import {motion} from "framer-motion"

function Navbar({ call, message }) {
  // Menü öğeleri listesi
  const menuItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Team",
    },
    {
      id: 4,
      name: "Review",
    },
  ];

  // Seçili öğe ve menü açık durumu state'lerini tanımla
  const [selectedItem, setSelectedItem] = useState(menuItems[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-center h-20">
      <div className="flex  justify-between  px-5 items-center md:w-full w-[90%]     sm:px-6 mt-2 md:mt-0 shadow-2xl md:shadow-none rounded-2xl md:rounded-none ">
        <motion.div initial={{ x:-250 }}
        animate={{ x:0 }}
        transition={{ duration: 1 }} className="  z-10 bg-grayHead bg-opacity-5 rounded-full md:w-60 w-[72px] h-[72px] md:h-60 flex justify-center items-center  md:mt-20">
          <div className=" bg-grayHead bg-opacity-10 rounded-full md:w-52 w-14 h-14 md:h-52 flex justify-center items-center ">
            <div className=" bg-grayIcon rounded-full p-2 md:w-44 w-10 h-10 md:h-44 flex justify-center items-center ">
              {/* Logo */}
              <img src="./assets/images/logo/logo-04.png "  alt="Logo" />
            </div>
          </div>
        </motion.div>
        <div className=" sm:flex space-x-5 ">
          {menuItems.map((item) => (
            <span
              key={item.id}
              className={`text-grayHead cursor-pointer md:block hidden ${
                selectedItem === item.id ? "border-b-2 pb-2 border-grayHead" : ""
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
        <div className="flex sm:hidden border p-2 rounded-lg bg-grayHead text-grayIcon ">
          {/* Mobil cihazlarda menüyü açma/kapama butonu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" cursor-pointer focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobil cihazlarda menü tam ekran olarak açıldığında */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-grayIcon bg-opacity-90 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg ">
              {/* Kapatma butonu */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-0 right-0 m-4 text-grayHead cursor-pointer focus:outline-none"
              >
                <FaTimes />
              </button>
              {/* Menü öğelerini listele */}
              {menuItems.map((item, index) => (
                <span
                  key={item.id}
                  className={`text-grayHead flex flex-col  cursor-pointer ${
                    selectedItem === item.id ? "text-redTitle pb-2 " : ""
                  }`}
                  onClick={() => {
                    // Seçili öğeyi güncelle ve menüyü kapat
                    setSelectedItem(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* Diğer cihazlarda görünen yardım butonu */}
        <div className="md:flex hidden space-x-2 ">
          <div
            onClick={call}
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100">Call Center</div>
          </div>
          <div
            onClick={message}
            className="hidden sm:flex justify-center cursor-pointer items-center space-x-2 text-grayIcon bg-grayHead border rounded-full px-5 py-2"
          >
            <div className="text-xs scale-90 hover:scale-100">Chat with us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
