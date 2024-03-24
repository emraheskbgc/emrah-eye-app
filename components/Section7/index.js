"use client"
import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import styles from "./styles.module.css";
import datas from "@/public/assets/data/section7.json";

function Section7() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);



  const scrollToIndex = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.offsetWidth;
      const newPosition = index * (scrollWidth / datas.length); // Her gösterge noktası için bir bölüm
      scrollRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div >
      <div className="flex justify-center text-[30px] md:text-[60px] font-[500] mt-20">
        <h1 className="flex flex-col">
          <span>customer</span>{" "}
          <span className="text-redTitle ml-10 mt-[-20px]">reviews</span>
        </h1>
      </div>
     
      <div ref={scrollRef} className={`flex space-x-1 mt-10   md:ml-20 overflow-x-auto ${styles.scrollYOff}`}>
        {datas.map((data) => (
          <div key={data.id} >
          <div  className="bg-grayIcon p-5  md:w-[400px] w-[350px]  items-center  rounded-2xl ml-4">
            <div className="flex w-full  items-center">
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
          </div>
          
        ))}
      </div>

      <div className=" hidden md:flex justify-start space-x-1 mt-6 md:ml-24 ml-5">
        {datas.map((_, index) => (
          <button
            key={index}
            className={`h-3  rounded-full  ${activeIndex === index ? 'bg-darkRed  w-6 ' : 'bg-darkRed w-3'}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Section7;
