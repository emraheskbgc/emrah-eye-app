"use client"
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import styles from "./styles.module.css";
import datas from "@/public/assets/data/section7.json";

function Section7() {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  return (
    <div>
      <div className="flex justify-center text-[60px] font-[500]">
        <h1 className="flex flex-col">
          <span>customer</span>{" "}
          <span className="text-redTitle ml-10 mt-[-20px]">reviews</span>
        </h1>
      </div>
     
        <div ref={scrollRef} className={`flex space-x-10 mt-10 overflow-x-auto ${styles.scrollYOff}`}>
          {datas.map((data) => (
            <div key={data.id} className="bg-grayIcon p-5 rounded-2xl ml-4">
              <div className="flex w-80 items-center">
                <div className="mr-5">
                  <img src={data.profileImage} className="w-12 h-10 rounded-full" alt="" />
                </div>
                <div className="w-full">
                  <div className="text-darkRed font-[500] uppercase text-md">{data.name} </div>
                  <div className="flex justify-between space-x-4 ">
                    <div className="flex space-x-1 text-2xl text-starYellow">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <div className="text-commentTimeText">4 hour ago</div>
                  </div>
                </div>
              </div>
              <div className={`overflow-x-auto max-h-24 mt-4 text-commentTimeText ${styles.scrollStyle}`}>
                <p>
                  {data.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      
      <div className="md:flex justify-start ml-5 space-x-2 mt-10 hidden ">
        <button
          onClick={handleScrollLeft}
          className="bg-grayIcon text-white w-10 h-10 flex justify-center items-center rounded-full opacity-75 hover:opacity-100"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleScrollRight}
          className="bg-grayIcon text-white w-10 h-10 flex justify-center items-center rounded-full opacity-75 hover:opacity-100"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Section7;
